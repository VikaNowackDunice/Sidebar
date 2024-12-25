//App.js
import React, { useState } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import './index.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import logo from './assets/logo.png';

library.add(fas);

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
     console.log(isSidebarOpen)
  };

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <button className={`buttonTheme ${isDark ? 'dark' : 'light'}`} onClick={toggleTheme}>Theme</button>
        <img className="logo" src={logo} alt="TensorFlow logo" />
        <div className="sidebar-container">
        <Sidebar
         isSidebarOpen={isSidebarOpen}
         toggleSidebar={toggleSidebar}
         color={isDark ? 'dark' : 'light'}
        />
      </div>
    </div>
  );
}

export default App;