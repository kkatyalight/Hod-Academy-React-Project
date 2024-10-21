import "./Video.css";
import playButton from "../../assets/play_button.svg"

export default function Video(videoSrc) {
  return (
    <div className="main-general-info-video">
      <div id="playpause" className="video-paused-overlay">
        <img src={playButton} alt="" />
      </div>

      <video id="myvideo" loop playsinline muted>
        <source
          src={videoSrc}
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
      </video>
    </div>
  );
}
