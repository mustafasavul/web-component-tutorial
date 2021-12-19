const headerTemplate = document.createElement('template');
headerTemplate.innerHTML =
    `
    <style>
    @import "/components/appHeader/index.css";
    </style>
    <header>
        All the speed he took
    </header>
    `;

class AppHeader extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
    }
}

window.customElements.define("app-header", AppHeader);
