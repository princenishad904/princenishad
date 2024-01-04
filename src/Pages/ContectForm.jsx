import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Oval } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContectForm = () => {
  const [button, setButton] = useState("Send message");
  const [loader, setLoader] = useState(null);
  const form = useRef();
  const handleForm = (e) => {
    e.preventDefault();
    setLoader(
      <Oval
        visible={true}
        height="20"
        width="20"
        color="#FFF"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
    setButton("Sending");
    emailjs
      .sendForm(
        "service_vu4dtmu",
        "template_jqtldop",
        form.current,
        "mEB5Puxr54oYMhe6q"
      )
      .then(
        (result) => {
          setLoader(null);
          setButton("Send message");
          toast.success("Successfully Message send", {
            theme: "colored",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="w-6/12 max-md:w-4/5 max-sm:w-full p-4 mx-auto">
      <ToastContainer />
      <h1 className="text-2xl text-purple-600">Contact Form</h1>
      <form onSubmit={handleForm} ref={form}>
        <div className="flex max-sm:flex-col gap-4 my-2">
          <div className="w-full">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="user_name"
              className="border rounded-sm outline-none border-purple-200 focus:border-purple-500 invalid:border-purple-400 py-1 px-2 w-full"
            />
          </div>
          <div className="w-full">
            <label htmlFor="">Email</label>

            <input
              type="email"
              placeholder="Enter Your Email"
              name="user_email"
              className="border rounded-sm outline-none border-purple-200 focus:border-purple-500 invalid:border-purple-400 py-1 px-2 w-full"
            />
          </div>
        </div>
        <div className="my-2">
          <label htmlFor="">Message</label>

          <textarea
            name="message"
            id=""
            placeholder="Type message here..."
            className="resize-none rounded-sm outline-none border border-purple-200 focus:border-purple-500 invalid:border-purple-400 w-full p-2 h-40"
          ></textarea>
        </div>

        <button className="py-1 px-4 bg-purple-600 text-white rounded-sm flex justify-center gap-3 items-center">
          {button}
          {loader}
        </button>
      </form>
    </div>
  );
};

export default ContectForm;
