import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DescriptionCard = ({ Company }) => {
  const { id, name, job, description, image, location, wages, workSchedule } =
    Company;
  const [desc, setDesc] = useState([]);
  const navigate = useNavigate();

  const splitItems = (wages) => {
    const arr = wages.split("-");
    return arr;
  };

  const splitDesc = (desc) => {
    const arr = desc.split("\\n");
    return arr;
  };

  return (
    <>
      <div className="h-screen bg-[#FFCD38] flex flex-col justify-start p-5 overflow-hidden">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl">{name}</h1>
          <img src={`${image}`} alt="" className="w-80 h-80" />
          <h2 className="font-bold text-xl">Kategori Perusahaan</h2>
        </div>
        <div className="flex w-full gap-6">
          <div className="px-3 py-1 flex flex-col gap-3 justidy-start text-lg">
            <p>Jenis Pekerjaan</p>
            <p>Gaji</p>
            <p>Jadwal kerja</p>
            <p>Lokasi</p>
          </div>
          <div className="px-3 py-1 flex flex-col gap-3 justidy-start text-lg">
            <p>{job}</p>
            <p>
              IDR
              {wages &&
                splitItems(wages).map((wages, idx) =>
                  !idx ? (
                    <span key={idx}> {wages}jt - </span>
                  ) : (
                    <span key={idx}> {wages}jt</span>
                  )
                )}
            </p>
            <p>{workSchedule}</p>
            <p>{location}</p>
          </div>
        </div>
        <h2 className="font-bold text-xl px-3">Deskripsi Pekerjaan</h2>
        <p className="bg-white h-32 overflow-scroll mt-6 border border-2 border-black px-3 py-2">
          {description &&
            splitDesc(description).map((wages, idx) => <p>{wages}</p>)}
        </p>
        <div className="w-full flex justify-end pt-5">
          <button
            className="bg-[#1a39b6] text-white font-bold text-xl py-3 px-5 rounded-xl"
            onClick={() => navigate(`/apply/${id}`)}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default DescriptionCard;
