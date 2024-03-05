import React, { useState } from "react";
import { Input } from "./ui/Input";
import { TextArea } from "./ui/TextArea";
import { Button } from "./ui/btn";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validate(formData); // Validate form data
    setValidationErrors(errors); // Set validation errors

    if (Object.keys(errors).length === 0) {
      const formElement = event.target; // Get the form element
      const data = new FormData(formElement); // Create FormData object from the form element

      fetch(
        "https://script.google.com/macros/s/AKfycbxI3PKb5FRx-VRPdorASYexijtZGbobuLRKNAUGwCvVC9EPCuFYpHH5oSX7v612ABxR/exec",
        {
          method: "POST",
          body: data,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setShowThankYou(true); // Show the thank you message
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          }); // Reset form data
          setValidationErrors({}); // Clear validation errors
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  const validate = (data) => {
    const errors = {};
    if (!data.name) {
      errors.name = "Please enter your name";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }
    // You can add phone validation (e.g., format) if desired
    if (!data.message) {
      errors.message = "Please enter your message";
    }
    return errors;
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" flex-col self-center max-w-md mx-auto"
      >
        <div className="mb-4">
          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={validationErrors.name}
            placeholder="Your name"
            className="w-full p-2 border border-red-500 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={validationErrors.email}
            placeholder="Your email"
            className="w-full p-2 border border-red-500 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <Input
            label="Phone (Optional)"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="w-full p-2 border border-red-500 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <TextArea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={validationErrors.message}
            placeholder="Your message"
            className="w-full p-2 border border-red-500 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          />
        </div>
        <div className="text-center">
          <Button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Send Message
          </Button>
        </div>
      </form>
      {showThankYou && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-gray-800 bg-opacity-75 inset-0 fixed"></div>
          <div className="z-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg relative">
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              Thank you for your response!
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
