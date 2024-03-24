import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

const ContentService = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <div class="service-container">
          <div class="image-container">
            <img
              src=${entry.getIn(["data", "image"], null)}
              alt=${entry.getIn(["data", "imageAlt"], null)}
              draggable="false"
            />
          </div>

          <div class="service-text-container">
            <div class="service-text">
              <p class="uppercase preheading">
                ${entry.getIn(["data", "subTitle"], null)}
              </p>
              <h2 class="heading">
                <span>${entry.getIn(["data", "title"], null)}</span>
              </h2>

              ${this.props.widgetFor("body")}
              <p>
                <a href="#contact" class="cms-button-text smooth-scroll"
                  ><span>${entry.getIn(["data", "btnText"], null)}</span></a
                >
              </p>
            </div>
          </div>
        </div>
      </main>
    `;
  },
});

export default ContentService;

// import React from "react";

// const ContentService = ({ entry }) => {
//   const data = entry.getIn(["data"]).toJS();

//   return (
//     <div class="service-container">
//       <div class="image-container">
//         <img src={data.image} alt={data.imageAlt} draggable="false" />
//       </div>

//       <div class="service-text-container">
//         <div class="service-text">
//           <p class="uppercase preheading">{data.subTitle}</p>
//           <h2 class="heading">
//             <span>{data.title}</span>
//           </h2>

//           {data.body}
//           <p>
//             <a href="#contact" class="cms-button-text smooth-scroll">
//               <span>{data.btnText}</span>
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContentService;
