import { useReducer } from "react";
import { createContext } from "react";
import ApplyReducer from "../reducers/ApplyReducer";
import ApplyTypes from "../types/ApplyTypes";

const ApplyContext = createContext({
  cvApply: false,
  lamaranApply: false,
});

const INITIAL_STATE = {
  cvApply: false,
  lamaranApply: false,
};

export const ApplyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ApplyReducer, INITIAL_STATE);
  const { cvApply, lamaranApply } = state;
  const setCvApply = (apply) => {
    dispatch({ type: ApplyTypes.SET_APPLY_CV, payload: apply });
  };
  const setLamaranApply = (apply) => {
    dispatch({ type: ApplyTypes.SET_APPLY_LAMARAN, payload: apply });
  };
  const value = { cvApply, lamaranApply, setCvApply, setLamaranApply };

  return (
    <ApplyContext.Provider value={value}>{children}</ApplyContext.Provider>
  );
};

export default ApplyContext;
