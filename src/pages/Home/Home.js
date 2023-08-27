import React from "react";
import Marquee from "react-fast-marquee";
import principal from "../../assets/images/teacher/principal.PNG";
import teacher_1 from "../../assets/images/teacher/teacher-1.jpg";
import vice_principal from "../../assets/images/teacher/vice_principal1.jpg";
import Hero from "./Hero/Hero";
const Home = () => {
  // const handleClick = () => {
  //   toast.success("Remember recorded!");
  // };
  const notices = [
    {
      id: 1,
      title: "notice-title-1",
      date: "10/12/2020",
      link: "http://hope.edu.bd/",
    },
    {
      id: 2,
      title: "notice-title-2",
      date: "10/13/2020",
      link: "http://hope.edu.bd/",
    },
    {
      id: 3,
      title: "notice-title-3",
      date: "10/16/2020",
      link: "http://hope.edu.bd/",
    },
    {
      id: 3,
      title: "notice-title-3",
      date: "10/16/2020",
      link: "http://hope.edu.bd/",
    },
    {
      id: 3,
      title: "notice-title-3",
      date: "10/16/2020",
      link: "http://hope.edu.bd/",
    },
  ];
  return (
    <div>
      <div className="px-5 w-full mx-auto mt-16 dark:text-white">
        <div className="space-y-3">
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
          <section className="relative h-10 overflow-hidden flex bg-white dark:bg-gray-800">
            <h3 className="absolute h-10 shadow-lg top-0 left-0 z-10 text-xl lg:text-3xl rounded-sm px-1 lg:px-3 bg-orange-300 text-white flex items-center text-center">
              News:
            </h3>
            {/* <div className="  flex"> */}
            <Marquee
              className="md:text-lg text-md items-center"
              pauseOnHover={true}
            >
              Breaking News: Lorem ipsum dolor sit amet, consectetur Lorem ipsum
              dolor sit ametBreaking News: Lorem ipsum dolor sit amet,
              consectetur Lorem ipsum dolor sit ametBreaking News: Lorem ipsum
              dolor sit amet, consectetur Lorem ipsum dolor sit ametBreaking
              News: Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
              sit ametBreaking News: Lorem ipsum dolor sit amet, consectetur
              Lorem ipsum dolor sit amet.
            </Marquee>
            {/* </div> */}
          </section>
          {/* <PdfViewer /> */}
          <section className="lg:flex justify-between  lg:px-0">
            <div className="lg:w-[55%] lg:space-x-2 lg:flex justify-between">
              <div className="lg:w-1/2 lg:border dark:border-gray-700 lg:p-5 lg:space-y-3 ">
                <img
                  className="w-full h-60 object-cover object-top"
                  src={principal}
                  alt=""
                />
                <div className="text-center">
                  <h3 className="mt-2 text-xl font-semibold text-sans">
                    Sufian Saurov
                  </h3>
                  <div className=" text-sm">Principal</div>
                  <p className="mb-2 text-justify dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:border dark:border-gray-700 lg:p-5 lg:space-y-3 ">
                <img
                  className="w-full h-60 object-cover object-top"
                  src={vice_principal}
                  alt=""
                />
                <div className="text-center">
                  <h3 className="mt-2 text-xl font-semibold text-sans">
                    MD Rafiqul Islam
                  </h3>
                  <div className=" text-sm">Vice-Principal</div>
                  <p className="mb-2 text-justify dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia libero, repellendus incidunt iusto possimus
                    similique,
                  </p>
                </div>
              </div>
            </div>
            <div className="border dark:border-gray-700 w-full h-[500px] lg:w-[40%] relative p-5">
              <h1 className="mb-3 text-3xl font-medium text-center">
                Notice <span className="text-orange-300">Board</span>
              </h1>
              <div className="space-y-2">
                {notices.map((notice, index) => (
                  <div key={index} className="flex">
                    <p className="bg-orange-300 text-white rounded-l-sm py-2 px-3 flex flex-col">
                      <span>{new Date(notice.date).getMonth() + 1}</span>
                      <span>{new Date(notice.date).getDate()}</span>
                    </p>
                    <h1
                      className={`dark:text-black rounded-r-sm w-full py-2 px-3 flex items-center ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-200"
                      }`}
                    >
                      {notice.title}
                    </h1>
                  </div>
                ))}
                <div className="absolute bottom-5 left-0 flex justify-center w-full">
                  <button className="bg-orange-300 hover:bg-orange-500 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-700 rounded-full px-5 py-1 text-white  bottom-5">
                    Show all
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* bottom section */}
          <section className="w-full lg:flex justify-between">
            <div className=" lg:w-[65%] w-full">
              <h2 className=" text-2xl font-medium text-center">
                News and <span className="text-orange-300">Events</span>
              </h2>
              <div className=" overflow-hidden mt-2 lg:flex flex-wrap justify-between">
                <div className="flex border dark:border-gray-700 p-3 mb-3 rounded-lg space-x-2 lg:w-[49%] w-full">
                  <img
                    className="
                    w-40 ring-2 ring-orange-300 rounded-md"
                    src={teacher_1}
                    alt=""
                  />
                  <div className="text-center">
                    <p className="text-s">Achievements-1</p>
                    <p className="text-xs">01-05-2020</p>
                  </div>
                </div>
                <div className="flex border dark:border-gray-700 p-3 mb-3 rounded-lg space-x-2 lg:w-[49%] w-full">
                  <img
                    className="
                    w-40 ring-2 ring-orange-300 rounded-md"
                    src={teacher_1}
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
                <div className="flex border dark:border-gray-700 p-3 mb-3 rounded-lg space-x-2 lg:w-[49%] w-full">
                  <img
                    className="
                    w-40 ring-2 ring-orange-300 rounded-md"
                    src={teacher_1}
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
                <div className="flex border dark:border-gray-700 p-3 mb-3 rounded-lg space-x-2 lg:w-[49%] w-full">
                  <img
                    className="
                    w-40 ring-2 ring-orange-300 rounded-md"
                    src={teacher_1}
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
            <div className=" rounded-lg mb-3 justify-center lg:w-[30%] w-full mt-2">
              {/* <Calendar /> */}
              <h3 className="text-center  text-xl">
                প্রতিষ্ঠান{" "}
                <span className="text-orange-300 font-medium">পরিচিতি</span>
              </h3>
              <p className="border rounded-lg p-3 mt-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                modi voluptas animi, pariatur sint illum laborum. Assumenda
                reprehenderit sunt dignissimos odit molestiae corrupti autem
                cupiditate? Repellendus veritatis velit voluptatem voluptatum.
              </p>
            </div>
          </section>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
