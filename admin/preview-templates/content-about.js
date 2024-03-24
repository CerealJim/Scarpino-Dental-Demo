import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

const ContentAbout = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <div>
          <div class="about-container">
            <div class="about-text-container">
              <div class="about-text">
                <p class="uppercase preheading">
                  ${entry.getIn(["data", "subTitle"], null)}
                </p>
                <h2 class="heading">
                  <span>${entry.getIn(["data", "title"], null)}</span>
                </h2>
                ${this.props.widgetFor("body")}
                <p>
                  <a href="#contact" class="cms-button-text smooth-scroll">
                    <span>${entry.getIn(["data", "btnText"], null)}</span>
                  </a>
                </p>
              </div>
            </div>

            <div class="image-container">
              <img
                src=${entry.getIn(["data", "image"], null)}
                alt=${entry.getIn(["data", "imageAlt"], null)}
                draggable="false"
              />
            </div>
          </div>
        </div>
      </main>
    `;
  },
});

export default ContentAbout;

// const ContentAbout = ({ entry }) => {
//   const data = entry.getIn(["data"]).toJS();

//   return (
//     <div>
//       <div class="about-container">
//         <div class="about-text-container">
//           <div class="about-text">
//             <p class="uppercase preheading">{data.subTitle}</p>
//             <h2 class="heading">
//               <span>{data.title}</span>
//             </h2>
//             {data.body}
//             <p>
//               <a href="#contact" class="cms-button-text smooth-scroll">
//                 <span>{data.btnText}</span>
//               </a>
//             </p>
//           </div>
//         </div>

//         <div class="image-container">
//           <img src={data.image} alt={data.imageAlt} draggable="false" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContentAbout;
