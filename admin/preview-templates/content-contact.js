import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

const ContentContact = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <div class="contact-container-wrapper">
          <div class="operations">
            <h2 class="heading">
              <span>${entry.getIn(["data", "title"], null)}</span>
            </h2>
            <p class="summary">
              <span>${entry.getIn(["data", "summary"], null)}</span>
            </p>

            ${this.props.widgetFor("body")}

            <div class="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14563.626878981318!2d-97.15890726503835!3d49.892068492895945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73e2b6773d91%3A0x709b2a5a650d8a7e!2sDr.%20Carmine%20Scarpino%20Dental!5e0!3m2!1sen!2sca!4v1710616942732!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                title="Map of Dr. Carmine Scarpino Dental"
              ></iframe>
            </div>
            <div class="disclaimer">
              <strong>NOTE:</strong> Links to independent third-party websites
              are not endorsed by or affiliated with Dr. Carmine Scarpino
              Dental.
            </div>
          </div>
        </div>
      </main>
    `;
  },
});

export default ContentContact;

// import React from "react";

// const ContentAbout = ({ entry }) => {
//   const data = entry.getIn(["data"]).toJS();

//   return (
// <div class="contact-container-wrapper">
//   <div class="operations">
//     <h2 class="heading">
//       <span>{data.title}</span>
//     </h2>
//     <p class="summary">
//       <span>{data.summary}</span>
//     </p>

//     {data.body}

//     <div class="google-map">
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14563.626878981318!2d-97.15890726503835!3d49.892068492895945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73e2b6773d91%3A0x709b2a5a650d8a7e!2sDr.%20Carmine%20Scarpino%20Dental!5e0!3m2!1sen!2sca!4v1710616942732!5m2!1sen!2sca"
//         width="100%"
//         height="100%"
//         style="border: 0"
//         allowfullscreen=""
//         loading="lazy"
//         title="Map of Dr. Carmine Scarpino Dental"
//       ></iframe>
//     </div>
//     <div class="disclaimer">
//       <strong>NOTE:</strong> Links to independent third-party websites are
//       not endorsed by or affiliated with Dr. Carmine Scarpino Dental.
//     </div>
//   </div>
// </div>
//   );
// };

// export default ContentAbout;
