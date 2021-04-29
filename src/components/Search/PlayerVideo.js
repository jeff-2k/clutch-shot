import React, { useEffect, useState } from "react";
import axios from "axios";
import './PlayerVideo.css'

function PlayerVideo (props) {
  const [video, setVideo] = useState("");

  let searchTerm;

  const normalizeSearchTerm = () => {
    if (props.state.playerStats['first_name']) {
      return (searchTerm = props.state.playerStats['first_name'].toLowerCase().split(" ").join("%20") + props.state.playerStats['last_name'].toLowerCase().split(" ").join("%20"));
    } else if (props.state.playerStats['last_name']) {
        return (searchTerm = props.state.playerStats['first_name'].toLowerCase().split(" ").join("%20") + props.state.playerStats['last_name'].toLowerCase().split(" ").join("%20"));
    } 
  };

  normalizeSearchTerm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm) {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchTerm}%20higthlights&key=AIzaSyBpGogASRhy-zrwy2zKU9--qM9W5yEaUc0`
          );

          setVideo(response.data.items[0].id.videoId);
        }
      } catch (err) {}
    };
    fetchData();
  }, [props, searchTerm]);

  let videoId = `${video}`;

  return (
    <div className="responsive-video mt-5">
      <h3 style={{fontSize:'2.5rem' , fontWeight:'bold'}}>{props.state.playerStats['first_name']} {props.state.playerStats['last_name']} Highlights</h3>
      {video ? (
        <iframe
          title={searchTerm}
          className="video-frame mt-2"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&vq=hd720&modestbranding=1&autoplay=0&controls=2`}
          frameBorder="0"
          width="800px" height="500px"
          
        ></iframe>
      ) : (
        <div className="notrailer">
          <p>"Sorry, video not found"</p>
        </div>
      )}
    </div> 
  );
}

export default PlayerVideo