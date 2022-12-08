import { AiFillCloseCircle } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const LocationFilter = ({ OnClickLocation, SetOnClickLocation }) => {
  return (
    <>
      <div
        className={`flex-col gap-2 w-[90%] left-1/2 -translate-x-1/2 h-[60vh] shadow-xl shadow-[#505FA7] bg-[#F2F2F2] border-4 border-[#505FA7] fixed top-1/2 -translate-y-1/2 z-[99999] overflow-y-scroll py-3 px-4 ${
          OnClickLocation ? "flex" : "hidden"
        }`}
      >
        <div className="flex gap-3 justify-between pb-3">
          <div className="text-2xl w-full">
            <h3 className="pb-3">Lokasi Pekerjaan</h3>
            <div className="flex-1 w-full h-1 bg-black"></div>
          </div>
          <AiFillCloseCircle
            className="h-12 w-12 text-[#1A39B6]"
            onClick={() => SetOnClickLocation(false)}
          />
        </div>
        <p className="text-xl">
          Masukkan Lokasi perkerjaan yang anda diinginkan
        </p>
        <div className="flex px-2 py-2 border border-[#1A39B6] ">
          <MdLocationPin className="text-4xl" />
          <input
            type="text"
            className="bg-transparent w-full px-2 placeholder:text-[#1A39B6]"
            placeholder="Medan, Sumatera Utara"
          />
        </div>
      </div>
    </>
  );
};

export default LocationFilter;
