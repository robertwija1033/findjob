import ProfileType from "../types/ProfileType";

const ProfileReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ProfileType.SET_PROFILE:
      return { ...state, profile: payload };

    default:
      throw new Error(`Unhandled type ${type} in ProfileReducer`);
  }
};

export default ProfileReducer;
