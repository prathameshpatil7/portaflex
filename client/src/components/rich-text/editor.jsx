import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({ content, placeholder, onChange }) => {
  return (
    <div className="">
      <ReactQuill
        value={content}
        onChange={onChange}
        modules={Editor.modules}
        formats={Editor.formats}
        placeholder={placeholder || ""}
      />
    </div>
  );
};
Editor.modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["clean"],
  ],
};

// Quill formats to be included in the editor
Editor.formats = ["bold", "italic", "underline", "list", "bullet", "link"];
export default Editor;
