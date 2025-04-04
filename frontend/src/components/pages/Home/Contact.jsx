import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Contact({ isContactTriggered }) {
  return (
    <div
      className={`bg-primary ${isContactTriggered ? "py-0" : "py-16 md:py-24"}`}
    >
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
    </div>
  );
}
