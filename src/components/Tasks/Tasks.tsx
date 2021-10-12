/* eslint-disable jsx-a11y/anchor-is-valid */
import { CalendarIcon, UsersIcon } from "@heroicons/react/solid";

const positions = [
  {
    id: 1,
    title: "Hire Back End Developer",
    type: "Urgent",
    department: "Engineering",
    closeDate: "2022-01-07",
    closeDateFull: "January 7, 2022",
  },
  {
    id: 2,
    title: "Hire Front End Developer",
    type: "Full-time",
    department: "Engineering",
    closeDate: "2022-01-07",
    closeDateFull: "January 7, 2022",
  },
  {
    id: 3,
    title: "Hire User Interface Designer",
    type: "Full-time",
    department: "Design",
    closeDate: "2022-01-14",
    closeDateFull: "January 14, 2022",
  },
];

export default function Tasks() {
  return (
    <div>
      <h3 className='text-lg leading-6 font-medium text-gray-900'>
        Open tasks
      </h3>
      <div className='bg-white shadow overflow-hidden sm:rounded-md mt-5'>
        <ul className='divide-y divide-gray-200'>
          {positions.map((position) => (
            <li key={position.id}>
              <a href='#' className='block hover:bg-gray-50'>
                <div className='px-4 py-4 sm:px-6'>
                  <div className='flex items-center justify-between'>
                    <p className='text-sm font-medium text-indigo-600 truncate'>
                      {position.title}
                    </p>
                    <div className='ml-2 flex-shrink-0 flex'>
                      <p className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                        {position.type}
                      </p>
                    </div>
                  </div>
                  <div className='mt-2 sm:flex sm:justify-between'>
                    <div className='sm:flex'>
                      <p className='flex items-center text-sm text-gray-500'>
                        <UsersIcon
                          className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                          aria-hidden='true'
                        />
                        {position.department}
                      </p>
                    </div>
                    <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                      <CalendarIcon
                        className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <p>
                        Closing on{" "}
                        <time dateTime={position.closeDate}>
                          {position.closeDateFull}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
