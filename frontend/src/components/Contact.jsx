import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ContactForm = () => {
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(null);
  const { slug } = useParams();

  const query = [
    `filters[slug][$eq]=${slug}`,
    `populate[sections][on][contact.contact][populate]=*`,
  ].join("&");

  useEffect(() => {
    fetch(`http://45.76.23.70:1337/api/pages?${query}`)
      .then((res) => res.json())
      .then((json) => {
        const data = json.data[0];
        setFormFields(data.sections[0].fields);
        const initialData = {};
        data?.sections[0]?.fields?.forEach((field) => {
          initialData[field.name] = "";
        });
        setFormData(initialData);
        if (data) setPage(data.sections[0]);
      });
  }, [slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/api/contact-forms`, {
        data: formData,
      });
      setSuccess(true);
      setError(null);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to submit form. Please try again later.");
    }
  };

  return (
    <div className="bg-primary p-10 text-white h-[866px] flex flex-col justify-center">
      <div className="max-w-[1900px] mx-auto">
        <p class="font-nunito font-normal text-lg leading-6 tracking-normal uppercase text-center">
          {page?.title}
        </p>
        <p class="font-nunito font-medium text-[30px] leading-[40px] tracking-normal text-center mt-4 mb-10">
          {page?.description}
        </p>
        {success && (
          <p className="text-green-500 text-center mb-4">
            Form submitted successfully!
          </p>
        )}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"
          onSubmit={handleSubmit}
        >
          {formFields?.map((field) => (
            <div
              key={field.id}
              className={`flex flex-col ${
                field.type === "textarea" ? "col-span-1 md:col-span-2" : ""
              }`}
            >
              <label className="mb-2 text-white font-semibold">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-sm text-gray-700"
                  rows="4"
                />
              ) : field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="p-2 border rounded-sm text-gray-700"
                >
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="p-2 border rounded-sm text-gray-700"
                />
              )}
            </div>
          ))}
          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="bg-white bg-opacity-20 text-white px-6 py-2 rounded-sm font-semibold flex items-center gap-2 border border-white"
            >
              SEND →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
