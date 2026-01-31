import "../styles/style.css";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>University Survival Life</h1>
            <p className="lead">
              Simple, practical tips to navigate academics, campus life, and personal growth — made for students, by students.
            </p>
            <a className="btn" href="#services">Get Started</a>
          </div>

          <figure className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=60"
              alt="Students studying on campus"
            />
          </figure>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services container">
        <h2 className="section-title">Quick Survival Tips</h2>
        <p className="section-sub">Actionable advice for everyday university life.</p>

        <div className="cards">
          <div className="cards">
            <Card
              title="Study Smart"
              text="Break material into focused sessions and review weekly."
              more="Use active recall, spaced repetition, and teach concepts out loud to lock them in."
            />
            <Card
              title="Time Management"
              text="Plan deadlines and use buffer time wisely."
              more="Batch similar tasks, avoid multitasking, and review your schedule every Sunday."
            />
            <Card
              title="Campus Community"
              text="Join one club to build connections."
              more="Attend consistently, talk to at least one new person, and don’t overcommit early."
            />
            <Card
              title="Self-Care"
              text="Sleep, meals, and routine matter more than cramming."
              more="Burnout kills productivity—protect rest like it’s an assignment."
            />
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery container">
        <h2 className="section-title">Campus Life Gallery</h2>
        <p className="section-sub">Snapshots that capture university moments.</p>

        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=60" alt="" />
          <img src="https://images.unsplash.com/photo-1515524738708-327f6b0037a7?auto=format&fit=crop&w=800&q=60" alt="" />
          <img src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=60" alt="" />
          <img src="https://plus.unsplash.com/premium_photo-1667514675995-2ace2a5fb216?auto=format&fit=crop&w=800&q=60" alt="" />
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Have a tip to share?</h2>
          <p>We welcome student contributions.</p>
          <a className="btn btn-outline" href="/contact">Share a Tip</a>
        </div>
      </section>
    </main>
  );
}

function Card({ title, text, more }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{text}</p>

      {expanded && <p>{more}</p>}

      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          marginTop: "8px",
          color: "#1f6feb",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </article>
  );
}
