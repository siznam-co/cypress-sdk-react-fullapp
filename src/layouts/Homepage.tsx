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
            <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-blue-600'>
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
                <p className='text-white text-2xl font-bold'>Doneday</p>
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
      <div className='hidden bg-blue-600 md:flex md:flex-shrink-0'>
        <div className='flex flex-col w-64'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col flex-grow pt-5 pb-4 overflow-y-auto'>
            <div className='flex items-center flex-shrink-0 px-4'>
              <p className='text-white text-2xl font-bold'>Doneday</p>
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
