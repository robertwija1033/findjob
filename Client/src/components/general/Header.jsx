import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = ({ Route }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-2 px-5 bg-[#1A39B6] sticky top-0 z-10">
      <BiArrowBack
        className="text-white text-3xl"
        onClick={() => navigate(Route)}
      />
      <img
        className="w-14"
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        alt="FindJob"
      />
      <img src="" alt="" />
    </div>
  );
};

export default Header;
