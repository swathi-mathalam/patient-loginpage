import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../styles/mainLayout.scss";

const MainLayout = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="main-layout">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="main-section">
        <Header
          title={title}
          subtitle={subtitle}
        />

        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;