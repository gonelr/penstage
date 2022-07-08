import Image from "next/image";
import Device from "../public/device.png";
import MemoCall from "../components/assets/icons/Call";
import MemoFacebook from "../components/assets/icons/Facebook";
import MemoLinkedin from "../components/assets/icons/Linkedin";
import MemoLocation from "../components/assets/icons/Location";
import MemoMail from "../components/assets/icons/Mail";
import MemoTwitter from "../components/assets/icons/Twitter";
import MemoYoutube from "../components/assets/icons/Youtube";

const Contact = () => {
  return (
    <div>
      <div className="bg-brand/500 flex w-full max-w-4xl rounded-xl  p-10 flex-col space-y-06 mx-auto bg-blue-600 shadow-md dark:text-brand-dark sm:p-14 overflow-hidden">
        <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 justify-between space-y-6">
          <div className="flex flex-col space-y-6 justify-center ">
            <div className="text-3xl font-bold tracking-wide"> contact us</div>
            <div className=" text-md italic">
              wanna reach us? fill out the form below and we will get back to
              you as soon as possible.
            </div>
            <div className="inline-flex space-x-2  items-center ">
              <MemoCall width="40" />
              <span>786-000-1111</span>
            </div>
            <div className="inline-flex space-x-2  items-center ">
              <MemoMail width="40" />
              <span>gonelr@yahoo.com</span>
            </div>
            <div className="inline-flex space-x-2  items-center ">
              <MemoLocation width="40" />
              <span>14060 biscayne blvd</span>
            </div>

            <div className="flex space-x-6 mt-6 px-2  ">
              <div>
                <a href="#">
                  <MemoFacebook width="20" />
                </a>
              </div>
              <div>
                <a href="#">
                  <MemoTwitter width="20" />
                </a>
              </div>
              <div>
                <a href="#">
                  <MemoYoutube width="20" />
                </a>
              </div>
              <div>
                <a href="#">
                  <MemoLinkedin width="20" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute h-40 w-40 bg-accent rounded-full z-0 -right-28 -top-28"></div>
            <div className="absolute h-40 w-40 bg-accent rounded-full z-0 -left-16 -bottom-16"></div>
            <div className="bg-white rounded-lg shadow-md relative z-10">
              <form action="" className="flex flex-col space-y-4 p-8">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 ring-1 ring-brand-light-50 outline-none px-4 py-2 rounded-md focus-ring-2 focus:ring-accent/40  dark:bg-slate-100"
                />
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full p-2 ring-1 ring-brand-light-50 outline-none px-4 py-2 rounded-md focus-ring-2 focus:ring-accent/40  dark:bg-slate-100"
                />
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 ring-1 ring-brand-light-50 outline-none px-4 py-2 rounded-md focus-ring-2 focus:ring-accent/40 dark:bg-slate-100"
                  rows="4"
                  cols="50"
                ></textarea>
                <button className=" py-2 px-4 rounded-lg inline-block self-end border border-blue-500">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
