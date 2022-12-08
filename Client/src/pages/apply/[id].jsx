import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApplyCV from "../../components/Apply/ApplyCV";
import ApplyLamaran from "../../components/Apply/ApplyLamaran";
import CardApply from "../../components/Apply/CardApply";
import CompanyContext from "../../context/actions/CompanyContext";
import Header from "../../components/general/Header";
import { Link } from "react-router-dom";

const ApplyJob = () => {
  const { id } = useParams();
  const { company } = useContext(CompanyContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-between h-screen bg-[#FFCD38] overflow-hidden">
        <div>
          <Header Route={`/description/${id}`} />
          <div className="flex flex-col gap-3 p-5">
            {company &&
              company.map((company) =>
                company.id === id ? (
                  <>
                    <h1 className="font-bold text-xl">{company.name}</h1>
                    <CardApply company={company} />
                  </>
                ) : (
                  ""
                )
              )}
            <ApplyCV />
            <ApplyLamaran />
            <Link to={"/template"} className="text-blue-700">
              Belum membuat CV atau Surat Lamaran?
            </Link>
          </div>
        </div>
        {company &&
          company.map((company) =>
            company.id === id ? (
              <>
                <button
                  className="w-fit rounded-xl px-8 py-3 mb-10 text-white bg-[#1A39B6] text-white font-semibold"
                  onClick={() => navigate(`/confirmApply/${company.id}`)}
                >
                  Next
                </button>
              </>
            ) : (
              ""
            )
          )}
      </div>
    </>
  );
};

export default ApplyJob;
