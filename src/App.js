import { useState } from "react";
import "./styles.css";

const VIDEO_URLS = [
  "https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/720p.mp4",
  "https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/1080p.mp4"
];

export default function App() {
  const [videoIdx, setVideoIdx] = useState(0);
  return (
    <div className="App">
      <h1>
        Missing <code>onResize</code> handler
      </h1>
      <p>Open the console to see a warning.</p>
      <video
        src={VIDEO_URLS[videoIdx]}
        controls
        onLoadedMetadata={(e) => console.log("Metadata loaded OK.")}
        onResize={(e) =>
          console.log(
            `Video source resized to ${e.target.videoWidth}x${e.target.videoHeight}`
          )
        }
      />
      <button onClick={() => setVideoIdx((i) => (i + 1) % VIDEO_URLS.length)}>
        Change video resolution
      </button>
    </div>
  );
}
