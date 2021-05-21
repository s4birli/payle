import React, { useState } from "react";

import { Form } from "react-bootstrap";

import { Input, TextArea, Button } from "../Core";

const ContactForm = ({ ...rest }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    website: '',
    contact: '',
    message: '',
  })

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    const portalId = "14550965";
    const formId = "8024218a-9ed2-4ff5-85a8-02b427fc1217";
    var url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
    var data = {
      submittedAt: Date.now(),
      fields: [
          {
            name: "email",
            value: state.email,
          },
          {
            name: "firstname",
            value: state.name,
          },
          {
            name: "website",
            value: state.website,
          },
          {
            name: "phone",
            value: state.contact,
          },
          {
            name: "message",
            value: state.message,
          },
      ],
      context: {
        pageUri: "subscribe-success",
        pageName: "Subscribe successful",
      },
    };
    var final_data = JSON.stringify(data);
    xhr.open("POST", url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText); // Returns a 200 response if the submission is successful.
      } else if (xhr.readyState == 4 && xhr.status == 400) {
        alert(xhr.responseText); // Returns a 400 error the submission is rejected.
      } else if (xhr.readyState == 4 && xhr.status == 403) {
        alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
      } else if (xhr.readyState == 4 && xhr.status == 404) {
        alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
      }
    };
    // Sends the request
    xhr.send(final_data);
  }

  return (
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={submitHandler}
      {...rest}
    >
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="contact" />
      <div className="mt-4">
        <Input type="text" placeholder="Your name" required name="name" onChange={( event ) => handleChange( event )} />
      </div>
      <div className="mt-4">
        <Input type="email" placeholder="Email address" required name="email"  onChange={( event ) => handleChange( event )}/>
      </div>
      <div className="mt-4">
        <Input type="url" placeholder="Your website" name="website"  onChange={( event ) => handleChange( event )}/>
      </div>
      <div className="mt-4">
        <Input type="tel" placeholder="Contact number" name="contact"  onChange={( event ) => handleChange( event )}/>
      </div>
      <div className="mt-4 ">
        <TextArea
          rows={4}
          placeholder="Write your message"
          required
          name="message"
          onChange={( event ) => handleChange( event )}
        />
      </div>
      <div className="mt-4 mt-lg-5">
        <Button arrowRight variant="primary" type="submit">
          SEND
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
