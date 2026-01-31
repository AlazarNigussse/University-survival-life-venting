import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value
  };

  const res = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });

  if (res.ok) {
    setSubmitted(true);
  } else {
    alert("Submission failed");
  }
}


  return (
    <main className="container contact-page">
      <div className="contact-container">
        {/* Contact Form Section */}
        <section className="contact-form-section">
          <h1 className="page-title">Contact Us</h1>
          <p className="lead">We'd love to hear your tips or feedback.</p>

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Share your tips, feedback, or questions..."
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </section>

        {/* Contact Info Sidebar */}
        <aside className="contact-sidebar">
          <div className="sidebar-section">
            <h2 className="sidebar-title">UniSurvive</h2>
            <p className="sidebar-text">Practical advice for thriving at university.</p>
          </div>

          <div className="sidebar-divider"></div>

          <div className="sidebar-section">
            <div className="copyright">
              © 2026 UniSurvive
            </div>
          </div>

          <div className="sidebar-divider"></div>

          <div className="sidebar-section">
            <h3 className="sidebar-subtitle">Contact</h3>
            <div className="contact-details">
              <p>
                <strong>Email:</strong> alazarnigusse2005@gmail
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}