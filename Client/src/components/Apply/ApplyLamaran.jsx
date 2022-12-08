import { useContext } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import ApplyContext from "../../context/actions/ApplyContext";

const ApplyLamaran = () => {
  const { lamaranApply, setLamaranApply } = useContext(ApplyContext);
  return (
    <>
      <h3 className="font-bold text=lg">Masukkan File Surat Lamaran</h3>
      <div className="relative flex items-center justify-center w-[95%] bg-[#D9D9D9] h-40 m-auto rounded-xl">
        <input type="file" className="rounded-full w-32 h-32 opacity-0" />
        <AiFillCheckCircle
          className={`text-9xl text-green-500 absolute ${
            lamaranApply ? "z-10" : "-z-10"
          }`}
        />
        <button
          className={`${
            lamaranApply ? "hidden" : "block"
          } text-[#1A39B6] bg-[#F2F2F2] absolute w-fit px-6 py-3 bg-white rounded-xl font-bold text-xl`}
          onClick={() => setLamaranApply(true)}
        >
          Insert Surat Lamaran
        </button>
      </div>
    </>
  );
};

export default ApplyLamaran;
