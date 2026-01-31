export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>UniSurvive</h3>
          <p>Practical advice for thriving at university.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: alazarnigusse2005@gmail</p>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} UniSurvive
      </div>
    </footer>
  );
}
