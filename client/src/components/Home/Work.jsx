import React from "react";
import Add from "../../Assets/Add.png";
import Calendar from "../../Assets/Calendar.png";

const Work = () => {
  const workInfoData = [
    // {
    //   image: Choose,
    //   title: "Choose What you Want",
    //   text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    // },
    {
      image: Add,
      title: "Add Them",
      text: "Add the important work issues you have to add",
    },
    {
      image: Calendar,
      title: "See your Schedule",
      text: "Personalize your own calender to the events you need",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Here are some picture of our application and what you can expect it to do.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="pic" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;