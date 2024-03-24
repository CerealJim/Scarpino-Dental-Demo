import React from "react";

const ContentService = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <div class="service-container">
      <div class="image-container">
        <img src={data.image} alt={data.imageAlt} draggable="false" />
      </div>

      <div class="service-text-container">
        <div class="service-text">
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
    </div>
  );
};

export default ContentService;
