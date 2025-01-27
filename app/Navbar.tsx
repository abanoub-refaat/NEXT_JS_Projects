import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-slate-200 p-5 mt-0 justify-center">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/products" className="mr-5">
        Products
      </Link>
      <Link href="/admin" className="mr-5">
        Admin
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
    </nav>
  );
};

export default Navbar;
