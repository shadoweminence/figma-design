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
      <div className="number ">
        <MdOutlinePhoneEnabled className="numberIcon" />
        <div className="numberSize">
          {user.phone.replace(
            /(\+\d{2})\((\d)\)(\d+)/,
            (_, countryCode, zero, num) =>
              `${countryCode} (${zero}) ${num.replace(/\d{2}(?=\d)/g, "$& ")}`
          )}
        </div>
      </div>

      <p className="distributer">|</p>
      <div>
        <div className=" userMessageAlign">
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
            <div className="userNames">
              {" "}
              {user.name} {user.surname}
            </div>
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
