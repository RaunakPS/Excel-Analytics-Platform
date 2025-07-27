// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Home.css";
// import ExtraContent from "./ExtraContent";
// import Content from "./Content";

// function Home() {
//   const navigate = useNavigate();
//   return (
//     <>
//     <div
//       className="home-bg"
//       style={{
//         backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80')`,
//       }}
//     >
//       <div className="home-content">
//         <h1 className="home-title">Excel File Analytics</h1>
//         <p className="home-desc">
//           Effortlessly upload, view, and analyze your Excel files online. Our platform offers instant statistics, chart visualizations, and secure file management for all your spreadsheet needs.<br/>
//          <span>A detective or investigator for spreadsheets.</span>
//         </p>
//         <button className="home-about-btn" onClick={() => navigate("/about")}>
//           Features
//         </button>
//       </div>
//     </div>
    
//     <div>
//       <ExtraContent />
//     </div>
//     <div>
//       <Content />
//     </div>
//     </>
//   );
// }

// export default Home;
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="user-profile">
          <div className="avatar">JD</div>
          <h3>JOHN DON</h3>
          <p>johndon@company.com</p>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li className="active"><i className="icon-home"></i> Home</li>
            <li><i className="icon-file"></i> Files</li>
            <li><i className="icon-messages"></i> Messages</li>
            <li><i className="icon-notification"></i> Notifications</li>
            <li><i className="icon-location"></i> Location</li>
            <li><i className="icon-graph"></i> Graphs</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Stats Cards */}
        <div className="stats-container">
          <div className="stat-card">
            <h4>Earning</h4>
            <p>$ 628</p>
          </div>
          <div className="stat-card">
            <h4>Share</h4>
            <p>2434</p>
          </div>
          <div className="stat-card">
            <h4>Likes</h4>
            <p>1259</p>
          </div>
          <div className="stat-card">
            <h4>Rating</h4>
            <p>8.5</p>
          </div>
        </div>

        {/* Excel Features Section */}
        <div className="features-section">
          <h2>Excel File Analytics Dashboard</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>File Upload & Parsing</h3>
              <p>Upload and parse Excel files using SheetJS technology</p>
              {!isLoggedIn && (
                <button onClick={() => navigate("/login")} className="action-btn">
                  Login to Upload
                </button>
              )}
            </div>
            
            <div className="feature-card">
              <h3>Graph Generation</h3>
              <p>Create 2D/3D charts (bar, line, pie, scatter, 3D column)</p>
            </div>
            
            <div className="feature-card">
              <h3>Data Mapping</h3>
              <p>Choose X and Y axes dynamically for your visualizations</p>
            </div>
            
            <div className="feature-card">
              <h3>Export Options</h3>
              <p>Download charts as PNG or PDF files</p>
            </div>
          </div>
        </div>

        {/* Chart Preview Section */}
        <div className="chart-preview">
          <h3>Recent Analysis</h3>
          <div className="chart-placeholder">
            {/* This would be replaced with an actual chart component */}
            <div className="chart-axis">
              <div className="y-axis">
                <span>50</span>
                <span>40</span>
                <span>30</span>
                <span>20</span>
                <span>10</span>
              </div>
              <div className="x-axis">
                <span>JAN</span>
                <span>FEB</span>
                <span>MAR</span>
                <span>APR</span>
                <span>MAY</span>
                <span>JUN</span>
              </div>
            </div>
            <button className="check-now-btn">Check Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;