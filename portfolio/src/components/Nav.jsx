'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

function Nav() {
    const pathname = usePathname();
    const isAbout = pathname === '/about'
    const isProjects = pathname === '/projects'
    const isContact = pathname === '/contact'
    return (
        <header className='flex justify-between header'>
            <Link href='/' className='w-32 h-12 rounded-lg bg-white shadow-md items-center justify-center flex font-bold text-lg'>
                <h2 className='blue-gradient_text'>Redowan</h2>
            </Link>
            <nav className="navbar navbar-expand-lg navbar-light bg-white flex gap-7 font-medium text-lg">
                <Link href="/about" className={isAbout ? 'text-blue-500' : 'text-black'}>About</Link>
                <Link className={isProjects ? 'text-blue-500' : 'text-black'} href="/projects">Projects</Link>
                <Link className={isContact ? 'text-blue-500' : 'text-black'} href="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Nav