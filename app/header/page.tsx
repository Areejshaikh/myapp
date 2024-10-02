import Link from "next/link";
import '../styles/style.css'


function Header() {
    return (
        <header className="text-slate-50  bg-black">
            <div className="container mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-slate-50 mb-4 md:mb-0">

                    <span className="ml-3 text-xl">AZ</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center">
                    <Link href={"/"} className="mr-8 text-red-500">Home</Link>
                    <Link href={"/about"} className="mr-8 hover:text-red-500">About</Link>
                    <Link href={"/blog"} className="mr-8 hover:text-red-500">Blog</Link>
                    <Link href={"/project"} className="mr-8 hover:text-red-500">Project</Link>
                    <Link href={"/contect"} className="mr-8 hover:text-red-500">Contect</Link>
                </nav>
                <button className="inline-flex items-center border border-inherit py-1 px-4 hover:text-red-500 rounded text-base mt-4 md:mt-0">Button</button>
            </div>
        </header>
    )
}

export default Header;