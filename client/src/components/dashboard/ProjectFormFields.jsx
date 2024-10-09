import { useState } from "react";
import Editor from "../rich-text/editor";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import DatePickerWithLabel from "./DatePickerWithLabel";

const ProjectFormFields = ({ formData, setFormData }) => {
  const [image, setImage] = useState(formData?.image || null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setImage(URL.createObjectURL(file));
    // Optionally, update formData here if needed
    setFormData({ ...formData, image: URL.createObjectURL(file) });
  };

  return (
    <>
      <Input
        name="title"
        placeholder="Project Title"
        defaultValue={formData?.title || ""}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <Textarea
        name="technologies"
        placeholder="Technologies (comma separated)"
        defaultValue={
          formData?.technologies ? formData?.technologies.join(", ") : ""
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            technologies: e.target.value.split(",").map((t) => t.trim()),
          })
        }
      />
      <Editor
        name="bulletPoints"
        placeholder="Bullet Points"
        content={formData?.bulletPoints || ""}
        onChange={(content) =>
          setFormData({ ...formData, bulletPoints: content })
        }
      />
      <DatePickerWithLabel
        name="date"
        label="Project Date"
        date={formData?.projectDate}
        setDate={(date) => setFormData({ ...formData, projectDate: date })}
      />
      <Input
        name="githubLink"
        placeholder="GitHub Link"
        defaultValue={formData?.githubLink || ""}
        onChange={(e) =>
          setFormData({ ...formData, githubLink: e.target.value })
        }
      />
      <Input
        name="liveLink"
        placeholder="Live Link"
        defaultValue={formData?.liveLink || ""}
        onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
      />
      <Input type="file" accept="image/*" onChange={handleImageChange} />
      <div className="image-preview">
        {image && (
          <>
            <h3>Project Banner Image:</h3>
            <img
              src={image}
              alt="Uploaded Preview"
              className="h-32 object-cover"
            />
          </>
        )}
      </div>
    </>
  );
};

export default ProjectFormFields;
