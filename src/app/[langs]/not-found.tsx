import Link from "next/link";

export default function NotFound() {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-slate-900">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">
                404
            </h1>
            <div className="bg-orange-600 px-2 text-sm rounded rotate-12 absolute">
                صفحه ایی که دنبالش هستی رو پیدا نکردیم 🤗
            </div>
            <button className="mt-5">
                <Link
                    href="/"
                    className="relative inline-block text-sm font-medium text-orange-600 group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-orange-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span className="relative block px-8 py-3 bg-slate-900 border border-current">
                        برگشت به خانه
                    </span>
                </Link>
            </button>
        </main>
    );
}
