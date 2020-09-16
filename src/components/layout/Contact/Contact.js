import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Circles from "../../animations/Circles/Circles";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    nameError: "",
    emailError: "",
    subjectError: "",
    messageError: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let subjectError = "";
    let messageError = "";

    if (!this.state.name) {
      nameError = "Please enter your name";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Please enter your email address";
    }
    if (!this.state.subject) {
      subjectError = "Please complete this mandatory field";
    }
    if (!this.state.message) {
      messageError = "Please complete this mandatory field";
    }

    if (emailError || nameError || subjectError || messageError) {
      this.setState({ emailError, nameError, subjectError, messageError });
      return false;
    }

    return true;
  };

  sendEmail = (e) => {
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      emailjs.sendForm(
        "gmail",
        "template_81p60qt",
        e.target.value,
        "user_0DZ7ltowJS9vwnChwXDLQ"
      );

      this.setState({
        name: "",
        email: "",
        subject: "",
        message: "",
        nameError: "",
        emailError: "",
        subjectError: "",
        messageError: "",
      });
    }
  };

  render() {
    return (
      <div className="contact container">
        <div className="contact-content">
          <h2>Contact me</h2>
          <p>Get in touch via the form below</p>
          <form onSubmit={this.sendEmail}>
            <div className="error-text">{this.state.nameError}</div>
            <input
              type="text"
              className="form-item"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
            <div className="error-text">{this.state.emailError}</div>
            <input
              type="text"
              className="form-item"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
            <div className="error-text">{this.state.subjectError}</div>
            <input
              type="text"
              className="form-item"
              placeholder="Subject"
              value={this.state.subject}
              onChange={this.handleChange}
              name="subject"
            />
            <div className="error-text">{this.state.messageError}</div>
            <textarea
              className="form-item form-message"
              rows="4"
              cols="50"
              placeholder="Message"
              value={this.state.message}
              onChange={this.handleChange}
              name="message"
            ></textarea>
            <button type="submit" value="Submit" className="btn-link submit">
              Send
            </button>
          </form>
        </div>
        <Circles />
      </div>
    );
  }
}

export default Contact;
