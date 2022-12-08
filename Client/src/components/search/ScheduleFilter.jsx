import { AiFillCloseCircle } from "react-icons/ai";

const ScheduleFilter = ({ OnClickSchedule, SetOnClickSchedule }) => {
  return (
    <div
      className={`flex-col gap-5 w-[90%] left-1/2 -translate-x-1/2 h-[60vh] shadow-xl shadow-[#505FA7] bg-[#F2F2F2] border-4 border-[#505FA7] fixed top-1/2 -translate-y-1/2 z-[99999] overflow-y-scroll overflow-x-hidden py-3 px-4 ${
        OnClickSchedule ? "flex" : "hidden"
      }`}
    >
      <div className="flex gap-3 justify-between pb-3">
        <div className="text-2xl w-full">
          <h3 className="pb-3">Jadwal Pekerjaan</h3>
          <div className="flex-1 w-full h-1 bg-black"></div>
        </div>
        <AiFillCloseCircle
          className="h-12 w-12 text-[#1A39B6]"
          onClick={() => SetOnClickSchedule(false)}
        />
      </div>
      <div className="flex flex-col gap-5 text-2xl h-1/2">
        <h3>Hari Kerja</h3>
        <div className="flex flex-col flex-wrap gap-5 px-3 h-3/4">
          <div className="flex gap-5 text-2xl items-center w-fit">
            <input type="checkbox" className="w-6 h-6 accent-[#1A39B6]" />
            <h3>Senin</h3>
          </div>
          <div className="flex gap-5 text-2xl items-center">
            <input type="checkbox" className="w-6 h-6 accent-[#1A39B6]" />
            <h3>Selasa</h3>
          </div>
          <div className="flex gap-5 text-2xl items-center">
            <input type="checkbox" className="w-6 h-6 accent-[#1A39B6]" />
            <h3>Rabu</h3>
          </div>
          <div className="flex gap-5 text-2xl items-center">
            <input type="checkbox" className="w-6 h-6 accent-[#1A39B6]" />
            <h3>Kamis</h3>
          </div>
          <div className="flex gap-5 text-2xl items-center">
            <input type="checkbox" className="w-6 h-6 accent-[#1A39B6]" />
            <h3>Jumat</h3>
          </div>
          <div className="flex gap-5 text-2xl items-center">
            <input type="checkbox" className="w-6 h-6 accent-[#1A39B6]" />
            <h3>Sabtu</h3>
          </div>
          <div className="flex gap-5 text-2xl items-center">
            <input type="checkbox" className="w-6 h-6 accent-[#1A39B6]" />
            <h3>Minggu</h3>
          </div>
          <div className="flex gap-5 text-2xl items-center">
            <input type="checkbox" className="w-6 h-6 accent-[#1A39B6]" />
            <h3>Bebas</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-xl">
        <h3>Jam Kerja</h3>
        <p>Masukkan jam kerja yang anda inginkan : </p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <p>Jam Masuk</p>
            <input
              type="text"
              placeholder="00.00"
              className="w-36 py-2 px-3 border border-[#1A39B6] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p>Jam Keluar</p>
            <input
              type="text"
              placeholder="00.00"
              className="w-36  py-2 px-3 border border-[#1A39B6] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScheduleFilter;
