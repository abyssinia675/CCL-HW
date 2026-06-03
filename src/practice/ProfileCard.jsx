import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function TeamCard({ name, role, bio }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{role}</h6>
        <p className="card-text">{bio}</p>
      </div>
    </div>
  );
}


export default function TeamDirectory() {
  const teamMembers = [
    {
      name: "Aby T",
      role: "Frontend Developer",
      bio: "Builds responsive and user-friendly web interfaces."
    },
    {
      name: "John Y",
      role: "Backend Developer",
      bio: "Works with APIs, databases, and server-side logic."
    },
    {
      name: "Soli T",
      role: "UI/UX Designer",
      bio: "Designs clean and accessible user experiences."
    },
    {
      name: "Daniel Mn",
      role: "Project Manager",
      bio: "Coordinates tasks and keeps projects on schedule."
    }
  ];

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Team Directory</h1>

      <div className="row g-4">
        {teamMembers.map((member, index) => (
          <div className="col-md-6" key={index}>
            <TeamCard
              name={member.name}
              role={member.role}
              bio={member.bio}
            />
          </div>
        ))}
      </div>
    </div>
  );
}