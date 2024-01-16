"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() == "") return;

    if (keyword !== "") {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="relative">
        <input
          type=""
          name=""
          id=""
          placeholder="Cari Anime..."
          className="p-2 rounded w-full"
          ref={searchRef}
        />
        <button className="absolute top-2 end-2" type="submit">
          <MagnifyingGlass size={24} />
        </button>
      </div>
    </form>
  );
};

export default InputSearch;
