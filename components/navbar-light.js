import Image from "next/image";
import menu from "@/public/images/menu.png";

function NavbarLight() {
  return (
    <div class="setbody g20 fixed top-0 left-0 right-0 z-[99999]">
      <div>
        <nav className="px-6 pt-8 lg:pt-12 pb-[22px] w-full text-xs font-bold uppercase flex flex-row justify-between items-center">
          <h6 className="g700">Alex Oyebade</h6>
          <ul className="hidden lg:flex items-center g900 gap-6">
            <li className="underline">Contact me</li>
            <li>works</li>
            <li>articles</li>
          </ul>
          <div className="flex lg:hidden flex-col w-6 h-6">
            <Image src={menu} quality={100} placeholder="blur" alt="menu" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavbarLight;
