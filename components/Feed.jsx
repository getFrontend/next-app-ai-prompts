"use client";

import { useEffect, useState } from "react";
import { PromptCardList } from ".";

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, [])

  const handleSearchChange = (event) => {

  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          className="search_input peer"
          type="text"
          placeholder="Search for a prompt by tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>

      {/* Show All prompts */}
      <PromptCardList
        data={allPosts}
        handleTagClick={() => { }}
      />
    </section>
  )
}

export default Feed