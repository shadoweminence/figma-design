import React from "react";

import User from "./User";

const UserDetails: React.FC = () => {
  const users = [
    {
      name: "Username",
      surname: "Surname",
      phone: "+32(0)15287667",
      messages: "Messages",
      options: "details,settings",
    },
  ];

  return (
    <div>
      <div>
        <div className="navTitles">
          {users.map((user, index) => (
            <User key={index} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
