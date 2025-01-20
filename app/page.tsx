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
                            <a href="#admin" className="text-gray-700 hover:text-white transition">
                                Admin
                            </a>
                        </li>
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

            {/* Layanan */}
            <section id="layanan" className="py-8 bg-[#ECF8F9]">
                <div className="container mx-auto px-4">
                    {/* Judul Layanan */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-medium text-primary">Layanan</h2>
                    </div>

                    {/* Card Layanan */}
                    <div className="flex flex-col md:flex-row items-center bg-primary rounded-lg shadow-md p-10">
                        {/* Gambar */}
                        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
                            <img
                                src="/img/layanan3.jpg"
                                alt="Layanan Central Baja Lampung"
                                className="w-72 rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Deskripsi */}
                        <div>
                            <h3 className="text-white font-medium text-lg">
                                Central Baja Lampung menyediakan layanan profesional untuk pemasangan atap baja ringan,
                                dirancang khusus untuk memberikan kombinasi antara kekuatan, kepraktisan, dan estetika modern.
                                Dengan harga yang kompetitif, kami menawarkan solusi yang terjangkau untuk kebutuhan konstruksi
                                Anda, tanpa mengorbankan kualitas. Desain minimalis yang kami hadirkan tidak hanya mempercantik
                                tampilan bangunan Anda, tetapi juga memberikan kesan elegan dan fungsionalitas maksimal.
                                Percayakan kebutuhan atap baja ringan Anda kepada kami, dan nikmati hasil kerja yang rapi, tahan lama,
                                serta sesuai dengan kebutuhan dan harapan Anda.
                            </h3>
                        </div>
                    </div>

                </div>
            </section>

            {/* Harga */}
            <section id="harga" className="py-12 bg-primary">
                <div className="container mx-auto px-4">
                    {/* Judul Harga */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-medium text-white">Harga</h2>
                        <span className="block text-white">
                            Harga sudah termasuk bahan & jasa (Harga 2024)
                        </span>
                        <span className="block text-white">Gratis konsultasi & survey lokasi</span>
                    </div>

                    {/* Card Harga */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div>
                            <a href="#" className="no-underline">
                                <div className="card-harga p-4 bg-[#ECF8F9] rounded-md shadow-md hover:bg-primary transition duration-300">
                                    <img
                                        src="/img/polos1.jpg"
                                        alt="Spandek Polos 0.25 mm"
                                        className="w-full rounded-md"
                                    />
                                    <div className="mt-4 text-center">
                                        <h4 className="text-xl font-bold text-black hover:text-[#ECF8F9] transition duration-300">
                                            Spandek Polos 0.25 mm
                                        </h4>
                                        <h6 className="text-lg text-black hover:text-[#ECF8F9] transition duration-300">
                                            IDR.150.000/Meter<sup>2</sup>
                                        </h6>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Card 2 */}
                        <div>
                            <a href="#" className="no-underline">
                                <div className="card-harga p-4 bg-[#ECF8F9] rounded-md shadow-md hover:bg-primary transition duration-300">
                                    <img
                                        src="/img/pols2.jpg"
                                        alt="Spandek Polos 0.25 mm"
                                        className="w-full rounded-md"
                                    />
                                    <div className="mt-4 text-center">
                                        <h4 className="text-xl font-bold text-black hover:text-[#ECF8F9] transition duration-300">
                                            Spandek Polos 0.25 mm
                                        </h4>
                                        <h6 className="text-lg text-black hover:text-[#ECF8F9] transition duration-300">
                                            IDR.150.000/Meter<sup>2</sup>
                                        </h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kontak */}
            <section id="kontak" className="py-8 bg-[#ECF8F9]">
                <div className="container mx-auto px-4">
                    {/* Judul Kontak */}
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

