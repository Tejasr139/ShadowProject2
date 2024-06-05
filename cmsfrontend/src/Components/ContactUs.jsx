import React, { useState } from 'react';
import axios from 'axios';
import '@sendgrid/mail';
import './ContactUs.css';


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      mobile,
      subject,
      details,
    };

    try {
      // Send email to admin
      const adminEmail = 'admin@example.com';
      const adminEmailData = {
        to: adminEmail,
        from: email,
        subject: `New Inquiry from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Mobile:</strong> ${mobile}</p>
               <p><strong>Subject:</strong> ${subject}</p>
               <p><strong>Details:</strong> ${details}</p>`,
      };
      await axios.post('https://api.sendgrid.com/v3/mail/send', adminEmailData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
        },
      });

      // Send email to user
      const userEmailData = {
        to: email,
        from: adminEmail,
        subject: 'Thank you for your inquiry',
        html: `<p>Dear ${name},</p>
               <p>Thank you for your inquiry. We will get back to you as soon as possible.</p>
               <p>Best regards,</p>
               <p>The Team</p>`,
      };
      await axios.post('https://api.sendgrid.com/v3/mail/send', userEmailData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
        },
      });

      setMessage('Thank you for your inquiry. We will get back to you as soon as possible.');
      setName('');
      setEmail('');
      setMobile('');
      setSubject('');
      setDetails('');
    } catch (error) {
      console.error(error);
      setMessage('Error sending email. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Please fill out the form below to send us an inquiry. We will get back to you as soon as possible.</p>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input type="tel" className="form-control" id="mobile" value={mobile} onChange={(event) => setMobile(event.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" className="form-control" id="subject" value={subject} onChange={(event) => setSubject(event.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="details">Details</label>
          <textarea className="form-control" id="details" rows="3" value={details} onChange={(event) => setDetails(event.target.value)} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Inquiry</button>
      </form>
    </div>
  );
};

export default ContactUs;