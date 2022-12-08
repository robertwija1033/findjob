import AuthenticationLogin from "../components/login/AuthenticationLogin";
import ExternalLogin from "../components/login/ExternalLogin";

const Login = () => {
  return (
    <div className="relative overflow-hidden w-full h-screen bg-[#1A39B6] flex flex-col justify-end py-5">
      <div className="w-[250%] h-4/6 rounded-[50%] fixed top-1/2 -translate-y-[60%] left-1/2 -translate-x-1/2 bg-[#FFCD38] flex flex-col items-center justify-evenly">
        <h1 className="absolute text-4xl sm:text-2xl font-bold text-[#E5E5E5] top-0 -translate-y-[70px]">
          Find Job
        </h1>
        <img
          className="w-1/4 sm:w-1/6"
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="FindJob"
        />
        <AuthenticationLogin />
      </div>
      <ExternalLogin />
    </div>
  );
};

export default Login;
