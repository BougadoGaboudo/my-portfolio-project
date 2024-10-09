import React from "react";

const ContentHome = ({ part, title, text, img1 }) => {
  return (
    <section className="content-section">
      <div className={part}>
        <div className="txt">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="img">
          <img className="img1" src={img1} alt="" />
          {/* <img className="img2" src={img2} alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default ContentHome;
