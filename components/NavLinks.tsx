'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/expenses', label: 'Expenses' },
    { href: '/categories', label: 'Categories' },
    { href: '/monthly', label: 'Monthly' },
];

const linkClasses =
    'block rounded-lg px-4 py-3 text-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500';

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col gap-1" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;

                return (
                    <Link
                        key={href}
                        href={href}
                        className={`${linkClasses} ${isActive ? 'bg-blue-900 text-slate-100' : 'text-slate-300 hover:bg-slate-800 hover:text-slate-100'}`}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}
