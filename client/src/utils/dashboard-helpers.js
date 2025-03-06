export const getDurationAdjustedObj = (arr) => {
  return arr.map((obj) => {
    if (!obj.duration) {
      obj.duration = {};
    }

    if (obj.isPresent) {
      obj.duration.endDate = "Present";
    } else {
      obj.duration.endDate = obj.endDate;
    }

    if (obj.startDate) {
      obj.duration.startDate = obj.startDate;
    }

    return obj;
  });
};

export const formatDateForMonthInput = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  return `${year}-${month}`;
};

export const projectDataToFormData = (projectData) => {
  const formData = new FormData();

  Object.keys(projectData).forEach((key) => {
    const value = projectData[key];
    // Check if the value is an array or an object to handle JSON conversion
    if (key === "image") {
      formData.append("images", value); // Assuming value is already suitable for appending
    } else if (Array.isArray(value) || typeof value === "object") {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};
