import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import CompanyContext from "../../context/actions/CompanyContext";

const JobFilter = ({ OnClickJob, SetOnClickJob }) => {
  const { searchingCompany } = useContext(CompanyContext);

  const handleClick = (e) => {
    // console.log(e.target.name);
    const { name, checked } = e.target;
    searchingCompany({ isCheck: checked, job: name }, "job");
  };

  return (
    <div
      className={`flex-col gap-5 w-[90%] left-1/2 -translate-x-1/2 h-[60vh] shadow-xl shadow-[#505FA7] bg-[#F2F2F2] border-4 border-[#505FA7] fixed top-1/2 -translate-y-1/2 z-[99999] overflow-y-scroll py-3 px-4 ${
        OnClickJob ? "flex" : "hidden"
      }`}
    >
      <div className="flex gap-3 justify-between pb-3">
        <div className="text-2xl w-full">
          <h3 className="pb-3">Jenis Pekerjaan</h3>
          <div className="flex-1 w-full h-1 bg-black"></div>
        </div>
        <AiFillCloseCircle
          className="h-12 w-12 text-[#1A39B6]"
          onClick={() => SetOnClickJob(false)}
        />
      </div>
      <div className="px-2 flex flex-col gap-5">
        <div className="flex gap-5 text-2xl items-center relative">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={() => searchingCompany("", "job")}
          />
          <h3>All kind of jobs</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={handleClick}
            name="admin"
          />
          <h3>Admin</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={handleClick}
            name="sales"
          />
          <h3>Sales</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={handleClick}
            name="support"
          />
          <h3>IT</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={handleClick}
            name="service"
          />
          <h3>Service</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={handleClick}
            name="staff"
          />
          <h3>staff</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={handleClick}
            name="development"
          />
          <h3>Development</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={handleClick}
            name="tech"
          />
          <h3>Tech</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={handleClick}
            name="manager"
          />
          <h3>Manager</h3>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <input
            type="checkbox"
            className="w-6 h-6 accent-[#1A39B6]"
            onClick={handleClick}
            name="manufactur"
          />
          <h3>Manufactur</h3>
        </div>
      </div>
      {/* <div className="flex justify-end">
        <button className="flex bg-[#1A39B6] w-20 items-center justify-center text-xl rounded-lg py-2 px-5 text-white font-bold">
          OK
        </button>
      </div> */}
    </div>
  );
};

export default JobFilter;
