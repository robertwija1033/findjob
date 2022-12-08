import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/actions/UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between p-2 px-5 bg-[#1A39B6] sticky top-0 z-10 gap-5">
      <img
        className="w-14"
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        alt="FindJob"
      />
      {user && (
        <img
          src={user.image}
          alt=""
          className="w-14 rounded-full h-14"
          onClick={() => navigate("/profile")}
        />
      )}
    </div>
  );
};

export default Navbar;
