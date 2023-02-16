import React from "react";
import PageTopBanner from "../../components/PageTopBanner";

const AllNotices = () => {
  const notices = [
    {
      title: "Winter Break",
      department: "Administration",
      publishedDate: "2023-02-01",
    },
    {
      title: "Exam Routine",
      department: "Academic",
      publishedDate: "2023-02-15",
    },
    {
      title: "Class Routine",
      department: "Academic",
      publishedDate: "2023-03-01",
    },
    {
      title: "Final Exam Results",
      department: "Academic",
      publishedDate: "2023-03-20",
    },
    {
      title: "Spring Break",
      department: "Administration",
      publishedDate: "2023-04-01",
    },
    {
      title: "Summer Camp Registration",
      department: "Student Affairs",
      publishedDate: "2023-04-15",
    },
    {
      title: "Faculty Meeting",
      department: "Academic",
      publishedDate: "2023-05-01",
    },
    {
      title: "Memorial Day Holiday",
      department: "Administration",
      publishedDate: "2023-05-20",
    },
    {
      title: "Graduation Ceremony",
      department: "Academic",
      publishedDate: "2023-06-01",
    },
    {
      title: "Summer Session",
      department: "Academic",
      publishedDate: "2023-06-15",
    },
  ];

  return (
    <div>
      <PageTopBanner title={"Notice Board"} />
      <div className="max-w-[1200px] w-full mx-auto p-3 md:flex gap-5">
        <div className="w-full mx-auto">
          <h1 className="text-sky-500 dark:text-sky-400 text-xl font-bold mb-5">
            All Notices
          </h1>

          <div>
            <div class="relative overflow-x-auto mb-5">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      #
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Title
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Department
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((notice, i) => (
                    <tr
                      key={notice.title}
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {i + 1}
                      </th>
                      <td class="px-6 py-4">{notice.title}</td>
                      <td class="px-6 py-4">{notice.department}</td>
                      <td class="px-6 py-4">{notice.publishedDate}</td>
                      <td class="px-6 py-4">
                        <span className="cursor-pointer">{downloadIcon}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNotices;

const downloadIcon = (
  <svg
    width={15}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
  </svg>
);
