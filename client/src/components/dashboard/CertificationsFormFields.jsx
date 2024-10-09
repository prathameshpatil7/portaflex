import { Input } from "../ui/input";
import DatePickerWithLabel from "./DatePickerWithLabel";

const CertificationsFormFields = ({ formData, setFormData }) => {
  return (
    <>
      <Input
        name="title"
        placeholder="Certification Title"
        defaultValue={formData?.title || ""}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <DatePickerWithLabel
        name="certificationDate"
        label="Certification Date"
        date={formData?.certificationDate}
        setDate={(date) =>
          setFormData({ ...formData, certificationDate: date })
        }
      />
    </>
  );
};

export default CertificationsFormFields;
