import CompanyType from "../types/CompanyTypes";

const CompanyReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CompanyType.SET_COMPANY:
      return {
        ...state,
        company: payload,
      };
    case CompanyType.SET_SEARCH:
      return {
        ...state,
        searchCompany: [...state.searchCompany, payload[0]],
      };
    case CompanyType.DELETE_SEARCH:
      return {
        ...state,
        searchCompany: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in UserReducer`);
  }
};

export default CompanyReducer;
