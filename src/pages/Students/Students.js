import React from "react";
const studentData = [
  {
    className: "Six",
    maleStudents: 100,
    femaleStudents: 50,
  },
  {
    className: "Seven",
    maleStudents: 90,
    femaleStudents: 40,
  },
  {
    className: "Eight",
    maleStudents: 90,
    femaleStudents: 40,
  },
  {
    className: "Nine",
    maleStudents: 90,
    femaleStudents: 40,
  },
  {
    className: "Ten",
    maleStudents: 90,
    femaleStudents: 40,
  },
];
const Students = () => {
  return (
    <div className="h-[calc(100vh-64px)] overflow-x-scroll pt-16 mx-auto dark:text-gray-400 p-4">
      <h1 className="text-center text-2xl my-10">Students</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {studentData.map((sd) => (
          <div className="border hover:bg-white hover:shadow-lg transition-all dark:border-gray-700 rounded p-4 flex flex-col items-center justify-center">
            <p>
              Class: <span className="font-bold">{sd.className}</span>
            </p>
            <p>
              Male Students:{" "}
              <span className="font-bold">{sd.maleStudents}</span>
            </p>
            <p>
              Female Students:{" "}
              <span className="font-bold">{sd.femaleStudents}</span>
            </p>
            <p>
              Total Students:{" "}
              <span className="font-bold">
                {sd.femaleStudents + sd.maleStudents}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
