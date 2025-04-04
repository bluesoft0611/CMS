import React, { useEffect, useRef } from "react";
import Contact from "../pages/Home/Contact";
import { IoClose } from "react-icons/io5";

function ContactFormModal({ isContactTriggered, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isContactTriggered && dialog) {
      dialog.showModal();
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      if (dialog?.open) {
        dialog.close();
      }
      document.body.style.overflow = "auto"; // re-enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup on unmount
    };
  }, [isContactTriggered]);

  //   handle close
  const handleClose = () => {
    if (onClose) onClose(); // trigger callback to set isContactTriggered to false
  };

  return (
    <div>
      {/* Overlay background */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      <dialog ref={dialogRef} className="w-full max-w-6xl p-0">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white text-3xl z-50"
          aria-label="Close modal"
        >
          <IoClose />
        </button>
        <div className="bg-primary py-4 px-4 md:py-14 md:px-16">
          <Contact isContactTriggered={isContactTriggered} />
        </div>
      </dialog>
    </div>
  );
}

export default ContactFormModal;
