class CustomExperienceCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title') || 'Role';
    const company = this.getAttribute('company') || 'Company';
    const duration = this.getAttribute('duration') || 'Period';
    const points = JSON.parse(this.getAttribute('points') || '[]');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #f1f5f9;
          height: 100%;
          transition: all 0.3s ease;
        }
        .card:hover {
          border-color: #4f46e5;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .header {
          margin-bottom: 1rem;
        }
        h3 {
          margin: 0;
          font-size: 1.25rem;
          color: #1e293b;
          font-weight: 700;
        }
        .company {
          color: #4f46e5;
          font-weight: 600;
          margin: 0.25rem 0;
        }
        .duration {
          color: #94a3b8;
          font-size: 0.875rem;
        }
        ul {
          padding-left: 1.25rem;
          margin: 0;
          color: #64748b;
        }
        li {
          margin-bottom: 0.5rem;
          line-height: 1.5;
          font-size: 0.95rem;
        }
      </style>
      <div class="card">
        <div class="header">
          <h3>${title}</h3>
          <p class="company">${company}</p>
          <p class="duration">${duration}</p>
        </div>
        <ul>
          ${points.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    `;
  }
}

customElements.define('custom-experience-card', CustomExperienceCard);
