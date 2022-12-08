import { useContext } from "react";
import CompanyContext from "../../context/actions/CompanyContext";
import CardBox from "../general/CardBox";

const ContentSearch = () => {
  const { searchCompany } = useContext(CompanyContext);

  return (
    <>
      <div className="p-4 pb-10 bg-[#FFCD38]">
        <h3 className="font-bold text-lg pb-4">Halaman Pekerjaan</h3>
        <CardBox SearchCompany={searchCompany} />
      </div>
    </>
  );
};

export default ContentSearch;
