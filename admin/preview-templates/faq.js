import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a faq
const Faq = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <div id="faq" class="faq-container">
        <div class="faq-container-wrapper">
          <ul id="faq-list" class="faq-list" role="list">
            <li class="faq-item expanded" role="listitem">
              <div
                class="question"
                role="button"
                aria-expanded="false"
                aria-controls="answer"
                tabindex="0"
              >
                ${entry.getIn(["data", "question"], "")}
                <span class="toggle-icon" aria-hidden="true">-</span>
              </div>
              <div
                class="answer"
                aria-hidden="false"
                style="max-height: max-content;"
              >
                ${entry.getIn(["data", "answer"], "")}
              </div>
            </li>
          </ul>
        </div>
      </div>
    `;
  },
});

export default Faq;
