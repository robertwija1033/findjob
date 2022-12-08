import InputCV from "../components/makeCV/InputCV";
import Header from "../components/general/Header";

const MakeCV = () => {
  return (
    <>
      <Header Route={"/search"} />
      <div className="flex flex-col p-3 bg-[#FFCD38] text-2xl">
        <InputCV />
      </div>
    </>
  );
};

export default MakeCV;
