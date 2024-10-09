import Editor from "../rich-text/editor";
import { Input } from "../ui/input";
import DatePickerWithLabel from "./DatePickerWithLabel";

const AchievementsFormFields = ({ formData, setFormData }) => {
  return (
    <>
      <Input
        name="title"
        placeholder="Achievement Title"
        defaultValue={formData?.title || ""}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <DatePickerWithLabel
        name="achievementDate"
        label="Achievement Date"
        date={formData?.date}
        setDate={(date) => setFormData({ ...formData, date: date })}
      />
      <Input
        name="certificateLink"
        placeholder="Certificate Link"
        defaultValue={formData?.certificateLink || ""}
        onChange={(e) =>
          setFormData({ ...formData, certificateLink: e.target.value })
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
    </>
  );
};

export default AchievementsFormFields;
