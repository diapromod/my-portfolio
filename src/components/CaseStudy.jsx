import React from "react";

const CaseStudy = ({
  title,
  bgColor,
  lineColor,
  headingColor,
  bodyColor,
  overview,
  tools,
  designProcess,
  visuals,
  outcome,
  image,
}) => {
  return (
    <section className={`${bgColor} py-20 px-10`}>
      <div className="max-w-6xl mx-auto">
        <h3 className={`font-bayon text-6xl font-bold pb-5 text-center ${headingColor}`}>
          {title}
        </h3>
        <div className={`absolute left-0 w-screen border-t ${lineColor}`}></div>
        <img src={image} alt={title} className="mx-auto object-cover py-20" />
        
        <div className={`text-lg font-jost ${bodyColor}`}>
          <p className="font-bold mt-6">Project Overview</p>
          <p className="leading-8">{overview}</p>

          <p className="font-bold mt-6">Tools Used</p>
          <p>{tools}</p>

          <p className="font-bold mt-6">Design Process</p>
          <ul className="list-disc ml-6">
            {designProcess.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>

          <p className="font-bold mt-6">Visuals</p>
          <p>{visuals}</p>

          <p className="font-bold mt-6">Outcome</p>
          <p>{outcome}</p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
