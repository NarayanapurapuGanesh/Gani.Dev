class CustomNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }
        nav {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: #4f46e5;
          text-decoration: none;
          letter-spacing: -0.025em;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-links a {
          text-decoration: none;
          color: #1e293b;
          font-weight: 500;
          transition: color 0.2s;
          font-size: 0.95rem;
        }
        .nav-links a:hover {
          color: #4f46e5;
        }
        .menu-btn {
          display: none;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0.5rem;
        }
        .menu-btn span {
          display: block;
          width: 25px;
          height: 2px;
          background: #1e293b;
          margin: 5px 0;
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 1.5rem;
            gap: 1.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            border-top: 1px solid #f1f5f9;
            box-sizing: border-box;
          }
          .nav-links.active {
            display: flex;
          }
          .menu-btn {
            display: block;
          }
          .menu-btn.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
          }
          .menu-btn.active span:nth-child(2) {
            opacity: 0;
          }
          .menu-btn.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
          }
        }
      </style>
      <nav>
        <a href="#" class="logo">Ganesh.Dev</a>
        <div class="nav-links" id="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button class="menu-btn" id="menu-btn" aria-label="Toggle Navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    `;
  }

  addEventListeners() {
    const menuBtn = this.shadowRoot.getElementById('menu-btn');
    const navLinks = this.shadowRoot.getElementById('nav-links');
    const links = this.shadowRoot.querySelectorAll('.nav-links a');

    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
