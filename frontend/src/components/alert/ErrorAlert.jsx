import React  from "react";
import Portal from "../../utils/Portal";
import Alert  from "./Alert";

export default function ErrorAlert({ message, onClose }) {
  return (
    <Portal>
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg">
        <Alert title="Error" text={message} color="error" onClose={onClose} />
      </div>
    </Portal>
  );
}
