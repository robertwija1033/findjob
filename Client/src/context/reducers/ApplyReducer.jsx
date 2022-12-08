import ApplyTypes from "../types/ApplyTypes";

const ApplyReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ApplyTypes.SET_APPLY_CV:
      return { ...state, cvApply: payload };

    case ApplyTypes.SET_APPLY_LAMARAN:
      return { ...state, lamaranApply: payload };

    default:
      throw new Error(`Unhandled type ${type} in ApplyReducer`);
  }
};

export default ApplyReducer;