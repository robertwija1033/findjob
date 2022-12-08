const CardApply = ({ company }) => {
  return (
    <>
      {company && (
        <div
          className="relative bg-[#1A39B6] gap-4 flex justify-between items-center w-full h-28 py-1 pr-1 rounded-lg mb-3 px-1"
          key={company.id}
        >
          <img
            src={company.image}
            alt=""
            className="w-32 h-full rounded-br-full bg-white"
          />
          <div className="w-full h-full rounded-lg bg-[#F2F2F2] px-3 py-1 text-sm">
            <h1 className="font-bold text-md">{company.name}</h1>
            <p>{company.job}</p>
            <p>IDR {company.wages}jt per bulan</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardApply;
