import React from "react";
import ReactDOM from "react-dom";
import MediaQuery from 'react-responsive';

const App = () => {
  return (
    <div>
      <div>Device Test!</div>
      <MediaQuery query="(min-device-width: 1224px)">
        <div>You are a desktop or laptop</div>
        <MediaQuery query="(min-device-width: 1824px)">
          <div>You also have a huge screen</div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1224px)">
          <div>You are sized like a tablet or mobile phone though</div>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1224px)">
        <div>You are a tablet or mobile phone</div>
      </MediaQuery>
      <MediaQuery query="(orientation: portrait)">
        <div>You are portrait</div>
      </MediaQuery>
      <MediaQuery query="(orientation: landscape)">
        <div>You are landscape</div>
      </MediaQuery>
      <MediaQuery query="(min-resolution: 2dppx)">
        <div>You are retina</div>
      </MediaQuery>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));