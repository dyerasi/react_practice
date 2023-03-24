import ReactDOM from "react-dom";
//need to return a portal from modal
//background will only affect closest parent with non-static postitioning
//solution is portal that sends generated JSX from Modal to new div tag right under body
//tag this in public/index.html file at bottom
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
  //stop scrolling while modal is shown so user cant scroll past it
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">{children}</div>
        <div className="flex justify-end">{actionBar}</div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
