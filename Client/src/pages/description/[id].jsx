import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DescriptionCard from "../../components/description/DescriptionCard";
import Header from "../../components/general/Header";
import CompanyContext from "../../context/actions/CompanyContext";

const Description = () => {
  const [business, setBusiness] = useState([{}]);
  const { id } = useParams();
  const { company } = useContext(CompanyContext);

  useEffect(() => {
    setBusiness(company[id]);
    console.log(company);
  }, [company, id]);
  return (
    <>
      <Header Route={"/search"} />
      {business && <DescriptionCard Company={business} />}
    </>
  );
};

export default Description;
