import React from "react";

const SectionContentPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <div>
      <h1>{data.title}</h1>
      <h2>{data.subTitle}</h2>
      <p>{data.metaDescription}</p>
      <p>Date: {data.date}</p>
      <img src={data.image} alt={data.imageAlt} />
      <p>Author: {data.author}</p>
      <p>{data.summary}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default SectionContentPreview;
