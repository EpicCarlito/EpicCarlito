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
      <div className="flex flex-col items-center top-0 h-full w-full">
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
