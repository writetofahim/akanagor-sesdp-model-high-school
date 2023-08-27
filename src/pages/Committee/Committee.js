import React from "react";
const members = [
  {
    id: 1,
    name: "John Doe",
    subject: "Mathematics",
    imageUrl: "t1",
  },
  {
    id: 2,
    name: "Jane Smith",
    subject: "English",
    imageUrl: "https://example.com/jane-smith.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    subject: "English",
    imageUrl:
      "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/athlon-200ge-desktop-pc-001-500x500.webp",
  },
  {
    id: 4,
    name: "Jane Smith",
    subject: "English",
    imageUrl:
      "https://scontent.fcla5-1.fna.fbcdn.net/v/t39.30808-6/305115610_3299600693597986_4036521503273019862_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeH8-VGd147z7y-HI1-Ii06jh5UaWdVUmm6HlRpZ1VSabhsldJLGyga7cGwlJc_5Jmb7Z-OP7PSa3v2HVIMeZXPA&_nc_ohc=xzf61LSF2JAAX-rKQ-t&_nc_zt=23&_nc_ht=scontent.fcla5-1.fna&oh=00_AfAQBsOaDa9fsVpceDfPGiSwt3mQjckxTIaCWOu44MJ6vA&oe=64EDF918",
  },
  // Add more members here
];

const Committee = () => {
  return (
    <div className="h-[calc(100vh-64px)] pt-16">
      <h1 className="text-center text-2xl my-10">Managing Committee</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
        {members.map((member) => (
          <div
            key={member.id}
            className="p-4 rounded-lg shadow flex flex-col items-center hover:bg-white hover:shadow-lg"
          >
            <img
              src={member.imageUrl}
              alt={`${member.name}'s profile`}
              className="w-28 h-28 rounded-full mb-2 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
            <p className="text-gray-600">{member.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
