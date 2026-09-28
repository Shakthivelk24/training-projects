import { useState } from "react";

function ContactForm({
  addContact,
}) {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      location: "",
    });


  /* =====================================================
     HANDLE INPUT
  ===================================================== */

  const handleChange = (
    event
  ) => {

    const {
      name,
      value,
    } = event.target;


    setFormData(
      (previousData) => ({
        ...previousData,
        [name]: value,
      })
    );

  };


  /* =====================================================
     SUBMIT
  ===================================================== */

  const handleSubmit = (
    event
  ) => {

    event.preventDefault();


    if (
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {

      alert(
        "Please enter name, email and phone number."
      );

      return;

    }


    addContact(
      formData
    );


    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      location: "",
    });

  };


  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >


      <div className="form-grid">


        {/* NAME */}

        <div className="form-group">

          <label htmlFor="name">
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Arjun Kumar"
            value={formData.name}
            onChange={handleChange}
            required
          />

        </div>


        {/* EMAIL */}

        <div className="form-group">

          <label htmlFor="email">
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. arjun@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

        </div>


        {/* PHONE */}

        <div className="form-group">

          <label htmlFor="phone">
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            required
          />

        </div>


        {/* COMPANY */}

        <div className="form-group">

          <label htmlFor="company">
            Company
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="e.g. Google"
            value={formData.company}
            onChange={handleChange}
          />

        </div>


        {/* ROLE */}

        <div className="form-group">

          <label htmlFor="role">
            Job Role
          </label>

          <input
            id="role"
            name="role"
            type="text"
            placeholder="e.g. Software Engineer"
            value={formData.role}
            onChange={handleChange}
          />

        </div>


        {/* LOCATION */}

        <div className="form-group">

          <label htmlFor="location">
            Location
          </label>

          <input
            id="location"
            name="location"
            type="text"
            placeholder="e.g. Bengaluru"
            value={formData.location}
            onChange={handleChange}
          />

        </div>

      </div>


      <button
        type="submit"
        className="form-submit"
      >
        Add Contact
      </button>

    </form>
  );
}

export default ContactForm;