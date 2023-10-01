import { useContext } from "react";
import { ImageContext } from "../App";
import useFetch from "../hooks/useFetch";
function ImageList() {
  const { data, isPending, error } = useContext(ImageContext);
  return (
    <>
      <h1 className="text-center mt-6 underline text-2xl">Results for Cats</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {data &&
          data.map((image) => {
            return (
              <a href={image.urls.regular}>
                <img
                  className="h-72 w-full object-cover rounded-lg shadow-md"
                  src={image.urls.small}
                  alt={image.alt_description}
                />
              </a>
            );
          })}
      </div>
    </>
  );
}

export default ImageList;
