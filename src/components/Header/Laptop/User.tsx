import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaRegUserCircle } from "react-icons/fa";
import { MdOutlinePhoneEnabled, MdMailOutline } from "react-icons/md";

interface User {
  name: string;
  surname: string;
  phone: string;
  messages: string;
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
          {user.phone.replace(
            /(\+\d{2})\((\d)\)(\d+)/,
            (_, countryCode, zero, num) =>
              `${countryCode} (${zero}) ${num.replace(/\d{2}(?=\d)/g, "$& ")}`
          )}
        </p>
      </div>
      <p className="distributer">|</p>
      <div>
        <div className=" userIconAlign">
          <p>
            <MdMailOutline className="messages" />
          </p>

          {user.messages}
        </div>

        <span className="messageValue">45</span>
      </div>
      <p className="distributer">|</p>

      <div>
        <div className="navDrop" onClick={handleDrop}>
          <div className={isDropped ? "active userIconAlign" : "userIconAlign"}>
            <p>
              <FaRegUserCircle className="user" />
            </p>
            {user.name} {user.surname}
            {isDropped ? <FaAngleUp /> : <FaAngleDown />}{" "}
          </div>
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
