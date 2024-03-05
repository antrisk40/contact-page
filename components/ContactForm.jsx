import React, { useState } from "react";
import {Input} from "./ui/Input";
import {TextArea} from "./ui/TextArea";
import {Button} from "./ui/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

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
      // If there are no errors, submit the form data
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
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
    <form onSubmit={handleSubmit} className=" flex-col self-center max-w-md mx-auto">
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
  );

};

export default ContactForm;
