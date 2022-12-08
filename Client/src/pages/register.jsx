import AuthenticationRegister from "../components/register/AuthenticationRegister";

const Register = () => {
  return (
    <div className="relative overflow-hidden w-full h-screen bg-[#1A39B6] flex flex-col justify-end py-5 items-center">
      <div className="w-[250%] h-4/5 rounded-[50%] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#FFCD38] flex flex-col items-center justify-evenly">
        <div className="absolute flex flex-row-reverse top-0 -translate-y-[70px] w-screen justify-end items-center px-10 gap-5">
          <h1 className="text-4xl sm:text-2xl font-bold text-[#E5E5E5]">
            Find Job
          </h1>
          <img
            className="w-1/5 sm:w-1/6"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="FindJob"
          />
        </div>
        <AuthenticationRegister />
      </div>
      <button className="bg-white w-fit py-2 px-4 rounded-xl text-[#1A39B6] font-bold text-2xl">
        Back to Login
      </button>
    </div>
  );
};

export default Register;
