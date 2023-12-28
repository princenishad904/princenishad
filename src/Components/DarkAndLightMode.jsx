import React, { useState, useReducer } from "react";
import { Dropdown } from "keep-react";
import { GoSun } from "react-icons/go";
import { CiDark } from "react-icons/ci";

const DarkAndLightMode = () => {
  const [lightDarkIcon, setLightDarkIcon] = useState(
    <GoSun className="text-xl ml-1" />
  );

  // const [state,]
  return (
    <div className="grid place-items-center w-12 h-12 rounded-full">
      <Dropdown
        label={lightDarkIcon}
        size="sm"
        type=""
        dismissOnClick={true}
        arrowIcon={false}
        className="w-10 border rounded-full h-10"
      >
        <Dropdown.Item
          onClick={() => setLightDarkIcon(<CiDark className="text-xl ml-1" />)}
        >
          Dark mode
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => setLightDarkIcon(<GoSun className="text-xl ml-1" />)}
        >
          Light mode
        </Dropdown.Item>
        {/* <Dropdown.Item>Auto</Dropdown.Item> */}
      </Dropdown>
    </div>
  );
};

export default DarkAndLightMode;
