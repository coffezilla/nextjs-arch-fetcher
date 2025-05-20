import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href="/" className="border cursor-pointer hover:bg-blue-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className="border cursor-pointer hover:bg-blue-700"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              className="border cursor-pointer hover:bg-blue-700"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="border cursor-pointer hover:bg-blue-700"
            >
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default Menu;
