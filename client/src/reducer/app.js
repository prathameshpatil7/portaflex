const initialState = {
  loading: false,
  userData: {},
  userId: "",
};

const app = (state = initialState, { type, payload }) => {
  switch (type) {
    case "APP_SET":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default app;
