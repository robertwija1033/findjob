import CardBox from "../components/general/CardBox";
import Footer from "../components/general/Footer";
import Navbar from "../components/general/Navbar";
import { useContext } from "react";
import CompanyContext from "../context/actions/CompanyContext";

const Home = () => {
  const { company } = useContext(CompanyContext);

  return (
    <>
      <Navbar />
      <div className="p-4 bg-[#FFCD38]">
        <h3 className="font-bold text-lg pb-4">Rekomendasi</h3>
        <CardBox company={company} />
      </div>
      <Footer CheckColor={"home"} TextColor={"text-[#FFCD38]"} />
    </>
  );
};

export default Home;
