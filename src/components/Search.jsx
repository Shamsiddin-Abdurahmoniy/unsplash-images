// react
import { useState } from "react";
// hooks
import useFetch from "../hooks/useFetch";
function Search() {
  const [searchValue, setSearchValue] = useState("");
  function handleInputChange(name) {
    setSearchValue(name);
  }
  const KEY = "2ruUD-HWY2FdBp9KSU1e84UoifT6YytCyXRKDSsoUp0";
  const { data } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${KEY}&page=1&query=${searchValue}`
  );

  function handleSubmit() {
    setSearchValue("");
  }
  return (
    <section className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none rounded-tl rounded-bl"
        type="search"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="rounded-tr rounded-br font-bold bg-blue-600 px-6 py-2.5 text-white text-center"
      >
        Search
      </button>
    </section>
  );
}

export default Search;
