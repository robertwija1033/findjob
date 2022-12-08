import Footer from "../components/general/Footer";
import Navbar from "../components/general/Navbar";
import Cv from "../components/template/Cv";
import SuratLamaran from "../components/template/SuratLamaran";

const Template = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#FFCD38] px-6 py-3">
        <div className="sticky w-full top-0">
          <h4 className="font-bold text-2xl px-5 py-1">Template</h4>
        </div>
        <Cv />
        <SuratLamaran />
      </div>
      <Footer />
    </>
  );
};

export default Template;
