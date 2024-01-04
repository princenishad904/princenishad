import React from "react";
import { Oval } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="w-full h-screen fixed grid place-items-center top-0 bg-slate-100 z-30 left-0 ">
      <Oval
        visible={true}
        height="40"
        width="40"
        color="#A020F0"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
