import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

const ContentIntro = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <div class="intro-container">
          <div class="background-img">
            <picture>
              <img
                src=${entry.getIn(["data", "image"], null)}
                alt=${entry.getIn(["data", "imageAlt"], null)}
                draggable="false"
              />
            </picture>
          </div>
          <div class="intro-text">
            <p class="uppercase preheading">
              ${entry.getIn(["data", "subTitle"], null)}
            </p>
            <h1 class="heading">
              <span>${entry.getIn(["data", "title"], null)}</span>
            </h1>
            <p class="summary">${entry.getIn(["data", "summary"], null)}</p>
            <p>
              <a href="#contact" class="cms-button-primary smooth-scroll">
                <span>${entry.getIn(["data", "btnText"], null)}</span>
              </a>
            </p>
          </div>
        </div>
      </main>
    `;
  },
});

export default ContentIntro;

// import React from "react";

// const ContentIntro = ({ entry }) => {
//   const data = entry.getIn(["data"]).toJS();

//   return (
//     <div class="intro-container">
//       <div class="background-img">
//         <picture>
//           <img src="{data.image}" alt="{data.imageAlt}" draggable="false" />
//         </picture>
//       </div>
//       <div class="intro-text">
//         <p class="uppercase preheading">{data.subTitle}</p>
//         <h1 class="heading">
//           <span>{data.title}</span>
//         </h1>
//         <p class="summary">{data.summary}</p>
//         <p>
//           <a href="#contact" class="cms-button-primary smooth-scroll">
//             <span>{data.btnText}</span>
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ContentIntro;
