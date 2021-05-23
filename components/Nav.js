import Link from "next/link";
import Image from 'next/image';

const links = [
    {
        href: "/",
        label: "Refresh",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMuNSAyYy01LjYyMSAwLTEwLjIxMSA0LjQ0My0xMC40NzUgMTBoLTMuMDI1bDUgNi42MjUgNS02LjYyNWgtMi45NzVjLjI1Ny0zLjM1MSAzLjA2LTYgNi40NzUtNiAzLjU4NCAwIDYuNSAyLjkxNiA2LjUgNi41cy0yLjkxNiA2LjUtNi41IDYuNWMtMS44NjMgMC0zLjU0Mi0uNzkzLTQuNzI4LTIuMDUzbC0yLjQyNyAzLjIxNmMxLjg3NyAxLjc1NCA0LjM4OSAyLjgzNyA3LjE1NSAyLjgzNyA1Ljc5IDAgMTAuNS00LjcxIDEwLjUtMTAuNXMtNC43MS0xMC41LTEwLjUtMTAuNXoiLz48L3N2Zz4=",
    },
    {
        href: "https://github.com/chakrakan/compcon",
        label: "GitHub",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==",
    },
    {
        href: "",
        label: "Blog Post",
        icon: "https://vectorlogo.zone/logos/devto/devto-icon.svg",
    },
];

export default function Nav() {
    return (
        <nav className="container mx-auto">
            <ul className="flex justify-between items-center p-5">
                {links.map(({ href, label, icon }) => (
                    <Link href={href} key={`${href}${label}`}>
                        <p className="flex">
                            {icon ? <Image src={icon} height={20} width={30} /> : <></>}
                            {label}
                        </p>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}