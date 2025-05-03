import React from 'react';
import Profile from './Profile';
import SideNav from './SideNav';
import AddEmployee from '../ADMIN/AddEmployee';
import ViewEmployee from '../ADMIN/ViewEmployee';
import AddEnquiry from '../CRM/AddEnquiry';
import ViewEnquiry from '../CRM/ViewEnquiry';
import { Route, Routes } from 'react-router-dom';

function Dashboard() {
  const userJson = localStorage.getItem("user");
  const { usertype } = JSON.parse(userJson) || { usertype: 'CRM' }; // fallback role

  const appRoute = {
    ADMIN: [
      { path: 'addemployee', component: <AddEmployee /> },
      { path: 'viewemployee', component: <ViewEmployee /> }
    ],
    CRM: [
      { path: 'addenquiry', component: <AddEnquiry /> },
      { path: 'viewenquiry', component: <ViewEnquiry /> }
    ]
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-3">
      <div className="mb-4">
        <h2 className="text-center text-primary">Dashboard</h2>
        <div className="bg-white shadow-sm p-3 rounded">
          <Profile />
        </div>
      </div>

      <div className="row" style={{ minHeight: '75vh' }}>
        {/* Side Navigation */}
        <div className="col-md-4 col-lg-3 mb-3">
          <div className="bg-success bg-opacity-25 p-3 h-100 rounded shadow-sm">
            <SideNav />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-md-8 col-lg-9">
          <div className="bg-info bg-opacity-25 p-4 rounded shadow-sm h-100 overflow-auto">
            <Routes>
              {appRoute[usertype]?.map((mapping, index) => (
                <Route key={index} path={mapping.path} element={mapping.component} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
