import React from "react";
const teachers = [
  {
    id: 1,
    name: "John Doe",
    subject: "Mathematics",
    imageUrl:
      "https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    subject: "English",
    imageUrl:
      "https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    subject: "English",
    imageUrl:
      "https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png",
  },
  {
    id: 4,
    name: "Jane Smith",
    subject: "English",
    imageUrl:
      "https://iwfstaff.com.au/wp-content/uploads/2017/12/placeholder-image.png",
  },
  // Add more teachers here
];

const Teachers = () => {
  return (
    <div className="h-[calc(100vh-64px)] overflow-x-scroll pt-16">
      <h1 className="text-center text-2xl my-10">All Teachers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className=" p-4 rounded-lg shadow flex flex-col items-center hover:bg-white hover:shadow-lg"
          >
            <img
              src={teacher.imageUrl}
              alt={`${teacher.name}'s profile`}
              className="w-28 h-28 rounded-full mb-2 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{teacher.name}</h2>
            <p className="text-gray-600">{teacher.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
