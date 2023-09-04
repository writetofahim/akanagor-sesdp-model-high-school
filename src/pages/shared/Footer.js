import React from "react";

const Footer = () => {
  return (
    <footer className="border-general p-2  z-40 border-t dark:border-gray-700 bg-transparent backdrop-blur-2xl transition-colors duration-500 dark:text-white">
      <div className=" lg:flex justify-center  w-full max-w-[1200px] mx-auto ">
        <div className="flex flex-col lg:w-2/6 mb-3">
          <p className="text-xl items-center">Our Address</p>
          <div className=" items-center">
            <p>Bilpar, Bancharampur, Brahmanbaria</p>
            <p>+880170011001</p>
            <p>admission@sespd.edu.bd</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl items-center">Useful Links</h3>
          <ul className="mb-3">
            <li className="hover:text-sky-400 border-b py-1 dark:border-gray-700">
              <a
                href="http://dhakaeducationboard.gov.bd/"
                target="_blank"
                rel="noreferrer"
              >
                মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ড, ঢাকা
              </a>
            </li>
            <li className="hover:text-sky-400 border-b py-1 dark:border-gray-700">
              <a
                href="http://www.bmeb.gov.bd/"
                target="_blank"
                rel="noreferrer"
              >
                বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড
              </a>
            </li>
            <li className="hover:text-sky-400 border-b py-1 dark:border-gray-700">
              <a href="http://www.dpe.gov.bd/" target="_blank" rel="noreferrer">
                প্রাথমিক শিক্ষা অধিদপ্তর
              </a>
            </li>
            <li className="hover:text-sky-400 border-b py-1 dark:border-gray-700">
              <a
                href="http://www.nctb.gov.bd/"
                target="_blank"
                rel="noreferrer"
              >
                এনসিটিবি
              </a>
            </li>
            <li className="hover:text-sky-400 border-b py-1 dark:border-gray-700">
              <a
                href="http://www.bteb.gov.bd/"
                target="_blank"
                rel="noreferrer"
              >
                বাংলাদেশ কারিগরি শিক্ষা বোর্ড
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="p-2 border rounded-md dark:border-gray-700 flex flex-col items-center">
          <img className="w-20 rounded-full" src={devProfile} alt="" />
          <div className="text-center">
            <p>Fahim Ahammad</p>
            <p className="text-xs text-gray-100">Web Developer</p>
            <button className="bg-sky-400 px-3 py-1 rounded-full text-sm mt-1 hover:bg-sky-500 focus:ring-4">
              Contact
            </button>
          </div>
        </div> */}
      </div>
      {/* <p>
        Copyright ©2013 - 2023 <a href="/">Akanagor SESDP Model High School</a>. All Rights Reserved
      </p> */}
    </footer>
  );
};

export default Footer;
