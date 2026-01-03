class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #1e1b4b;
          color: white;
          padding: 3rem 1rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          padding: 0 1rem;
          width: 100%;
        }
.footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          display: inline-block;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-link {
          color: #a5b4fc;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: white;
        }
        .social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .social-link {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: white;
        }
        .social-link:hover {
          background-color: #6366f1;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .social-link i {
          width: 18px;
          height: 18px;
        }
.copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #4f46e5;
          color: #a5b4fc;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div>
            <a href="/" class="footer-logo">Ganesh N.</a>
            <p class="text-indigo-200">Building digital experiences through code and creativity.</p>
            <div class="social-links">
              <a href="https://github.com/NarayanapurapuGanesh/" target="_blank" class="social-link" aria-label="GitHub">
                <i data-feather="github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ganeshnarayanapurapu/" target="_blank" class="social-link" aria-label="LinkedIn">
                <i data-feather="linkedin"></i>
              </a>
              <a href="https://www.codechef.com/users/n_ganesh_1023" target="_blank" class="social-link" aria-label="CodeChef">
                <i data-feather="code"></i>
              </a>
            </div>
</div>
          <div>
            <h3 class="font-semibold text-lg mb-3">Quick Links</h3>
            <div class="footer-links">
              <a href="#about" class="footer-link">About</a>
              <a href="#experience" class="footer-link">Experience</a>
              <a href="#projects" class="footer-link">Projects</a>
              <a href="#contact" class="footer-link">Contact</a>
            </div>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-3">Contact</h3>
            <div class="footer-links">
              <a href="mailto:ganesh.narayanapurapu@sasi.ac.in" class="footer-link">Email</a>
              <a href="tel:9398689925" class="footer-link">Phone</a>
            </div>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Ganesh Narayanapurapu. All rights reserved.
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
