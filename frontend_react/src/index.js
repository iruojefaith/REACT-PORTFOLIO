import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './fonts/CircularStd-Book.141786e81ed670627c7a85592c5c9897.woff';
import './fonts/D-DINCondensed-Bold.1c40626b390ef186f676b920b5a284ff.woff';
import './fonts/MarkPro-Heavy.e2c6ce4009c23ed34b4861cb4151990f.woff';

import images from '../src/constants/images';

export { images };


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
)
