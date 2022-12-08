import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineTemplate } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Footer = ({ CheckColor, TextColor }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed flex justify-around gap-3 bottom-0 px-5 inset-x-0 py-2 bg-[#1A39B6] text-[#E5E5E5] uppercase text-sm">
      <div
        className={`flex flex-col justify-center items-center ${
          CheckColor === "home" ? TextColor : ""
        }`}
      >
        <AiOutlineHome className="text-2xl" />
        <h3 onClick={() => navigate("/")}>Home</h3>
      </div>
      <div
        className={`flex flex-col justify-center items-center ${
          CheckColor === "search" ? TextColor : ""
        }`}
      >
        <AiOutlineSearch className="text-2xl" />
        <h3 onClick={() => navigate("/search")}>Search</h3>
      </div>
      <div
        className={`flex flex-col justify-center items-center ${
          CheckColor === "template" ? TextColor : ""
        }`}
      >
        <HiOutlineTemplate className="text-2xl" />
        <h3 onClick={() => navigate("/template")}>Template</h3>
      </div>
    </div>
  );
};

export default Footer;
