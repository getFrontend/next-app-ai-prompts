"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Profile } from "@/components";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore his exceptional prompts and try them out for yourself.`}
      data={userPosts}
    />
  );
};

export default UserProfile;