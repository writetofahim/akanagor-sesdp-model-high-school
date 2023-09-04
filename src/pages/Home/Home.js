import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import classIcon from "../../assets/icons/class.svg";
import staff from "../../assets/icons/staff.svg";
import student from "../../assets/icons/student.svg";
import teacher from "../../assets/icons/teacher.svg";
import principal from "../../assets/images/teacher/principal.PNG";
import vice_principal from "../../assets/images/teacher/vice_principal1.jpg";
import axiosInstance from "../../utils/axiosInstance";
import Hero from "./Hero/Hero";

const Home = () => {
  const [news, setNews] = useState({});
  const [notices, setNotice] = useState([]);
  const baseURL = axiosInstance.defaults.baseURL;

  // console.log(baseURL);
  useEffect(() => {
    axiosInstance
      .get("news")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching document:", error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`notice/title/${1}`)
      .then((response) => {
        console.log(response.data);
        setNotice(response.data);
      })
      .catch((error) => {
        console.error("Error fetching document:", error);
      });
  }, []);
  // const notices = [
  //   {
  //     id: 1,
  //     title: "notice-title-1",
  //     date: "10/12/2020",
  //     description:
  //       "Excited to welcome you to our digital hub! Step into our virtual realm and discover a world of innovation. Click, explore, and connect! Our website is the gateway to our mission",
  //   },
  //   {
  //     id: 2,
  //     title: "notice-title-2",
  //     date: "1/13/2020",
  //     description:
  //       "Excited to welcome you to our digital hub! Step into our virtual realm and discover a world of innovation. Click, explore, and connect! Our website is the gateway to our mission",
  //   },
  //   {
  //     id: 3,
  //     title: "notice-title-3",
  //     date: "10/16/2020",
  //     description:
  //       "Excited to welcome you to our digital hub! Step into our virtual realm and discover a world of innovation. Click, explore, and connect! Our website is the gateway to our mission",
  //   },
  //   {
  //     id: 4,
  //     title: "notice-title-3",
  //     date: "10/16/2020",
  //     description:
  //       "Excited to welcome you to our digital hub! Step into our virtual realm and discover a world of innovation. Click, explore, and connect! Our website is the gateway to our mission",
  //   },
  //   {
  //     id: 5,
  //     title: "notice-title-3",
  //     date: "10/16/2020",
  //     description:
  //       "Excited to welcome you to our digital hub! Step into our virtual realm and discover a world of innovation. Click, explore, and connect! Our website is the gateway to our mission",
  //   },
  // ];
  const data = [
    {
      name: "Classes",
      number: "5",
      icon: classIcon,
    },
    {
      name: "Students",
      number: "520",
      icon: student,
    },
    {
      name: "Teachers",
      number: "13",
      icon: teacher,
    },
    {
      name: "Staff",
      number: "3",
      icon: staff,
    },
  ];
  // const handleNotice = (notice) => {
  // console.log(notice);
  // axiosInstance
  //   .get(`notice/${notice._id}`)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // };
  return (
    <div>
      <div className="px-5 w-full mx-auto mt-16 dark:text-white">
        <div className="space-y-3">
          {/* hero */}
          <section>
            {/* <div
                className=" w-full bg-cover h-72"
                style={{ backgroundImage: `url(${schoolImg_1})` }}
              ></div> */}
            <div className="">
              {/* <img
                className="w-full lg:h-96 object-cover"
                src={schoolImg_1}
                alt=""
              /> */}
              <Hero />
            </div>
          </section>
          {/* scrolling notice */}
          <Fade right>
            <section className="relative h-10 overflow-hidden flex bg-white dark:bg-gray-800">
              <h3 className="absolute h-10 shadow-lg top-0 left-0 z-10 text-xl lg:text-3xl rounded-sm px-1 lg:px-3 bg-orange-300 text-white flex items-center text-center">
                News:
              </h3>
              {/* <div className="  flex"> */}
              <Marquee
                className="md:text-lg text-md items-center"
                pauseOnHover={true}
              >
                {news.news}
              </Marquee>
              {/* </div> */}
            </section>
          </Fade>
          <Fade bottom>
            <section className="lg:flex justify-between  lg:px-0">
              <div className="lg:w-[65%] mr-2 lg:space-x-2 lg:flex justify-between">
                {/* head teacher */}
                <div className="lg:w-1/2 lg:border dark:border-gray-700 lg:p-5 lg:space-y-3 rounded">
                  <img
                    className="w-full h-60 object-cover object-top"
                    src={principal}
                    alt=""
                  />
                  <div className="text-center">
                    <h3 className="mt-2 text-xl font-semibold text-sans">
                      Sufian Saurov
                    </h3>
                    <div className=" text-sm">Head Teacher</div>
                    <p className="mb-2 text-left dark:text-gray-400">
                      I am deeply honored to welcome you to our school's
                      official website. As the head teacher of Akanagar SESDP
                      Model High School, I am delighted to share with you the
                      essence of our school, our values, and our commitment to
                      nurturing young minds.{" "}
                      <Link to="/head-teacher" className="text-blue-500">
                        see more
                      </Link>{" "}
                    </p>
                  </div>
                </div>
                {/* chairman */}
                <div className="lg:w-1/2 lg:border dark:border-gray-700 lg:p-5 lg:space-y-3 rounded">
                  <img
                    className="w-full h-60 object-cover object-top"
                    src={vice_principal}
                    alt=""
                  />
                  <div className="text-center">
                    <h3 className="mt-2 text-xl font-semibold text-sans">
                      MD Rafiqul Islam
                    </h3>
                    <div className=" text-sm">Chairman</div>
                    <p className="mb-2 text-left dark:text-gray-400">
                      It is my pleasure to extend a warm welcome to you on
                      behalf of Akanagar SESDP Model School. As the Chairman of
                      this exceptional organization, I am delighted to introduce
                      you to our digital platform—a window into the heart and
                      soul of our mission.
                      <Link to="/chairman" className="text-blue-500">
                        {" "}
                        see more
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              {/* notice */}
              <div className="border dark:border-gray-700 w-full  lg:w-[35%] relative p-5 rounded">
                <h1 className="mb-3 text-3xl font-medium text-center">
                  Notice <span className="text-orange-300">Board</span>
                </h1>
                <div className="space-y-2">
                  {notices.map((notice, index) => (
                    <a
                      key={index}
                      // onClick={() => handleNotice(notice)}
                      href={`${baseURL}notice/${notice._id}`}
                      className="flex cursor-pointer"
                    >
                      <p className="bg-orange-300 text-white rounded-l-sm py-2 px-3 flex flex-col">
                        <span>
                          {new Date(notice.date).toLocaleString("en-US", {
                            month: "short",
                          })}
                        </span>
                        <span>{new Date(notice.date).getDate()}</span>
                      </p>
                      <p
                        className={`dark:text-black hover:bg-blue-300 hover:text-white rounded-r-sm w-full py-2 px-3 flex items-center ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-200"
                        }`}
                      >
                        {notice.title}
                      </p>
                    </a>
                  ))}
                  <div className=" flex justify-center pt-3">
                    <button className="bg-orange-300 hover:bg-orange-500 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-700 rounded-full px-5 py-1 text-white  bottom-5">
                      Show all
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </Fade>
          {/* bottom section */}
          <Fade bottom>
            <section className=" w-full lg:flex justify-between">
              {/* events */}
              <div className=" lg:w-[65%] w-full ">
                <h2 className=" text-center mb-2 text-xl">
                  Recent <span className="text-orange-300">Events</span>
                </h2>
                <div className=" overflow-hidden mt-2 lg:flex flex-wrap gap-2 justify-center">
                  <div className="flex border dark:border-gray-700 p-3 mb-3 rounded space-x-2 lg:w-auto w-full">
                    <img
                      className="
                    w-40 ring-2 ring-orange-300 rounded"
                      src="https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png"
                      alt=""
                    />
                    <div className="text-center">
                      <p className="text-s">Achievements-1</p>
                      <p className="text-xs">01-05-2020</p>
                    </div>
                  </div>
                  <div className="flex border dark:border-gray-700 p-3 mb-3 rounded space-x-2 lg:w-auto w-full">
                    <img
                      className="
                    w-40 ring-2 ring-orange-300 rounded"
                      src="https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png"
                      alt=""
                    />
                    <div>
                      <h3>Achievements-1</h3>
                      <p
                        className="
                      text-xs"
                      >
                        01-05-2020
                      </p>
                    </div>
                  </div>
                  <div className="flex border dark:border-gray-700 p-3 mb-3 rounded space-x-2 lg:w-auto w-full">
                    <img
                      className="
                    w-40 ring-2 ring-orange-300 rounded"
                      src="https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png"
                      alt=""
                    />
                    <div>
                      <h3>Achievements-1</h3>
                      <p
                        className="
                      text-xs"
                      >
                        01-05-2020
                      </p>
                    </div>
                  </div>
                  <div className="flex border dark:border-gray-700 p-3 mb-3 rounded space-x-2 lg:w-auto w-full">
                    <img
                      className="
                    w-40 ring-2 ring-orange-300 rounded"
                      src="https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png"
                      alt=""
                    />
                    <div>
                      <h3>Achievements-1</h3>
                      <p
                        className="
                      text-xs"
                      >
                        01-05-2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* about */}
              <div className=" md:ml-2 mb-3 justify-center lg:w-[35%] w-full">
                {/* <Calendar /> */}
                <h3 className="text-center mb-2 text-xl">
                  Discover Akanagar{" "}
                  <span className="text-orange-300">SESDP</span> Model High
                  School
                </h3>
                <div className="border dark:border-gray-700 rounded p-4">
                  <p className="  pb-2">
                    Welcome to Akanagar SESDP Model High School, a beacon of
                    education and growth since our inception in 2012. Over the
                    years, we have established ourselves as a cherished
                    institution dedicated to nurturing young minds and preparing
                    them for a dynamic world.
                  </p>
                  <p className="  pb2">
                    Our journey began with a vision to provide quality education
                    that empowers students to thrive academically, personally,
                    and socially. As we celebrate each passing year, we are
                    humbled by the achievements of our students and the
                    contributions they make to society.
                  </p>
                </div>
              </div>
            </section>
          </Fade>
          {/* at a glance */}
          <div className="">
            <h3 className="text-center text-xl">Our Institution at a glance</h3>
            <div className="flex ">
              <Fade bottom>
                <div className="grid md:grid-cols-4 grid-cols-2 mx-auto gap-2 my-3">
                  {data.map(({ name, number, icon }, index) => (
                    <div
                      key={index}
                      className="flex gap-2 border dark:border-gray-700 rounded p-3"
                    >
                      <img src={icon} className="w-20 h-20" alt="" />
                      <div>
                        <p>{name}</p>
                        <p className="text-2xl font-extrabold text-center text-orange-300">
                          {number}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
