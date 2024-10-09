import Editor from "../rich-text/editor";
import { Input } from "../ui/input";
import DatePickerWithLabel from "./DatePickerWithLabel";

const EducationFormFields = ({ formData, setFormData }) => {
  return (
    <>
      <Input
        name="degreeTitle"
        placeholder="Degree Title"
        value={formData?.degreeTitle || ""}
        onChange={(e) =>
          setFormData({ ...formData, degreeTitle: e.target.value })
        }
      />
      <Input
        name="college"
        placeholder="College/University"
        value={formData?.college || ""}
        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
      />
      <div className="grid grid-cols-2 gap-4">
        <DatePickerWithLabel
          name="startDate"
          label="Start Date"
          date={formData?.startDate}
          setDate={(date) => setFormData({ ...formData, startDate: date })}
        />
        <DatePickerWithLabel
          name="endDate"
          label="End Date"
          date={formData?.endDate}
          setDate={(date) => setFormData({ ...formData, endDate: date })}
        />
      </div>
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

export default EducationFormFields;
