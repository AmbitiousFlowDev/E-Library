import { FaInfoCircle, FaTimes } from "react-icons/fa";

export default function Alert({ title, text, color, onClose }) {
  return (
    <div
      role="alert"
      className={`alert alert-${color} w-full rounded-none text-center flex justify-center items-center`}
    >
      <FaInfoCircle className="size-6" />
      <span className="font-bold">{title}</span>
      <span>{text}</span>
      {onClose && (
        <button className="btn btn-sm btn-ghost ml-2" onClick={onClose}>
          <FaTimes className="size-4" />
        </button>
      )}
    </div>
  );
}