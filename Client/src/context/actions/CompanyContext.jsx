import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import CompanyReducer from "../reducers/CompanyReducer";
import CompanyType from "../types/CompanyTypes";
import { searching } from "../../utils/searching";

const CompanyContext = createContext({
  company: [],
  searchCompany: [],
  searching: () => {},
});

const INITIAL_STATE = {
  company: [],
  searchCompany: [],
};

export const CompanyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CompanyReducer, INITIAL_STATE);
  const { company, searchCompany } = state;
  const setCompany = (company) => {
    dispatch({ type: CompanyType.SET_COMPANY, payload: company });
  };
  const setSearchCompany = (searchCompany) => {
    dispatch({ type: CompanyType.SET_SEARCH, payload: searchCompany });
  };
  const deleteCompany = (company) => {
    dispatch({ type: CompanyType.DELETE_SEARCH, payload: company });
  };
  const searchingCompany = (search, bla) => {
    const newSearchCompany = searching(company, searchCompany, search, bla);
    if (search.isCheck) setSearchCompany(newSearchCompany);
    else {
      console.log(newSearchCompany);
      deleteCompany(newSearchCompany);
    }
  };
  const value = { company, searchCompany, setCompany, searchingCompany };

  useEffect(() => {
    getCompany();
  }, []);

  const getCompany = () => {
    axios
      .post("http://localhost/findjob/Server/company/company.php", {
        url: "http://localhost:3000/home",
      })
      .then(function (response) {
        setCompany(response.data);
      });
  };

  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  );
};

export default CompanyContext;
