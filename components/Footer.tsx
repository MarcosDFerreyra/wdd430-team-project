export default async function Footer() {
    'use cache';
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-700 px-6 py-4 text-base text-slate-400">
            <p>Copyright &copy; {year} | Marcos Ferreyra | All rights reserved</p>
        </footer>
    );
}
