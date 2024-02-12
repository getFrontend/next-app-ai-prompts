"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Profile } from "@/components";

const MyProfile = () => {
  const { data: session } = useSession();
  const [myPosts, setMyPosts] = useState([]);
  const router = useRouter();

  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`);
    const data = await response.json();

    setMyPosts(data);
  };

  useEffect(() => {
    if (session?.user.id) {
      fetchPosts();
    }
  }, [session?.user.id])

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  }

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure, that you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);
        setMyPosts(filteredPosts);
        
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page."
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile;