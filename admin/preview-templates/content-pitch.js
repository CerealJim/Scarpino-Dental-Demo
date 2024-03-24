import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

const ContentPitch = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <div class="pitch-container">
          <div class="pitch-text">
            <h2 class="heading">
              <span>${entry.getIn(["data", "title"], null)}</span>
            </h2>
            <p class="summary">${entry.getIn(["data", "summary"], null)}</p>
            <a href="#contact" class="cms-button-primary smooth-scroll"
              ><span>${entry.getIn(["data", "btnText"], null)}</span></a
            >
          </div>
        </div>
      </main>
    `;
  },
});

export default ContentPitch;

// import React from "react";

// const ContentPitch = ({ entry }) => {
//   const data = entry.getIn(["data"]).toJS();

//   return (
//     <div class="pitch-container">
//       <div class="pitch-text">
//         <h2 class="heading">
//           <span>{data.title}</span>
//         </h2>
//         <p class="summary">{data.summary}</p>
//         <a href="#contact" class="cms-button-primary smooth-scroll">
//           <span>{data.btnText}</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ContentPitch;
