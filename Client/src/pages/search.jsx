import { useEffect } from "react";
import CardBox from "../components/general/CardBox";
import Footer from "../components/general/Footer";
import ContentSearch from "../components/search/ContentSearch";
import NavFilter from "../components/search/NavFilter";
import NavSearch from "../components/search/NavSearch";

const Search = () => {
  return (
    <>
      <div className="flex items-center justify-center p-2 px-5 bg-[#1A39B6] gap-2 sticky top-0 z-10">
        <NavSearch />
      </div>
      <NavFilter />
      <ContentSearch />
      <Footer CheckColor={"search"} TextColor={"text-[#FFCD38]"} />
    </>
  );
};

export default Search;
