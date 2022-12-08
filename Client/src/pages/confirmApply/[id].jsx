import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApplyCV from "../../components/Apply/ApplyCV";
import ApplyLamaran from "../../components/Apply/ApplyLamaran";
import CardApply from "../../components/Apply/CardApply";
import CompanyContext from "../../context/actions/CompanyContext";
import Header from "../../components/general/Header";

const ConfirmApply = () => {
  const [isApplyClick, setIsApplyClick] = useState(false);
  const { id } = useParams();
  const { company } = useContext(CompanyContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-between h-screen bg-[#FFCD38] overflow-hidden">
        <div>
          <Header Route={`/apply/${id}`} />
          <div className="flex flex-col gap-3 p-5">
            {company &&
              company.map((company) =>
                company.id === id ? (
                  <>
                    <h1 className="font-bold text-xl">{company.name}</h1>
                    <CardApply company={company} />
                  </>
                ) : (
                  ""
                )
              )}
            <ApplyCV />
            <ApplyLamaran />
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-12 bg-black accent-[#1A39B6]"
              />
              <p className="font-bold">
                saya setuju kalau file yang saya masukkan adalah asli dan sesuai
                dengan diri saya
              </p>
            </div>
          </div>
        </div>
        <button
          className="w-fit rounded-xl px-8 py-3 mb-10 text-white bg-[#1A39B6] text-white font-semibold"
          onClick={() => setIsApplyClick(true)}
        >
          Apply
        </button>
      </div>

      <div
        className={`absolute top-1/2 -translate-y-1/2 w-[90%] rounded-xl left-1/2 -translate-x-1/2 flex flex-col items-end px-2 gap-3 pt-4 bg-[#F2F2F2] ${
          isApplyClick ? "z-10" : "-z-10"
        }`}
      >
        <p className="text-2xl font-bold">Berhasil meng-apply pekerjaan ini</p>
        <button
          className="w-fit rounded-xl px-8 py-3 mb-10 text-white bg-[#1A39B6] text-white font-semibold"
          onClick={() => navigate("/home")}
        >
          Ya
        </button>
      </div>
    </>
  );
};
export default ConfirmApply;
