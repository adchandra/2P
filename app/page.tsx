import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <nav className="bg-primary shadow-md px-5">
                <div className="container mx-auto px-2 py-2 flex items-center justify-between">
                    {/* Logo dan Nama */}
                    <div className="flex items-center">
                        <Image src="/img/logo.png" alt="logo CBL" width={50} height={50} priority />
                        <span className="text-lg font-bold text-white px-2">
                            Central Baja Lampung
                        </span>
                    </div>

                    {/* Menu Navigasi */}
                    <ul className="flex space-x-8">
                        <li>
                            <Link href="#admin">
                                <a className="text-gray-700 hover:text-white transition">Admin</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#beranda">
                                <a className="text-gray-700 hover:text-white transition">Beranda</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#layanan">
                                <a className="text-gray-700 hover:text-white transition">Layanan</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#harga">
                                <a className="text-gray-700 hover:text-white transition">Harga</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#kontak">
                                <a className="text-gray-700 hover:text-white transition">Kontak</a>
                            </Link>
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
                            <Link href="#harga">
                                <a className="button-lg-primary">Lihat Harga</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <Image src="/img/bg-hero.png" alt="Background beranda" layout="fill" objectFit="cover" className="absolute bottom-0 right-0 z-0" />
            </section>

            {/* Layanan */}
            <section id="layanan" className="py-8 bg-[#ECF8F9]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-medium text-primary">Layanan</h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center bg-primary rounded-lg shadow-md p-10">
                        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
                            <Image
                                src="/img/layanan3.jpg"
                                alt="Layanan Central Baja Lampung"
                                width={288}
                                height={288}
                                className="rounded-lg shadow-lg"
                            />
                        </div>

                        <div>
                            <h3 className="text-white font-medium text-lg">
                                Central Baja Lampung menyediakan layanan profesional untuk pemasangan atap baja ringan, dirancang khusus untuk memberikan kombinasi antara kekuatan, kepraktisan, dan estetika modern. Dengan harga yang kompetitif, kami menawarkan solusi yang terjangkau untuk kebutuhan konstruksi Anda, tanpa mengorbankan kualitas. Desain minimalis yang kami hadirkan tidak hanya mempercantik tampilan bangunan Anda, tetapi juga memberikan kesan elegan dan fungsionalitas maksimal. Percayakan kebutuhan atap baja ringan Anda kepada kami, dan nikmati hasil kerja yang rapi, tahan lama, serta sesuai dengan kebutuhan dan harapan Anda.
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Harga */}
            <section id="harga" className="py-8 bg-[#ECF8F9]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-medium text-primary">Harga</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center bg-primary rounded-lg shadow-md p-6">
                            <Image
                                src="/img/layanan3.jpg"
                                alt="Harga Atap Baja Ringan"
                                width={288}
                                height={288}
                                className="rounded-lg shadow-lg mb-4"
                            />
                            <h3 className="text-white font-medium text-lg">Rp. 100.000</h3>
                            <h3 className="text-white font-medium text-lg">www.centralbajalampung.com</h3>
                        </div>

                        <div className="flex flex-col items-center bg-primary rounded-lg shadow-md p-6">
                            <Image
                                src="/img/layanan3.jpg"
                                alt="Harga Atap Baja Ringan"
                                width={288}
                                height={288}
                                className="rounded-lg shadow-lg mb-4"
                            />
                            <h3 className="text-white font-medium text-lg">Rp. 100.000</h3>
                            <h3 className="text-white font-medium text-lg">www.centralbajalampung.com</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kontak */}
            <section id="kontak" className="py-8 bg-[#ECF8F9]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-medium text-primary">Kontak</h2>
                    </div>

                    <div className="text-center mb-8">
                        <h3 className="text-black font-medium text-lg">www.centralbajalampung.com</h3>
                        <h3 className="text-black font-medium text-lg">INSTAGRAM</h3>
                        <h3 className="text-black font-medium text-lg">WA 0852 1234 5678</h3>
                    </div>
                </div>
            </section>
        </>
    );
}
