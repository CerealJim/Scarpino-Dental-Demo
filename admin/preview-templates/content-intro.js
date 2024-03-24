import React from "react";

const ContentIntro = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <div class="intro-container">
      <div class="background-img">
        <picture>
          <img src="{data.image}" alt="{data.imageAlt}" draggable="false" />
        </picture>
      </div>
      <div class="intro-text">
        <p class="uppercase preheading">{data.subTitle}</p>
        <h1 class="heading">
          <span>{data.title}</span>
        </h1>
        <p class="summary">{data.summary}</p>
        <p>
          <a href="#contact" class="cms-button-primary smooth-scroll">
            <span>{data.btnText}</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContentIntro;
