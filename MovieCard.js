// create template
const template = document.createElement('template')
template.innerHTML = `
<style>
 .detail{
   display:none;
 }
</style>
<h3></h3>
<p></p>
<img />
<div>
 <p>
 <slot name="year"/>
 </p>
 <p>
 <slot name="type"/>
 </p>
</div>
<p>
<slot />
</p>

<button>Click</button>
<p class="detail">Congratulations you find text</p>
`

{/* what is slot <card> to html tag range in template
code scope
</card>
automatically takes the entered value. */}

class MovieCard extends HTMLElement {
  constructor() {
    super();
    this.showDetail = false;

    // init shadow dom
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // get element inner shadow dom & read element attribute info
    this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('title');
    this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('description');
    this.shadowRoot.querySelector('img').src = this.getAttribute('poster');
  }

  connectedCallback() {
    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      // Swap operation between true or false.
      this.showDetail = !this.showDetail;

      // set style for class
      if (this.showDetail) {
        this.shadowRoot.querySelector('.detail').style.display = 'block'
      } else {
        this.shadowRoot.querySelector('.detail').style.display = 'none'
      }
    })
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('button').removeEventListener('click');
  }
}

window.customElements.define('movie-card', MovieCard)