import { useContext } from "react";
import CompanyContext from "../../context/actions/CompanyContext";
import { AiFillCloseCircle } from "react-icons/ai";

const WagesFilter = ({ OnClickWages, SetOnClickWages }) => {
  const { searchingCompany } = useContext(CompanyContext);

  const handleClick = (e) => {
    const { name, checked } = e.target;
    searchingCompany({ isCheck: checked, wages: name }, "wages");
  };

  return (
    <div
      className={`flex-col gap-5 w-[90%] left-1/2 -translate-x-1/2 h-[60vh] shadow-xl shadow-[#505FA7] bg-[#F2F2F2] border-4 border-[#505FA7] fixed top-1/2 -translate-y-1/2 z-[99999] overflow-y-scroll py-3 px-4 ${
        OnClickWages ? "flex" : "hidden"
      }`}
    >
      <div className="flex gap-3 justify-between pb-3">
        <div className="text-2xl w-full">
          <h3 className="pb-3">Kisaran gaji</h3>
          <div className="flex-1 w-full h-1 bg-black"></div>
        </div>
        <AiFillCloseCircle
          className="h-12 w-12 text-[#1A39B6]"
          onClick={() => SetOnClickWages(false)}
        />
      </div>
      <div className="px-2 flex flex-col gap-5">
        <div className="flex gap-5 text-2xl items-center relative">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={handleClick}
            name="-1"
          />
          <h3>Dibawah 1 juta</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={handleClick}
            name="1-5"
          />
          <h3>1 juta - 5 juta</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={() => searchingCompany("5-10", "wages")}
            name="5-10"
          />
          <h3>5 juta - 10 juta</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={() => searchingCompany("15-20", "wages")}
            name="15-20"
          />
          <h3>15 juta - 20 juta</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={() => searchingCompany("20-25", "wages")}
            name="20-25"
          />
          <h3>20 juta - 25 juta</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={() => searchingCompany("25-30", "wages")}
            name="25-30"
          />
          <h3>25 juta - 30 juta</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={() => searchingCompany(">30", "wages")}
            name=">30"
          />
          <h3>Diatas 30 juta</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={() => searchingCompany("semua", "wages")}
            name="semua"
          />
          <h3>Semua</h3>
        </div>
      </div>
    </div>
  );
};

export default WagesFilter;
