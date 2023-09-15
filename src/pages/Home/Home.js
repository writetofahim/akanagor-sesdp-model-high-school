import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

import AtaGlance from "../../components/AtaGlance";
import RecentWorks from "../../components/RecentWorks/RecentWorks";
import axiosInstance from "../../utils/axiosInstance";
import Hero from "./Hero/Hero";

const Home = () => {
  const [news, setNews] = useState(null);
  const [notices, setNotice] = useState(null);
  const [page, setPage] = useState(1);
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
      .get(`notice/title/${page}`)
      .then((response) => {
        setNotice(response.data);
      })
      .catch((error) => {
        console.error("Error fetching document:", error);
      });
  }, [page]);
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

  const handlePageChange = (event, page) => {
    setPage(page);
  };
  return (
    <div>
      <div className="px-5 w-full mx-auto  dark:text-white">
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
          {/* <Fade right> */}
          <section className="relative h-10 overflow-hidden flex bg-white dark:bg-gray-800">
            <h3 className="absolute h-10 shadow-lg top-0 left-0 z-10 text-xl lg:text-3xl rounded-sm px-1 lg:px-3 bg-orange-300 text-white flex items-center text-center">
              News:
            </h3>
            {/* <div className="  flex"> */}
            <Marquee
              className="md:text-lg text-md items-center"
              pauseOnHover={true}
            >
              {news ? news.news : "Loading news"}
            </Marquee>
            {/* </div> */}
          </section>
          {/* </Fade> */}
          {/* <Fade bottom> */}
          <section className="lg:flex justify-between gap-2  lg:px-0">
            <div className="lg:w-[65%]  lg:space-x-2 lg:space-y-0 space-y-2 lg:flex justify-between">
              {/* head teacher */}
              {/*    lg:border dark:border-gray-700*/}
              <div className="bg-white dark:bg-gray-700 rounded-md p-2 shadow-md lg:w-1/2 lg:p-5 lg:space-y-3 ">
                {/* <img
                  className="w-full h-60 object-cover object-top"
                  src={principal}
                  alt=""
                /> */}
                {/* <ImageWithPlaceholder
                  className="w-full h-60 object-cover object-top"
                  actualSrc={principal}
                  alt="head of the school "
                /> */}
                <div className="text-center">
                  <h3 className="mt-2 text-xl font-semibold text-sans">
                    Sufian Saurov
                  </h3>
                  <div className=" text-sm">Head Teacher</div>
                  <p className="mb-2 text-left dark:text-gray-400">
                    I am deeply honored to welcome you to our school's official
                    website. As the head teacher of Akanagar SESDP Model High
                    School, I am delighted to share with you the essence of our
                    school, our values, and our commitment to nurturing young
                    minds.{" "}
                    <Link to="/head-teacher" className="text-blue-500">
                      see more
                    </Link>{" "}
                  </p>
                </div>
              </div>
              {/* chairman */}
              <div className="bg-white dark:bg-gray-700 rounded-md p-2 shadow-md  lg:w-1/2 lg:p-5 lg:space-y-3 ">
                {/* <img
                  className="w-full h-60 object-cover object-top"
                  src={vice_principal}
                  alt=""
                /> */}
                {/* <ImageWithPlaceholder
                  className="w-full h-60 object-cover object-top"
                  actualSrc={vice_principal}
                  alt="chairman of the school "
                /> */}
                <div className="text-center">
                  <h3 className="mt-2 text-xl font-semibold text-sans">
                    MD Rafiqul Islam
                  </h3>
                  <div className=" text-sm">Chairman</div>
                  <p className="mb-2 text-left dark:text-gray-400">
                    It is my pleasure to extend a warm welcome to you on behalf
                    of Akanagar SESDP Model School. As the Chairman of this
                    exceptional organization, I am delighted to introduce you to
                    our digital platform—a window into the heart and soul of our
                    mission.
                    <Link to="/chairman" className="text-blue-500">
                      {" "}
                      see more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* notice */}
            <div className="bg-white dark:bg-gray-700 rounded-md w-full  lg:w-[35%] relative p-3 lg:my-0 my-2 shadow-md">
              <h1 className="mb-3 text-3xl font-medium text-center">
                Notice <span className="text-orange-300">Board</span>
              </h1>
              <div className="space-y-2">
                {notices ? (
                  notices.documents?.map((notice, index) => (
                    <a
                      key={index}
                      // onClick={() => handleNotice(notice)}
                      href={`${baseURL}/notice/${notice._id}`}
                      className="flex cursor-pointer"
                    >
                      <p className="bg-orange-300 text-sm text-white text-center rounded-l-sm py-2 px-2 flex flex-col">
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
                  ))
                ) : (
                  <p className="border p-5 text-center">Loading notices...</p>
                )}
                <div className=" flex justify-center pt-3">
                  <Pagination
                    count={notices?.pages}
                    color="primary"
                    size="small"
                    onChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* </Fade> */}
          {/* bottom section */}
          {/* <Fade bottom> */}
          {/* events */}
          <div className="">
            <RecentWorks />
          </div>
          <section className="pt-4 w-full lg:flex lg:flex-col lg:space-y-0 space-y-2 gap-3 justify-between ">
            <h3 className="text-center text-xl customFont">
              Our Institution at a glance
            </h3>
            <div className="lg:flex lg:space-y-0 space-y-2 gap-3 justify-between ">
              {/* at a glance */}
              <div className="lg:w-1/2 w-full">
                <AtaGlance />
              </div>
              {/* about */}
              <div className="bg-white dark:bg-gray-700 rounded-md p-2 shadow-md lg:w-1/2 w-full">
                <h3 className="text-center mb-2 text-xl">
                  Discover Akanagar{" "}
                  <span className="text-orange-300">SESDP</span> Model High
                  School
                </h3>
                <div className=" rounded p-4">
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
            </div>
          </section>
          {/* </Fade> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
