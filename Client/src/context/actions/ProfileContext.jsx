import { createContext, useReducer } from "react";
import ProfileReducer from "../reducers/ProfileReducer";
import ProfileType from "../types/ProfileType";

const ProfileContext = createContext({
  profile: null,
});

const INITIAL_STATE = {
  profile: null,
};

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProfileReducer, INITIAL_STATE);
  const { profile } = state;
  const setProfile = (profile) => {
    console.log(profile);
    dispatch({ type: ProfileType.SET_PROFILE, payload: profile });
  };
  const value = { profile, setProfile };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileContext;
