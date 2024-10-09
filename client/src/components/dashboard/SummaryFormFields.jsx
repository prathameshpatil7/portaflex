import Editor from "../rich-text/editor";

const SummaryFormFields = ({ formData, setFormData }) => {
  return (
    <Editor
      name="content"
      placeholder="Summary Content"
      content={formData?.content || ""}
      onChange={(content) => setFormData({ ...formData, content: content })}
    />
  );
};

export default SummaryFormFields;
