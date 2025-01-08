import Link from "next/link";
import Image from "next/image";
export default function Home() {
    return (
        <>
            <nav className="bg-primary shadow-md px-5">
                <div className="container mx-auto px-2 py-2 flex items-center justify-between">
                    {/* Logo dan Nama */}
                    <div className="flex items-center">
                        <Image src={"/img/logo.png"} alt="logo CBL" width={50} height={50} priority></Image>
                        <span className="text-lg font-bold text-white px-2">
                            Central Baja Lampung
                        </span>
                    </div>

                    {/* Menu Navigasi */}
                    <ul className="flex space-x-8">
                        <li>
                            <a href="#beranda" className="text-gray-700 hover:text-white transition">
                                Beranda
                            </a>
                        </li>
                        <li>
                            <a href="#layanan" className="text-gray-700 hover:text-white transition">
                                Layanan
                            </a>
                        </li>
                        <li>
                            <a href="#harga" className="text-gray-700 hover:text-white transition">
                                Harga
                            </a>
                        </li>
                        <li>
                            <a href="#kontak" className="text-gray-700 hover:text-white transition">
                                Kontak
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Beranda */}
            <section id="beranda" className="relative h-screen w-full bg-gradient-to-br from-black to-[#0BDEF7]">
                <div className="container h-full flex items-center">
                    <div className="row h-full flex items-center justify-center md:w-1/2 text-white">
                        <div className="my-auto px-20">
                            <h1 className="text-5xl font-bold leading-[60px]">
                                Atap Baja Ringan Murah & Minimalis
                            </h1>
                            <p className="text-lg mt-5 mb-12 leading-[30px] w-4/5">
                                <span className="font-bold">Central Baja Lampung</span> hadir untuk menciptakan atap baja ringan murah dan minimalis untuk rumah anda.
                            </p>
                            <a href="#harga">
                                <button className="button-lg-primary">Lihat Harga</button>
                            </a>
                        </div>
                    </div>
                </div>
                <img src="/img/bg-hero.png" alt="Background beranda" className="absolute bottom-0 right-0 h-full z-0" />
            </section>
        </>
    );
}

