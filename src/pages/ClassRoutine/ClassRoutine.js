import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import axiosInstance from "../../utils/axiosInstance";

const ClassRoutine = () => {
  const [showRoutine, setShowRoutine] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [classId, setClassId] = useState("");
  const [classData, setClassData] = useState([]);
  const handleClass = (id) => {
    setShowRoutine(!showRoutine);
    setClassId(id);
  };
  useEffect(() => {
    setIsLoading(true);
    axiosInstance.get("routine").then((res) => {
      console.log(res.data);
      setIsLoading(false);
      setClassData(res.data);
    });
  }, []);
  // const classData = [
  //   {
  //     id: 1,
  //     className: 6,
  //     hours: [
  //       {
  //         firstHour: [
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //       {
  //         secondHour: [
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //       {
  //         secondHour: [
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //       {
  //         secondHour: [
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //       {
  //         secondHour: [
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //     ],
  //   },

  //   {
  //     id: 2,
  //     className: 7,
  //     hours: [
  //       {
  //         firstHour: [
  //           {
  //             sub: "Eng",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Math",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //       {
  //         secondHour: [
  //           {
  //             sub: "Ict",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     className: 8,
  //     hours: [
  //       {
  //         firstHour: [
  //           {
  //             sub: "Eng",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Math",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //       {
  //         secondHour: [
  //           {
  //             sub: "Ict",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  return (
    <>
      {isLoading ? (
        <div className="mt-20 ">
          <Loader />
        </div>
      ) : (
        <div className="px-5 h-[calc(100vh-64px)] mt-16 overflow-y-scroll">
          <h1 className="md:text-xl md:font-bold font-semibold text-lg text-center dark:text-white py-2 md:py-3">
            Class <span className="text-orange-300">Routines</span>
          </h1>
          <div className=" flex flex-col items-center justify-center dark:text-white">
            {classData.map((cd, index) => (
              <div key={index} className="">
                <div
                  onClick={() => handleClass(cd._id)}
                  className={`border md:text-base text-sm dark:border-gray-700 flex hover:bg-blue-500 cursor-pointer hover:text-white ${
                    !showRoutine && "mb-1"
                  }`}
                >
                  <p className="w-16 md:w-28  dark:border-gray-700 text-center py-1">
                    Sun
                  </p>
                  <p className="w-16 md:w-28 border-l dark:border-gray-700 text-center py-1">
                    Mon
                  </p>
                  <p className="w-16 md:w-28 border-l dark:border-gray-700 text-center py-1">
                    Tue
                  </p>
                  <p className="w-16 md:w-28 border-l dark:border-gray-700 text-center py-1">
                    Wed
                  </p>
                  <p className="w-16 md:w-28 border-l dark:border-gray-700 text-center py-1">
                    Thu
                  </p>
                  <p className="w-16 md:w-28 border-l dark:border-gray-700 text-center py-1 text-orange-300 hover:text-orange-200 font-bold">
                    Class {cd.className}
                  </p>
                </div>
                <table
                  className={`${
                    classId === cd._id && showRoutine ? "block mb-1" : "hidden"
                  }`}
                >
                  <tbody>
                    {cd.hours.map((hourData, hourIndex) => (
                      <tr
                        key={hourIndex}
                        className="text-center md:text-base text-sm"
                      >
                        {hourData.hourEntries.map((hourData, itemIndex) => (
                          <td
                            key={itemIndex}
                            className="border dark:border-gray-700 w-16 md:w-28 py-1"
                          >
                            <p className="font-semibold text-orange-300">
                              {hourData.sub}
                            </p>
                            <p>{hourData.time}</p>
                            <p>{hourData.room}</p>
                            <p>{hourData.teacher}</p>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ClassRoutine;
