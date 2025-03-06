import DatePickerWithLabel from "./DatePickerWithLabel";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import Editor from "../rich-text/editor";

const WorkFormFields = ({ formData, setFormData }) => {
  return (
    <>
      <Input
        name="title"
        placeholder="Job Title"
        value={formData?.title || ""}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <Input
        name="company"
        placeholder="Company"
        value={formData?.company || ""}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
          disabled={formData?.isPresent}
        />
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          name="isPresent"
          id="isPresent"
          checked={formData?.isPresent}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, isPresent: checked })
          }
        />
        <Label htmlFor="isPresent">Present</Label>
      </div>
      <Editor
        name="bulletPoints"
        placeholder="Job Description"
        content={formData?.bulletPoints || ""}
        onChange={(content) =>
          setFormData({ ...formData, bulletPoints: content })
        }
      />
    </>
  );
};

export default WorkFormFields;
