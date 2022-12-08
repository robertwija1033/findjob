import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import JobFilter from "./JobFilter";
import LocationFilter from "./LocationFilter";
import ScheduleFilter from "./ScheduleFilter";
import WagesFilter from "./WagesFilter";

const NavFilter = () => {
  const [isJobClick, setIsJobClick] = useState(false);
  const [isWagesClick, setIsWagesClick] = useState(false);
  const [isScheduleClick, setIsScheduleClick] = useState(false);
  const [isLocationClick, setIsLocationClick] = useState(false);

  return (
    <>
      <div className="flex px-3 py-2 sticky top-[72px] z-10 bg-[#ADC8FF] gap-2 justify-between">
        <div
          className="p-1 bg-[#1A39B6] flex flex-row gap-2 items-center"
          onClick={() => setIsJobClick(true)}
        >
          <div className="w-[2px] h-4 bg-[#ADC8FF]"></div>
          <button className="text-[#ADC8FF] font-bold text-sm">
            Pekerjaan
          </button>
          <div className="w-[2px] h-4 bg-[#ADC8FF]"></div>
        </div>
        <div
          className="p-1 bg-[#1A39B6] flex flex-row gap-2 items-center"
          onClick={() => setIsWagesClick(true)}
        >
          <div className="w-[2px] h-4 bg-[#ADC8FF]"></div>
          <button className="text-[#ADC8FF] font-bold text-sm">Gaji</button>
          <div className="w-[2px] h-4 bg-[#ADC8FF]"></div>
          {/* <JobFilter onclick={isWagesClick} /> */}
        </div>
        <div
          className="p-1 bg-[#1A39B6] flex flex-row gap-2 items-center"
          onClick={() => setIsScheduleClick(true)}
        >
          <div className="w-[2px] h-4 bg-[#ADC8FF]"></div>
          <button className="text-[#ADC8FF] font-bold text-sm">Jadwal</button>
          <div className="w-[2px] h-4 bg-[#ADC8FF]"></div>
        </div>
        <div className="p-1 bg-[#1A39B6] flex flex-row gap-2 items-center">
          <div className="w-[2px] h-4 bg-[#ADC8FF]"></div>
          <button
            className="text-[#ADC8FF] font-bold text-sm"
            onClick={() => setIsLocationClick(true)}
          >
            Pekerjaan
          </button>
          <div className="w-[2px] h-4 bg-[#ADC8FF]"></div>
        </div>
      </div>
      <JobFilter OnClickJob={isJobClick} SetOnClickJob={setIsJobClick} />
      <WagesFilter
        OnClickWages={isWagesClick}
        SetOnClickWages={setIsWagesClick}
      />
      <ScheduleFilter
        OnClickSchedule={isScheduleClick}
        SetOnClickSchedule={setIsScheduleClick}
      />
      <LocationFilter
        OnClickLocation={isLocationClick}
        SetOnClickLocation={setIsLocationClick}
      />
    </>
  );
};

export default NavFilter;
