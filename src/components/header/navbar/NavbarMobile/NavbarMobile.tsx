import { useState } from "react";
import { NavbarConstants } from "../../../../constants";
import { NavbarList } from "./NavbarList/NavbarList";
import { motion } from "framer-motion";

export function NavbarMobile() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  function handleOpenNavbar() {
    setMobileMenu(!mobileMenu);
  }
  return (
    <>
      <nav className="container lg:hidden">
        <div className="fixed right-5 top-4 p-4">
          <div onClick={() => handleOpenNavbar()} className="group flex h-5 w-6 cursor-pointer flex-col items-center justify-between">
            <span className="inline-flex h-[2px] w-full transform bg-primary transition-all duration-300 ease-in-out group-hover:translate-x-2"></span>
            <span className="inline-flex h-[2px] w-full translate-x-3 transform bg-text-secondary transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
            <span className="inline-flex h-[2px] w-full translate-x-1 transform bg-primary transition-all duration-300 ease-in-out group-hover:translate-x-3"></span>
          </div>
        </div>
      </nav>
      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOpenNavbar}
          className="fixed inset-0 z-50 cursor-pointer bg-[slate-900/20] backdrop-blur p-8"
        >
          <motion.ul className="flex flex-col gap-5">
            {NavbarConstants.map((page, index) => {
              return <NavbarList key={`data-${index}`} item={page.name} navIcon={page.icon} href={page.href} />;
            })}
          </motion.ul>
        </motion.div>
      )}
    </>
  );
}