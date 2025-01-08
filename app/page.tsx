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
        </>
    );
}

