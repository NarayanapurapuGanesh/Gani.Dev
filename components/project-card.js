class CustomProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title') || 'Project Title';
        const description = this.getAttribute('description') || 'Project Description';
        const link = this.getAttribute('link') || '#';
        const image = this.getAttribute('image') || 'https://via.placeholder.com/400x250';
        const features = JSON.parse(this.getAttribute('features') || '[]');

        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          height: 100%;
        }
        .card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid #f1f5f9;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #4f46e5;
        }
        .image-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
          position: relative;
        }
        img {
          width: 100%;
          height: 100%;
          object-cover: cover;
          transition: transform 0.5s ease;
        }
        .card:hover img {
          transform: scale(1.1);
        }
        .content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        h3 {
          margin: 0 0 0.75rem 0;
          font-size: 1.25rem;
          color: #1e293b;
          font-weight: 700;
        }
        p {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .feature-tag {
          background: #f1f5f9;
          color: #4f46e5;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .link {
          display: inline-flex;
          align-items: center;
          color: #4f46e5;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          gap: 0.5rem;
          transition: gap 0.2s;
        }
        .link:hover {
          gap: 0.75rem;
        }
        .link i {
          width: 16px;
          height: 16px;
        }
      </style>
      <div class="card">
        <div class="image-container">
          <img src="${image}" alt="${title}">
        </div>
        <div class="content">
          <h3>${title}</h3>
          <p>${description}</p>
          <div class="features">
            ${features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
          </div>
          <a href="${link}" target="_blank" class="link">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
    `;
    }
}

customElements.define('custom-project-card', CustomProjectCard);
