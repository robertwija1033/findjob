import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CompanyContext from "../../context/actions/CompanyContext";
import { searching } from "../../utils/searching";

const CardBox = ({ SearchCompany }) => {
  const navigate = useNavigate();
  const { company } = useContext(CompanyContext);

  return (
    <>
      {SearchCompany
        ? company && !SearchCompany.length
          ? company.map((company) => (
              <div
                className="relative bg-[#1A39B6] gap-4 flex justify-between items-center w-full h-28 py-1 pr-1 rounded-lg mb-3"
                key={company.id}
                onClick={() => navigate(`/description/${company.id}`)}
              >
                <img
                  src={company.image}
                  alt=""
                  className="w-36 h-full rounded-br-full"
                />
                <div className="w-full h-full rounded-lg bg-[#F2F2F2] px-3 py-1 text-sm">
                  <h1 className="font-bold text-md">{company.name}</h1>
                  <p>{company.job}</p>
                  <p>IDR {company.wages}jt per bulan</p>
                </div>
              </div>
            ))
          : SearchCompany.map((company) => (
              <div
                className="relative bg-[#1A39B6] gap-4 flex justify-between items-center w-full h-28 py-1 pr-1 rounded-lg mb-3"
                key={company.id}
                onClick={() => navigate(`/description/${company.id}`)}
              >
                <img
                  src={company.image}
                  alt=""
                  className="w-36 h-full rounded-br-full"
                />
                <div className="w-full h-full rounded-lg bg-[#F2F2F2] px-3 py-1 text-sm">
                  <h1 className="font-bold text-md">{company.name}</h1>
                  <p>{company.job}</p>
                  <p>IDR {company.wages}jt per bulan</p>
                </div>
              </div>
            ))
        : company.map((company) => (
            <div
              className="relative bg-[#1A39B6] gap-4 flex justify-between items-center w-full h-28 py-1 pr-1 rounded-lg mb-3"
              key={company.id}
              onClick={() => navigate(`/description/${company.id}`)}
            >
              <img
                src={company.image}
                alt=""
                className="w-36 h-full rounded-br-full"
              />
              <div className="w-full h-full rounded-lg bg-[#F2F2F2] px-3 py-1 text-sm">
                <h1 className="font-bold text-md">{company.name}</h1>
                <p>{company.job}</p>
                <p>IDR {company.wages}jt per bulan</p>
              </div>
            </div>
          ))}
      <div className="w-full p-8"></div>
    </>
  );
};

export default CardBox;
