import React from "react";

const ContentPitch = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <div class="pitch-container">
      <div class="pitch-text">
        <h2 class="heading">
          <span>{data.title}</span>
        </h2>
        <p class="summary">{data.summary}</p>
        <a href="#contact" class="cms-button-primary smooth-scroll">
          <span>{data.btnText}</span>
        </a>
      </div>
    </div>
  );
};

export default ContentPitch;
