import Input from "../form/Input.jsx";
import TextArea from "../form/TextArea.jsx";

export default function ContactForm() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <Input />
        <Input />
        <TextArea />
      </div>
      <button>Submit</button>
    </div>
  );
}
