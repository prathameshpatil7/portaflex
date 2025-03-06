import { useState, useEffect } from "react";
import Editor from "../rich-text/editor";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import DatePickerWithLabel from "./DatePickerWithLabel";

const ProjectFormFields = ({ formData, setFormData }) => {
  const [imageUrl, setImageUrl] = useState(formData?.imageUrl || null);

  useEffect(() => {
    // If formData has an image URL, set it
    if (formData?.images?.[0] && !formData.image) {
      setImageUrl(formData.images[0]);
    } else if (formData?.image) {
      setImageUrl(URL.createObjectURL(formData?.image) || null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageUrl(URL.createObjectURL(file)); // Create a preview URL
      setFormData({ ...formData, image: file }); // Store the file in formData
    }
  };

  return (
    <>
      <Input
        name="title"
        placeholder="Project Title"
        value={formData?.title || ""}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <Textarea
        name="technologies"
        placeholder="Technologies (comma separated)"
        value={formData?.technologies ? formData?.technologies.join(", ") : ""}
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
        value={formData?.githubLink || ""}
        onChange={(e) =>
          setFormData({ ...formData, githubLink: e.target.value })
        }
      />
      <Input
        name="liveLink"
        placeholder="Live Link"
        value={formData?.liveLink || ""}
        onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
      />
      <Input type="file" accept="image/*" onChange={handleImageChange} />
      <div className="image-preview">
        {imageUrl && (
          <>
            <h3>Project Banner Image:</h3>
            <img
              src={imageUrl}
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
