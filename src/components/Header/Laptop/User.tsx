import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdOutlinePhoneEnabled, MdMailOutline } from "react-icons/md";

interface User {
  name: string;
  surname: string;
  phone: string;
  options: string;
}

interface UserProps {
  user: User;
}

const User: React.FC<UserProps> = ({ user }) => {
  const [isDropped, setIsDropped] = useState(false);

  const handleDrop = () => {
    setIsDropped(!isDropped);
  };

  return (
    <div className="userTitles">
      <div>
        <p className="number components">
          <MdOutlinePhoneEnabled />
          {user.phone}
        </p>
      </div>
      <p>|</p>
      <div>
        <p className="components">
          <MdMailOutline className="messages" />
          Messages
        </p>
        <span className="messageValue">45</span>
      </div>
      <p>|</p>

      <div>
        <div className="navDrop  components" onClick={handleDrop}>
          <p className={isDropped ? "active " : ""}>
            {user.name} {user.surname}
            {isDropped ? <FaAngleUp /> : <FaAngleDown />}{" "}
          </p>
        </div>

        {isDropped && (
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: user.options.replace(/,/g, "<br />"),
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
