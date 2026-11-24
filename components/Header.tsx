import Link from 'next/link';

export default function Header() {
    return (
        <header className="border-b border-slate-700 bg-slate-800">
            <div className="flex items-center justify-between px-8 py-5">
                <Link href="/" id="header-title" className="text-3xl font-bold tracking-tight text-slate-100">
                    CashTrail
                </Link>
                {/* Auth buttons: will be replaced by Clerk components */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/login"
                        className="rounded-lg border border-slate-700 px-5 py-2.5 text-base text-slate-100 transition-colors hover:bg-slate-700"
                    >
                        Log in
                    </Link>
                    <Link
                        href="/register"
                        className="rounded-lg bg-blue-500 px-5 py-2.5 text-base font-semibold text-slate-900 transition-colors hover:bg-blue-400"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </header>
    );
}
