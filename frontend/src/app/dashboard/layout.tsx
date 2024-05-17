import React from "react";
import Dashboard from "./page";
import Sidebar from "@/components/sidebar";
import styles from "@/styles/dashboard.module.css";

const DashboardLayout = () => {
  return (
    <>
    <div className={styles.container}>
      <Sidebar />
      <Dashboard />
    </div>
    </>
  );
};

export default DashboardLayout;
