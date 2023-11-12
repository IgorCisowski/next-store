import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="py-10 border-2 border-black">
      <div className="overflow-y-hidden max-w-6xl w-full px-4 mx-auto">
        <ul className="mb-8">
          {links.map(({ name, path }) => {
            return (
              <li key={name} className="py-1">
                <Link href={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="w-full flex justify-center">
          <p>© {new Date().getFullYear()} Elegant | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/" },
  { name: "Terms & Conditions", path: "/" },
  { name: "Shipping & Return Policy", path: "/" },
  { name: "Privacy Policy", path: "/" },
  { name: "FAQ", path: "/" },
];
