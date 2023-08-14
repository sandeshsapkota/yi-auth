import Link from "next/link";
import {usePathname} from "next/navigation";

const Header = () => {

    const pathname = usePathname();

    const routes = [
        {
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            label: "About",
            href: "/about",
        }
    ]

    return (
        <div className="container">
            <div className={"bg-gray-200 px-2  py-4 rounded-md mt-4 mb-4"}>
                <div className="flex justify-between items-center container">
                    <div className="flex gap-4">
                        {routes.map(routeLink => <Link className={routeLink.href === pathname ? "text-blue-500" : ""} href={routeLink.href} key={routeLink.label}>{routeLink.label}</Link>)}
                    </div>
                    <Link href={'/'}> Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
