import axios from "axios";

export const call = (method = "POST", param, headers) =>
  axios({
    url: `${param.url}`,
    method,
    headers,
    data: param.body, // Use body directly, do not stringify
  })
    .catch((error) => {
      const errorMessage = error.response?.data?.error;

      if (
        errorMessage &&
        (errorMessage.includes("Expired") ||
          errorMessage === "Not authorized, token failed")
      ) {
        // Logout user when token expired
        sessionStorage.clear();
        window.location.href = "/";
      }
      throw error;
    })
    .then(({ data }) => data);

export const fetch = (
  param,
  method,
  headers = {
    "Access-Control-Allow-Origin": "*",
  }
) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    headers = { ...headers, Authorization: `Bearer ${token}` };
  }

  return call(method, param, headers);
};
