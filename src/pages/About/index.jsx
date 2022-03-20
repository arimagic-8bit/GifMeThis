import React from "react";
import BasicPage from "../../templates/BasicPage";
import './styles.scss';

const ContentPage = () => (
  <div className="d-flex contentAbout">
    <p>Are you having an awkward conversation?</p>
    <p>You don't know what to say?</p>
    <p>Send them a gif!</p>
    <iframe 
      src="https://giphy.com/embed/HP7mtfNa1E4CEqNbNL"
      width="480"
      height="400"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
      title='The Office gif'
    />
    <p><span>Gif</span>MeThis uses the 
      <a href="https://developers.giphy.com/" target="_blank" rel="noreferrer">
        GYPHYApi
      </a> 
    to search in a library of more than 10 billion gifs</p>
  </div>
)

const About = () => (
  <BasicPage
    content={ContentPage}
    withSeparator
  />
);

export default About;
