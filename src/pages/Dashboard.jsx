import React from "react";
import Document from "../components/title/Document";
import DashboardHeading from "../layouts/dashboard/DashboardHeading";

const Dashboard = () => {
    return (
        <div>
            <Document title="Bí kiếp làm giàu - Dashboard" />
            <DashboardHeading
                title="Dashboard"
                desc="Overview dashboard monitor"
            />
        </div>
    );
};

export default Dashboard;
