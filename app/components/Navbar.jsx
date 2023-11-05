import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="flex w-full justify-between">
        <div>LOGO</div>
        <ul className="flex gap-3">
          {routes.map(({ title, path }) => {
            return (
              <li key={title}>
                <Link href={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

const routes = [
  { title: "Dashboard", path: "/" },
  { title: "Products", path: "/products" },
  { title: "Cart", path: "/cart" },
];
