import React, { useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const renderContent = (isContactTriggered) => {
  return (
    <div
      id="contact"
      className="text-white font-light max-layout-container contact"
    >
      <header className="modal-header pb-8 text-center">
        <h5
          className="text-center mb-4 uppercase font-semibold text-lg"
          style={{ letterSpacing: "0.1em" }}
        >
          Let’s talk about how we can help!
        </h5>
        <div className="text-center font-bold">
          <h3 className={`${isContactTriggered ? "mb-4" : "mb-10"} text-3xl`}>
            Be ready for any challenge with our adaptable business solutions.
          </h3>
        </div>
      </header>

      <form action="">
        <article className="font-light hidden md:block">
          <div className="row flex flex-col md:flex-row gap-24 w-full">
            <div className="flex flex-col w-full gap-5">
              <label className="label">
                <span>Name</span>
                <input
                  className="input p-3 rounded"
                  type="text"
                  placeholder="Name"
                />
              </label>
              <label className="label">
                <span>Organization</span>
                <input
                  className="input p-3 rounded"
                  type="text"
                  placeholder="Organization"
                />
              </label>
              <label className="label">
                <span>Select</span>
                <select className="select p-3 rounded text-tertiary-400">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                  <option value="5">Option 5</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col w-full gap-5">
              <label className="label">
                <span>Email</span>
                <input
                  className="input p-3 rounded"
                  type="text"
                  placeholder="Email"
                />
              </label>
              <label className="label">
                <span>Contact Number</span>
                <input
                  className="input p-3 rounded"
                  type="text"
                  placeholder="Contact Number"
                />
              </label>
              <label className="label">
                <span>Select</span>
                <select className="select p-3 rounded text-tertiary-400">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                  <option value="5">Option 5</option>
                </select>
              </label>
            </div>
          </div>
          <label className="label mt-5">
            <span>Message</span>
            <textarea
              className="textarea rounded"
              rows="4"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </label>
        </article>

        <article className="md:hidden">
          <div className="container px-0 flex flex-col">
            <label className="label">
              <span>Name</span>
              <input
                className="input p-2 rounded"
                type="text"
                placeholder="Name"
              />
            </label>
            <label className="label">
              <span>Email</span>
              <input
                className="input p-2 rounded"
                type="text"
                placeholder="Email"
              />
            </label>
            <label className="label">
              <span>Contact Number</span>
              <input
                className="input p-2 rounded"
                type="text"
                placeholder="Contact Number"
              />
            </label>
            <label className="label">
              <span>Organization</span>
              <input
                className="input p-2 rounded"
                type="text"
                placeholder="Organization"
              />
            </label>
            <label className="label">
              <span>Select</span>
              <select className="select p-2 rounded text-tertiary-400">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
              </select>
            </label>
            <label className="label">
              <span>Select</span>
              <select className="select p-2 rounded text-tertiary-400">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
              </select>
            </label>
            <label className="label">
              <span>Message</span>
              <textarea
                className="textarea text-tertiary-400 rounded"
                rows="4"
                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </label>
          </div>
        </article>
        <footer className="modal-footer">
          <button className="mt-6 cursor-pointer uppercase bg-[#3376b5] border border-[#fff] text-white py-2 px-9 rounded flex items-center gap-2 ml-auto btn-xl">
            <span>Send</span>
            <BsArrowRight className="w-5 h-5" />
          </button>
        </footer>
      </form>
    </div>
  );
};
export default function Contact({ isContactTriggered, onClose }) {
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
  const handleClose = () => {
    if (onClose) onClose(); // trigger callback to set isContactTriggered to false
  };

  return (
    <>
      <div className="bg-primary py-16 md:py-24">{renderContent(false)}</div>

      {/* contact model */}
      {isContactTriggered && (
        <>
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
              {renderContent(isContactTriggered)}
            </div>
          </dialog>
        </>
      )}
    </>
  );
}
