"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NavBar() {
  const routes = [
    {
      title: "Projects",
      href: "/#projects",
    },
  ];

  return (
    <>
      <div className="top-0 flex flex-col items-center w-full h-full">
        {routes.map((route, i) => (
          <motion.div key={i}>
            <Link
              href={route.href}
            >
              <p className="border rounded-md p-2 bg-[#fffff] text-center">{route.title}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
