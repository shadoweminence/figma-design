import React from "react";
import Dropdown from "./Dropdown";

const DropdownItems: React.FC = () => {
  const items = [
    {
      title: "How to buy",
      options:
        "Payment methods, Order and pick up, Order with delivery, Shopping ver the phone, Returns",
    },
    {
      title: "Help",
      options: "Contact, Online Help, Our Commitments, Give feedback",
    },
    {
      title: "Services",
      options:
        "Transport, Design service, Paint an plaster mixing service, Dimensioning and assemly service, Return of used equipment, Additional services",
    },
    {
      title: "About",
      options:
        "About Us, Press Office, For suppliers, Regulations, Privacy Policy, Cookies, Personal Data Request",
    },
  ];

  return (
    <div>
      <div>
        <div className="lapDrops">
          {items.map((item, index) => (
            <Dropdown key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownItems;
