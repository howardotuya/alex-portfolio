function NavbarDark() {
  return (
    <div className="setbody bg-[#161718] sticky top-0 left-0 right-0 z-[99999]">
      <div className="grey-g20 text-[#F5F5F5]">
        <nav className="px-6 pt-8 lg:pt-12 pb-[22px] w-full text-xs font-bold uppercase flex flex-row justify-between items-center">
          <h6 className="">Alex Oyebade</h6>
          <ul className="hidden lg:flex items-center gap-6">
            <li className="underline">Contact me</li>
            <li className=" g70">works</li>
            <li className=" g70">articles</li>
          </ul>
          <svg
            className="block lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 3.5H21V5.5H3V3.5ZM9 10.5H21V12.5H9V10.5ZM3 17.5H21V19.5H3V17.5Z"
              fill="#F5F5F5"
            />
          </svg>
        </nav>
      </div>
    </div>
  );
}

export default NavbarDark;
