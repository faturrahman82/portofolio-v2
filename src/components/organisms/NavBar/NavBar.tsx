import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { IconMenu2 } from "@tabler/icons-react";
import { navLink } from "../../../lib/data/index";
import { Drawer } from "../Drawer/Drawer";

export default function NavBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [activePage, setActivePage] = React.useState(0);

  React.useEffect(() => {
    const pages = ["/", "/about", "/skils", "portofolio", "/contact"];
    const currentPath = window.location.pathname;
    const activeIndex = pages.findIndex((page) => page === currentPath);
    setActivePage(activeIndex);
  }, [window.location.pathname]);

  function toggleDrawer() {
    setOpenDrawer(!openDrawer);
  }

  return (
    <motion.header className="w-full sticky md:px-20 top-0 bg-g ray-950 z-20 flex text-white items-center justify-between p-4 mb-5">
      <Link to="/" onClick={() => setActivePage(0)}>
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.1 }} className="flex items-center space-x-2 font-bold text-xl md:text-3xl">
          <span>Fatur</span>
        </motion.div>
      </Link>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.1 }} className="hidden lg:flex space-x-10">
        {navLink.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={`text-white text-xl ${activePage === index ? "font-bold text-neutral-600" : "font-normal text-slate-600 hover:text-neutral-600 "}`}
            onClick={() => setActivePage(index)}
          >
            {item.name}
          </NavLink>
        ))}
      </motion.nav>
      <IconMenu2 onClick={toggleDrawer} className="cursor-pointer flex lg:hidden" />
      {openDrawer && <Drawer onClick={toggleDrawer} links={navLink} />}
    </motion.header>
  );
}
