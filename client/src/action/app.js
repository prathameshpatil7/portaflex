import { fetch } from "@/service/fetch";
import { projectDataToFormData } from "@/utils/dashboard-helpers";

export const setApp = (payload) => ({
  type: "APP_SET",
  payload: {
    ...payload,
  },
});

export const createData = async (route, data) => {
  try {
    await fetch({ url: `/api/${route}/create`, body: data }, "POST");
  } catch (error) {
    console.error("Failed to save portfolio data:", error);
  }
};

export const updateData = async (route, id, data) => {
  try {
    await fetch({ url: `/api/${route}/${id}`, body: data }, "PUT");
  } catch (error) {
    console.error("Failed to save portfolio data:", error);
  }
};
export const deleteData = async (route, id) => {
  try {
    await fetch({ url: `/api/${route}/${id}` }, "DELETE");
  } catch (error) {
    console.error("Failed to save portfolio data:", error);
  }
};

export const handleCreateFormData = async (route, data) => {
  try {
    const formData = projectDataToFormData(data);
    await fetch({ url: `/api/${route}/create`, body: formData }, "POST", {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    });
  } catch (error) {
    console.error("Failed to save form data:", error);
  }
};

export const handleUpdateFormData = async (route, data) => {
  try {
    const formData = projectDataToFormData(data);
    await fetch({ url: `/api/${route}/create`, body: formData }, "PUT", {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    });
  } catch (error) {
    console.error("Failed to save form data:", error);
  }
};
