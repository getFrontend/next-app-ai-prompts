"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 6000);
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex flex-1 justify-start items-center gap-3 cursor-pointer">
          <Image
            className="rounded-full object-contain"
            src={post.creator.image}
            alt="user image"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-green-700">{post.creator.username}</h3>
          </div>
        </div>
        <button className="copy_btn"
          onClick={handleCopy}
          aria-label="copy buton"
        >
          <Image
            src={copied === post.prompt
              ? "/assets/icons/tick.svg"
              : "/assets/icons/copy.svg"
            }
            alt={copied === post.prompt
              ? "tick icon"
              : "copy icon"
            }
            width={16}
            height={16}
          />
        </button>
      </div>
      <p className="my-5 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p className="font-inter text-sm blue_gradient cursor-pointe"
        onClick={() => handleClick && handleTagClick(post.tag)}>#{post.tag}</p>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 pt-3 flex-center gap-4 border-t border-gray-100">
          <button onClick={handleEdit} aria-label="edit button"
            className="font-inter text-md green_gradient">Edit</button>
          <button onClick={handleDelete} aria-label="delete button"
            className="font-inter text-md orange_gradient">Delete</button>
        </div>
      )}
    </div>
  )
}

export default PromptCard;