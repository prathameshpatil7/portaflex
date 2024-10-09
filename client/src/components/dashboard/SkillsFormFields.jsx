import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const SkillsFormFields = ({ formData, setFormData }) => {
  return (
    <>
      <Input
        name="category"
        placeholder="Skill Category"
        value={formData?.category || ""}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      <Textarea
        name="skills"
        placeholder="Skills (comma separated)"
        value={formData?.skills ? formData?.skills.join(", ") : ""}
        onChange={(e) =>
          setFormData({
            ...formData,
            skills: e.target.value.split(",").map((lang) => lang.trim()),
          })
        }
        style={{ resize: "none" }}
      />
    </>
  );
};

export default SkillsFormFields;
