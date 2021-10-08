import { Fragment, useState } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  UserIcon,
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import { useAuth0 } from "@auth0/auth0-react";
import MainContainer from "../components/MainContainer/MainContainer";
import SDKView from "../components/SDKView/SDKView";
import Table from "../components/Table/Table";
import Projects from "../components/Projects/Projects";
import Stats from "../components/Stats/Stats";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "Team", href: "/team", icon: UsersIcon, current: false },
  { name: "Projects", href: "/projects", icon: FolderIcon, current: false },
  {
    name: "Integrations",
    href: "/integrations",
    icon: CalendarIcon,
    current: false,
  },
];
const userNavigation = [{ name: "Sign out", href: "#" }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Homepage() {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth0();

  console.log(pathname);

  return (
    <div className='h-screen flex overflow-hidden bg-gray-50'>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 flex z-40 md:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-trustpage-blue'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    type='button'
                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-shrink-0 flex items-center px-4'>
                <svg viewBox='0 0 3037.68 609.66' className='h-8 w-auto'>
                  <g>
                    <path
                      fill='white'
                      d='M374.52 382.88H154.7a3 3 0 00-2.7 4.22c8.41 19.27 19 35.88 32.15 49.8a3 3 0 002.18.93h156.72a3 3 0 002.19-.93c13.16-13.93 23.67-30.53 32-49.81a3 3 0 00-2.72-4.21zM397.21 289H131.62a3 3 0 00-3 3.41 443.41 443.41 0 009.38 49.26 3 3 0 002.91 2.25h247.23a3 3 0 002.92-2.26 438.2 438.2 0 009.13-49.3 3 3 0 00-2.98-3.36z'
                    ></path>
                    <path
                      fill='white'
                      d='M256.58 168a2.93 2.93 0 01-4.07.16l-39.23-34.59a3 3 0 00-4.24.33l-31.86 38.23a3.13 3.13 0 00.33 4.34l77.87 68.66a2.93 2.93 0 004.07-.16L410 80.08a3 3 0 012.67-.87q24.39 4.19 48.71 9.7a3 3 0 012.34 3c-1.3 145.82-13.51 247.33-40.12 313C394 477.93 345 520.79 265.11 543c-79.82-22.23-129-65.11-158.85-138.23-26.7-65.34-39.44-166.83-41.84-312.91a3 3 0 012.34-3A889.75 889.75 0 01264 66.38h2.65a3 3 0 002.17-.9l52.49-54a3 3 0 00-2-5.08Q291.59 4.73 264 4.72A953.19 953.19 0 0026.86 35.2L6.24 40.5A3 3 0 004 43.43l.17 21.92c.62 81.92 3.91 155 10.32 208.68C21.92 336.15 33.86 386.74 51 428.69c19.06 46.64 44.67 83.37 78.3 112.3 34.3 29.51 76.34 50.38 128.54 63.8l7.27 1.87 7.27-1.87c52.21-13.43 94.25-34.3 128.51-63.81 33.64-29 59.18-65.72 78.08-112.38 17-42 28.75-92.65 35.83-154.74 6.15-53.86 9-127 9-208.76V43.36a3 3 0 00-2.25-2.9l-20.44-5.26a978 978 0 00-103.28-20.73 3 3 0 00-2.58.88m387.93 159.39h-117v-60.43h307.38v60.43h-117v304h-73.38zm181.51 59.94H1029l.48 40.29q10.08-21.59 27.1-33.09t39.56-11.51a74.39 74.39 0 0128.29 5.27l-5.75 62.82a82 82 0 00-29.73-5.75q-27.35 0-42.44 19.66t-15.11 55.15v111.26h-66.71zm286.49 251.77q-43.17 0-65.94-26.61t-22.78-77V234.68h66.66V370.4q0 57.08 43.64 57.07 24 0 36.92-16.07t13-45.32v-131.4h66.66v244.1H1325l-.48-29.73a69.8 69.8 0 01-29.49 27.81q-18.93 9.59-43.85 9.59zm272.82 0a209.46 209.46 0 01-52.76-6.47q-24.93-6.48-38.36-17l8.15-54.19a153.05 153.05 0 0080.09 24.46q40.76 0 40.76-20.62 0-11-8.63-16.79t-36-13.42q-43.15-12-61.62-30.45t-18.43-49.67q0-35 26.37-55.15T1536 227a197.06 197.06 0 0145.08 5.28q22.55 5.28 36.93 13.9l-7.67 52.75a136 136 0 00-34.34-13.65 148 148 0 00-37.17-5q-35 0-35 18.7a19.21 19.21 0 008.4 16.55q8.38 6 33.32 13.19 46 13.43 65 31.65t18.94 50.35q0 35.51-28.06 55.63t-77.43 20.1zm267.35 0q-45.57 0-67.62-23.26T1701.67 392V289.83h-47.48v-55.15h47.48V168.5h66.66v66.18h76.25v55.15h-76.25V380q0 25.42 8.63 36.44t29.25 11a89.89 89.89 0 0043.16-10.55l7.2 55.62q-11 6.24-28.54 10.07a170.79 170.79 0 01-36.68 3.87zm102.48-251.77h63.78l1 31.65q24.93-39.31 81-39.32 32.13 0 57.79 15.83t40.52 45.31q14.86 29.5 14.87 67.86 0 35.49-14.63 65a120.57 120.57 0 01-41.48 47.48q-26.86 18-60.42 18-24.46 0-44.12-9.35a79 79 0 01-31.65-26.62v145.75h-66.66zM2021.39 427q28.77 0 46.76-19.67t18-50.35q0-31.17-18.22-50.83t-46.52-19.67q-28.31 0-46.52 19.67T1956.65 357q0 30.69 18 50.35t46.74 19.65zm280.73 59.45q-32.13 0-57.79-15.82t-40.52-45.32q-14.86-29.49-14.86-67.86 0-35.47 14.62-65a120.49 120.49 0 0141.48-47.45q26.85-18 60.43-18 24.93 0 45.32 10.31a81.4 81.4 0 0132.37 29l.95-31.65h63.79v244.1h-63.79l-.95-31.17a79.65 79.65 0 01-33.09 29q-20.62 9.86-47.96 9.86zm18.22-59.45q28.29 0 46.52-19.67t18.22-50.83q0-30.69-18-50.35t-46.76-19.67q-28.77 0-46.75 19.67t-18 50.35q0 31.18 18.23 50.83t46.54 19.67zm290.85 173.59a257.86 257.86 0 01-51.79-5.52q-26.87-5.52-42.2-14.15l7.19-60.42q14.87 9.11 36.93 14.87a169.08 169.08 0 0042.68 5.75q40.76 0 60.19-18.46t19.42-57.79v-17.26a79.65 79.65 0 01-33.09 29q-20.62 9.83-48 9.83-32.13 0-57.79-15.82t-40.52-45.32q-14.86-29.49-14.86-67.86 0-35.47 14.62-65a120.57 120.57 0 0141.52-47.44q26.85-18 60.43-18 24.93 0 45.32 10.31a81.4 81.4 0 0132.37 29l1-31.65h63.78v226.85q0 68.58-34.53 103.83t-102.67 35.25zm9.59-173.6q28.3 0 46.52-19.67t18.22-50.83q0-30.69-18-50.35t-46.76-19.67q-28.77 0-46.75 19.67t-18 50.35q0 31.18 18.23 50.83t46.54 19.68zm311 59.46q-42.69 0-74.58-15.34t-49.63-44.84q-17.75-29.49-17.74-69.3 0-36.92 15.34-66.42a115.52 115.52 0 0143.64-46.55q28.29-17 65.7-17 34.53 0 60.67 14.63t40.76 42q14.63 27.33 14.63 64.74a159.28 159.28 0 01-2.4 28.77H2856q12.47 54.67 83 54.67a200.46 200.46 0 0042.92-4.55 154.11 154.11 0 0037.62-13.26l6.71 52.27q-17.27 9.6-42.2 14.87a252.53 252.53 0 01-52.27 5.31zm35-155.86q-2.4-25.41-16.54-39.08t-37.65-13.67q-23 0-37.88 13.67t-19.18 39.08z'
                    ></path>
                  </g>
                </svg>
              </div>
              <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                <nav className='px-2 space-y-1'>
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={classNames(
                        pathname === item.href
                          ? "bg-blue-800 text-white"
                          : "text-blue-100 hover:bg-blue-600",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className='mr-4 flex-shrink-0 h-6 w-6 text-blue-300'
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden bg-trustpage-blue md:flex md:flex-shrink-0'>
        <div className='flex flex-col w-64'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col flex-grow pt-5 pb-4 overflow-y-auto'>
            <div className='flex items-center flex-shrink-0 px-4'>
              <svg viewBox='0 0 3037.68 609.66' className='h-8 w-auto'>
                <g>
                  <path
                    fill='white'
                    d='M374.52 382.88H154.7a3 3 0 00-2.7 4.22c8.41 19.27 19 35.88 32.15 49.8a3 3 0 002.18.93h156.72a3 3 0 002.19-.93c13.16-13.93 23.67-30.53 32-49.81a3 3 0 00-2.72-4.21zM397.21 289H131.62a3 3 0 00-3 3.41 443.41 443.41 0 009.38 49.26 3 3 0 002.91 2.25h247.23a3 3 0 002.92-2.26 438.2 438.2 0 009.13-49.3 3 3 0 00-2.98-3.36z'
                  ></path>
                  <path
                    fill='white'
                    d='M256.58 168a2.93 2.93 0 01-4.07.16l-39.23-34.59a3 3 0 00-4.24.33l-31.86 38.23a3.13 3.13 0 00.33 4.34l77.87 68.66a2.93 2.93 0 004.07-.16L410 80.08a3 3 0 012.67-.87q24.39 4.19 48.71 9.7a3 3 0 012.34 3c-1.3 145.82-13.51 247.33-40.12 313C394 477.93 345 520.79 265.11 543c-79.82-22.23-129-65.11-158.85-138.23-26.7-65.34-39.44-166.83-41.84-312.91a3 3 0 012.34-3A889.75 889.75 0 01264 66.38h2.65a3 3 0 002.17-.9l52.49-54a3 3 0 00-2-5.08Q291.59 4.73 264 4.72A953.19 953.19 0 0026.86 35.2L6.24 40.5A3 3 0 004 43.43l.17 21.92c.62 81.92 3.91 155 10.32 208.68C21.92 336.15 33.86 386.74 51 428.69c19.06 46.64 44.67 83.37 78.3 112.3 34.3 29.51 76.34 50.38 128.54 63.8l7.27 1.87 7.27-1.87c52.21-13.43 94.25-34.3 128.51-63.81 33.64-29 59.18-65.72 78.08-112.38 17-42 28.75-92.65 35.83-154.74 6.15-53.86 9-127 9-208.76V43.36a3 3 0 00-2.25-2.9l-20.44-5.26a978 978 0 00-103.28-20.73 3 3 0 00-2.58.88m387.93 159.39h-117v-60.43h307.38v60.43h-117v304h-73.38zm181.51 59.94H1029l.48 40.29q10.08-21.59 27.1-33.09t39.56-11.51a74.39 74.39 0 0128.29 5.27l-5.75 62.82a82 82 0 00-29.73-5.75q-27.35 0-42.44 19.66t-15.11 55.15v111.26h-66.71zm286.49 251.77q-43.17 0-65.94-26.61t-22.78-77V234.68h66.66V370.4q0 57.08 43.64 57.07 24 0 36.92-16.07t13-45.32v-131.4h66.66v244.1H1325l-.48-29.73a69.8 69.8 0 01-29.49 27.81q-18.93 9.59-43.85 9.59zm272.82 0a209.46 209.46 0 01-52.76-6.47q-24.93-6.48-38.36-17l8.15-54.19a153.05 153.05 0 0080.09 24.46q40.76 0 40.76-20.62 0-11-8.63-16.79t-36-13.42q-43.15-12-61.62-30.45t-18.43-49.67q0-35 26.37-55.15T1536 227a197.06 197.06 0 0145.08 5.28q22.55 5.28 36.93 13.9l-7.67 52.75a136 136 0 00-34.34-13.65 148 148 0 00-37.17-5q-35 0-35 18.7a19.21 19.21 0 008.4 16.55q8.38 6 33.32 13.19 46 13.43 65 31.65t18.94 50.35q0 35.51-28.06 55.63t-77.43 20.1zm267.35 0q-45.57 0-67.62-23.26T1701.67 392V289.83h-47.48v-55.15h47.48V168.5h66.66v66.18h76.25v55.15h-76.25V380q0 25.42 8.63 36.44t29.25 11a89.89 89.89 0 0043.16-10.55l7.2 55.62q-11 6.24-28.54 10.07a170.79 170.79 0 01-36.68 3.87zm102.48-251.77h63.78l1 31.65q24.93-39.31 81-39.32 32.13 0 57.79 15.83t40.52 45.31q14.86 29.5 14.87 67.86 0 35.49-14.63 65a120.57 120.57 0 01-41.48 47.48q-26.86 18-60.42 18-24.46 0-44.12-9.35a79 79 0 01-31.65-26.62v145.75h-66.66zM2021.39 427q28.77 0 46.76-19.67t18-50.35q0-31.17-18.22-50.83t-46.52-19.67q-28.31 0-46.52 19.67T1956.65 357q0 30.69 18 50.35t46.74 19.65zm280.73 59.45q-32.13 0-57.79-15.82t-40.52-45.32q-14.86-29.49-14.86-67.86 0-35.47 14.62-65a120.49 120.49 0 0141.48-47.45q26.85-18 60.43-18 24.93 0 45.32 10.31a81.4 81.4 0 0132.37 29l.95-31.65h63.79v244.1h-63.79l-.95-31.17a79.65 79.65 0 01-33.09 29q-20.62 9.86-47.96 9.86zm18.22-59.45q28.29 0 46.52-19.67t18.22-50.83q0-30.69-18-50.35t-46.76-19.67q-28.77 0-46.75 19.67t-18 50.35q0 31.18 18.23 50.83t46.54 19.67zm290.85 173.59a257.86 257.86 0 01-51.79-5.52q-26.87-5.52-42.2-14.15l7.19-60.42q14.87 9.11 36.93 14.87a169.08 169.08 0 0042.68 5.75q40.76 0 60.19-18.46t19.42-57.79v-17.26a79.65 79.65 0 01-33.09 29q-20.62 9.83-48 9.83-32.13 0-57.79-15.82t-40.52-45.32q-14.86-29.49-14.86-67.86 0-35.47 14.62-65a120.57 120.57 0 0141.52-47.44q26.85-18 60.43-18 24.93 0 45.32 10.31a81.4 81.4 0 0132.37 29l1-31.65h63.78v226.85q0 68.58-34.53 103.83t-102.67 35.25zm9.59-173.6q28.3 0 46.52-19.67t18.22-50.83q0-30.69-18-50.35t-46.76-19.67q-28.77 0-46.75 19.67t-18 50.35q0 31.18 18.23 50.83t46.54 19.68zm311 59.46q-42.69 0-74.58-15.34t-49.63-44.84q-17.75-29.49-17.74-69.3 0-36.92 15.34-66.42a115.52 115.52 0 0143.64-46.55q28.29-17 65.7-17 34.53 0 60.67 14.63t40.76 42q14.63 27.33 14.63 64.74a159.28 159.28 0 01-2.4 28.77H2856q12.47 54.67 83 54.67a200.46 200.46 0 0042.92-4.55 154.11 154.11 0 0037.62-13.26l6.71 52.27q-17.27 9.6-42.2 14.87a252.53 252.53 0 01-52.27 5.31zm35-155.86q-2.4-25.41-16.54-39.08t-37.65-13.67q-23 0-37.88 13.67t-19.18 39.08z'
                  ></path>
                </g>
              </svg>
            </div>
            <div className='mt-5 flex-1 flex flex-col'>
              <nav className='flex-1 px-2 space-y-1'>
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={classNames(
                      pathname === item.href
                        ? "bg-blue-800 text-white"
                        : "text-blue-100 hover:bg-blue-600",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className='mr-3 flex-shrink-0 h-6 w-6 text-blue-300'
                      aria-hidden='true'
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-0 flex-1 overflow-hidden'>
        <div className='relative z-10 flex-shrink-0 flex h-16 bg-white shadow'>
          <button
            type='button'
            className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='flex-1 px-4 flex justify-between'>
            <div className='flex-1 flex'>
              <form className='w-full flex md:ml-0' action='#' method='GET'>
                <label htmlFor='search-field' className='sr-only'>
                  Search
                </label>
                <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                  <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                    <SearchIcon className='h-5 w-5' aria-hidden='true' />
                  </div>
                  <input
                    id='search-field'
                    className='block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                    placeholder='Search'
                    type='search'
                    name='search'
                  />
                </div>
              </form>
            </div>
            <div className='ml-4 flex items-center md:ml-6'>
              <p>{user?.name || user?.email}</p>

              {/* Profile dropdown */}
              <Menu as='div' className='ml-3 relative'>
                <div>
                  <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    <span className='sr-only'>Open user menu</span>
                    <div className='h-8 w-8 flex justify-center rounded-full bg-gray-200'>
                      <UserIcon width='20' />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {userNavigation.map((item) => (
                      <Menu.Item
                        key={item.name}
                        onClick={() =>
                          item.name === "Sign out" &&
                          logout({ returnTo: window.location.origin })
                        }
                      >
                        {() => (
                          <a
                            href={item.href}
                            className={classNames(
                              pathname === item.href ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        <main className='flex-1 relative overflow-y-auto focus:outline-none'>
          <Switch>
            <Route exact path={"/"}>
              <MainContainer title='Dashboard'>
                <div className='py-4'>
                  <Stats />
                </div>
              </MainContainer>
            </Route>
            <Route path={`/team`}>
              <MainContainer title='Team'>
                <div className='py-4'>
                  <div className='h-auto'>
                    <Table />
                  </div>
                </div>
              </MainContainer>
            </Route>
            <Route path={`/projects`}>
              <MainContainer title='Projects'>
                <div className='py-4'>
                  <Projects />
                </div>
              </MainContainer>
            </Route>
            <Route path={`/integrations`}>
              <MainContainer title='Integrations'>
                <div className='py-4'>
                  <div className='h-auto'>
                    <SDKView />
                  </div>
                </div>
              </MainContainer>
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}
