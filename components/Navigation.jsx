import Link from "next/link"

const routes = [
  {
    label: "Clients",
    route: "/clients",
  },
  {
    label: "Tasks",
    route: "/tasks",
  },
  {
    label: "Settings",
    route: "/clients",
  },
]

const Navigation = () => {
  return (
    <nav className="w-full h-16 flex justify-between items-center px-4 drop-shadow-md bg-gray-100">
      <Link href="/" className="font-openSans text-xl font-normal">
        🌐 Next Manager
      </Link>
      <div className="w-1/3 pr-8 flex justify-around items-center">
        {routes.map((route) => (
          <Link
            key={route.route}
            href={route.route}
            className="font-openSans text-base text-gray-600 transition-all duration-100 hover:text-gray-900"
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
