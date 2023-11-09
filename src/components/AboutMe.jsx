import React from 'react';
import '../style/About.css';
export default function About() {
  return (
    <div className="container mt-4 about-container">
      <h1 className="display-4 text-pink">About Me</h1>
      <img src="./images/profile_pic. jpg "className="float-start img-fluid w-25 m-3 custom-img-with-border" alt="profile.picture" />

      <p className="lead">
          My name is Alex Purfield and I am from Denver, Colorado. I graduated from Metropolitan State University of Denver in 2019 (boy was that perfect timing) with a Technical Communications degree with an emphasis in Writing and Editing. Somewhere along the long trudge of academic adventure I found myself in a coding class that only touched on html and css but it was enough to keep my interest piqued even through my other experiences. Though I got a lot of great expedrience in my past jobs, I finally decided in August of 2023 that it was time for me to invest in myself and a hard skill and started the DU Coding Bootcamp. As a new journey begins I feel like I am standing on the edge of a cliff but my recent acquisition of this skill has ignited a sense of curiosity and enthusiasm as I take the jump. I can't wait for the challenges and rewarding moments to come.
      </p>
    </div>
  );
}
