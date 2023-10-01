// components
import Header from "./components/Header";
import Search from "./components/Search";
import ImageList from "./components/ImageList";
// hooks
import useFetch from "./hooks/useFetch";
import { createContext } from "react";
export const ImageContext = createContext();
function App() {
  const KEY = "2ruUD-HWY2FdBp9KSU1e84UoifT6YytCyXRKDSsoUp0";
  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${KEY}&page=1&query=books`
  );
  // image Context
  let value = {
    data,
    isPending,
    error,
  };
  return (
    <ImageContext.Provider value={value}>
      <Header>
        <Search />
      </Header>
      <ImageList />
    </ImageContext.Provider>
  );
}

export default App;
