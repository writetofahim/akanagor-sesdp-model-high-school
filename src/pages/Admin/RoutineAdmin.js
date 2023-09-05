import React from "react";

const RoutineAdmin = () => {
  const data = [
    {
      hour: "1st",
      clsInfo: [
        { sub: "Ban", time: "10:00", room: 101, faculty: "RI" },
        { sub: "Math", time: "10:00", room: 102, faculty: "SV" },
      ],
    },

    {
      hour: "2nd",
      clsInfo: [
        { sub: "Eng", time: "11:00", room: 101, faculty: "RI" },
        { sub: "Math", time: "11:00", room: 102, faculty: "SV" },
      ],
    },
  ];

  return (
    <div>
      <h3 className="text-center font-semibold">Class Routines</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="w-16 border md:w-28  dark:border-gray-700 text-center py-1">
              Sun
            </th>
            <th className="w-16 border md:w-28  dark:border-gray-700 text-center py-1">
              Mon
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((hourlyData, index) => (
            <tr key={index}>
              <th className="border">{hourlyData.hour}</th>
              {hourlyData.clsInfo.map((clsInfo, infoIndex) => (
                <td key={infoIndex} className="border">
                  {/* for making form data, i need to create a form here and manage all inputs with state  */}
                  <input type="text" value={clsInfo.sub} />
                  <p>{clsInfo.sub}</p>
                  <p>{clsInfo.time}</p>
                  <p>{clsInfo.room}</p>
                  <p>{clsInfo.faculty}</p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoutineAdmin;
