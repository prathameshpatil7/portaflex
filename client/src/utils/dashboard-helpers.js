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
  console.log(`${year}-${month}`);
  return `${year}-${month}`;
};

export const projectDataToFormData = (projectData) => {
  const formData = new FormData();
  formData.append("title", projectData.title);
  formData.append("technologies", JSON.stringify(projectData.technologies));
  formData.append("bulletPoints", JSON.stringify(projectData.bulletPoints));
  formData.append("date", projectData.date);
  formData.append("links", JSON.stringify(projectData.links));
  console.log(projectData.images);
  // Append images to FormData
  // projectData.images.forEach((image) => {
  formData.append("images", projectData.images);
  // });

  return formData;
};
