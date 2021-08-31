import React, { useState } from "react";
import { withResizeDetector } from "react-resize-detector";
const VIDEO_URLS = [
  "https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/720p.mp4",
  "https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/1080p.mp4"
];
const containerStyles = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const AdaptiveComponent = ({ width, height }) => {
  return (
    <div style={{ ...containerStyles }}>
      {console.log(`Video source resized to ${width}x${height}`)}
    </div>
  );
};
const AdaptiveWithDetector = withResizeDetector(AdaptiveComponent);

const App = () => {
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
      />
      <button onClick={() => setVideoIdx((i) => (i + 1) % VIDEO_URLS.length)}>
        Change video resolution
      </button>
      <AdaptiveWithDetector />
    </div>
  );
};

export default App;
