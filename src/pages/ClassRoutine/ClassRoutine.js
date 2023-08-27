import React, { useState } from "react";

const ClassRoutine = () => {
  const [showRoutine, setShowRoutine] = useState(false);
  const [classId, setClassId] = useState("");
  const handleClass = (id) => {
    setShowRoutine(!showRoutine);
    setClassId(id);
  };
  const classData = [
    {
      id: 1,
      className: 6,
      hours: [
        {
          firstHour: [
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
          ],
        },
        {
          secondHour: [
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
          ],
        },
      ],
    },

    {
      id: 2,
      className: 7,
      hours: [
        {
          firstHour: [
            {
              sub: "Eng",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Math",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
          ],
        },
        {
          secondHour: [
            {
              sub: "Ict",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      className: 8,
      hours: [
        {
          firstHour: [
            {
              sub: "Eng",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Math",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
          ],
        },
        {
          secondHour: [
            {
              sub: "Ict",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
            {
              sub: "Ban",
              time: "10:00",
              room: "101",
              teacher: "RI",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="px-5 h-[calc(100vh-64px)] mt-16">
      <h1 className="md:text-xl md:font-bold font-semibold text-lg text-center dark:text-white py-2 md:py-3">
        Class <span className="text-orange-300">Routines</span>
      </h1>
      <div className=" flex flex-col items-center justify-center dark:text-white">
        {classData.map((cd, index) => (
          <div key={index} className="">
            <div
              onClick={() => handleClass(cd.id)}
              className="border flex hover:bg-blue-500 cursor-pointer hover:text-white"
            >
              <p className="w-28 border-l border-gray-700 text-center py-1">
                Sun
              </p>
              <p className="w-28 border-l border-gray-700 text-center py-1">
                Mon
              </p>
              <p className="w-28 border-l border-gray-700 text-center py-1">
                Tue
              </p>
              <p className="w-28 border-l border-gray-700 text-center py-1">
                Wed
              </p>
              <p className="w-28 border-l border-gray-700 text-center py-1">
                Thu
              </p>
              <p className="w-28 border-l border-gray-700 text-center py-1 text-orange-300 hover:text-orange-200 font-bold">
                Class {cd.className}
              </p>
            </div>
            <table
              className={`${
                classId === cd.id && showRoutine ? "block" : "hidden"
              }`}
            >
              <tbody>
                {cd.hours.map((hourData, hourIndex) => (
                  <tr key={hourIndex} className="text-center">
                    {Object.keys(hourData).map((hourKey) =>
                      hourData[hourKey].map((classItem, itemIndex) => (
                        <td key={itemIndex} className="border w-28 py-1">
                          <p className="font-semibold text-orange-300">
                            {classItem.sub}
                          </p>
                          <p>{classItem.time}</p>
                          <p>{classItem.room}</p>
                          <p>{classItem.teacher}</p>
                        </td>
                      ))
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassRoutine;
