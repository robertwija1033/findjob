import UserType from "../types/UserType";

const UserReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserType.SET_USER:
      return {
        ...state,
        user: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in UserReducer`);
  }
};

export default UserReducer;
