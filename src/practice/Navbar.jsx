import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Notification({ notificationCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">
        MySite
      </a>

      <div className="navbar-nav ms-auto">
        <a className="nav-link" href="#">
          Home
        </a>

        <a className="nav-link" href="#">
          About
        </a>

        <a className="nav-link position-relative" href="#">
          Notifications

          {notificationCount > 0 && (
            <span className="badge bg-danger ms-2">
              {notificationCount}
            </span>
          )}
        </a>
      </div>
    </nav>
  );
}

export default function Navbar() {
  const [notificationCount, setNotificationCount] = useState(0);

  const addNotification = () => {
    setNotificationCount(notificationCount + 1);
  };

  return (
    <div>
      <Notification notificationCount={notificationCount} />

      <div className="container mt-5 text-center">
        <h1>Notification Center</h1>

        <button
          className="btn btn-primary mt-3"
          onClick={addNotification}
        >
          Add Notification
        </button>
      </div>
    </div>
  );
}

