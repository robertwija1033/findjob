import {
  signInWithFacebookPopUp,
  signInWithGooglePopup,
} from "../../utils/firebase";

const ExternalLogin = () => {
  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const logFacebookUser = async () => {
    await signInWithFacebookPopUp();
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full py-5">
      <div className="text-white font-bold text-xl">Login With</div>
      <div className="flex justify-between w-full gap-4 px-5">
        <img
          className="w-24 h-24"
          src={`${process.env.PUBLIC_URL}/images/Facebook.png`}
          onClick={logGoogleUser}
        />
        <img
          className="w-20 h-20 translate-y-1/4"
          src={`${process.env.PUBLIC_URL}/images/Google.png`}
          onClick={logFacebookUser}
        />
        <img
          className="w-24 h-24"
          src={`${process.env.PUBLIC_URL}/images/Twitter.png`}
          onClick={logFacebookUser}
        />
      </div>
    </div>
  );
};

export default ExternalLogin;
