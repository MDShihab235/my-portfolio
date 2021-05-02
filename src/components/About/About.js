import React from "react";
import image from "../../images/web.jpg";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Mohammad Shihab Uddin" },
    { id: 2, title: "Email:", text: "mohammadshihabu789@gmail.com" },
    { id: 3, title: "Phone:", text: "+8801619044488" },
    { id: 4, title: "Linkedin", text: "md-shihab-11a051203" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={image} alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Junior front-end web developer with around 1-year experience in web development and
                working on some client-ready projects. Familiar with web designing, responsiveness, and
                development with GUI(Graphical User Interface) and trying to be a full-stack web developer.
              </div>
              <div className="about__info-p2">
                As a junior developer I am trying to best practices in web development.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
