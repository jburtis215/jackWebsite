import React from "react";

const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive flex justify-center mb-16 h-1/3">
        <iframe width="900" height="600" src={"https://www.youtube.com/embed/" + embedId} title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>
    </div>
);


export default YoutubeEmbed;
