import React from "react";

const ContentAbout = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <div>
      <div class="about-container">
        <div class="about-text-container">
          <div class="about-text">
            <p class="uppercase preheading">{data.subTitle}</p>
            <h2 class="heading">
              <span>{data.title}</span>
            </h2>
            {data.body}
            <p>
              <a href="#contact" class="cms-button-text smooth-scroll">
                <span>{data.btnText}</span>
              </a>
            </p>
          </div>
        </div>

        <div class="image-container">
          <img src={data.image} alt={data.imageAlt} draggable="false" />
        </div>
      </div>
    </div>
  );
};

export default ContentAbout;
