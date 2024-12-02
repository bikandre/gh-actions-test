import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { XRay } from 'aws-xray-sdk-core'; // Import AWS X-Ray SDK

// Initialize AWS X-Ray SDK with your preferred settings (e.g., region)
XRay.config([{
  host: 'xray.us-east-1.amazonaws.com',  // Specify the region of your X-Ray service
  port: 443
}]);

// Capture the main React app segment
XRay.captureAsyncFunc('ReactAppSegment', (subsegment) => {
  console.log('React app trace segment started.');
  ReactDOM.render(<App />, document.getElementById('root'));
  // Close the main segment after rendering
  subsegment.close();
});
