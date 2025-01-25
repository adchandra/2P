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
                            <a href="/admin" className="text-gray-700 hover:text-white transition">
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
                            Harga sudah termasuk bahan & jasa (Harga 2025)
                        </span>
                        <span className="block text-white">Gratis konsultasi & survey lokasi</span>
                    </div>

                    {/* Card Harga */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div>
                            <a
                                href="https://wa.link/go5rxx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-3 text-lg text-white hover:underline"
                            >
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
                            <a
                                href="https://wa.link/go5rxx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-3 text-lg text-white hover:underline"
                            >
                                <div className="card-harga p-4 bg-[#ECF8F9] rounded-md shadow-md hover:bg-primary transition duration-300">
                                    <img
                                        src="https://leobangunperdana.com/wp-content/uploads/2024/07/SPANDEK-TRANSPARAN.jpg"
                                        alt="Spandek Transparan 0.25 mm"
                                        className="w-full rounded-md"
                                    />
                                    <div className="mt-4 text-center">
                                        <h4 className="text-xl font-bold text-black hover:text-[#ECF8F9] transition duration-300">
                                            Spandek Transparan 0.25 mm
                                        </h4>
                                        <h6 className="text-lg text-black hover:text-[#ECF8F9] transition duration-300">
                                            IDR.135.000/Meter<sup>2</sup>
                                        </h6>
                                    </div>
                                </div>
                            </a>
                        </div>


                        {/* Card 3 */}
                        <div>
                            <a
                                href="https://wa.link/go5rxx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-3 text-lg text-white hover:underline"
                            >
                                <div className="card-harga p-4 bg-[#ECF8F9] rounded-md shadow-md hover:bg-primary transition duration-300">
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        alt="Spandek Pasir 0.25 mm"
                                        className="w-full rounded-md"
                                    />
                                    <div className="mt-4 text-center">
                                        <h4 className="text-xl font-bold text-black hover:text-[#ECF8F9] transition duration-300">
                                            Spandek Pasir 0.25 mm
                                        </h4>
                                        <h6 className="text-lg text-black hover:text-[#ECF8F9] transition duration-300">
                                            IDR.190.000/Meter<sup>2</sup>
                                        </h6>
                                    </div>
                                </div>
                            </a>
                        </div>


                        {/* Card 4 */}
                        <div>
                            <a
                                href="https://wa.link/go5rxx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-3 text-lg text-white hover:underline"
                            >
                                <div className="card-harga p-4 bg-[#ECF8F9] rounded-md shadow-md hover:bg-primary transition duration-300">
                                    <img
                                        src="https://id-live-02.slatic.net/p/e963bbf4fb7eb81f4b59d0ad2b3b8741.jpg"
                                        alt="Spandek Laminasi 0.25 mm"
                                        className="w-full rounded-md"
                                    />
                                    <div className="mt-4 text-center">
                                        <h4 className="text-xl font-bold text-black hover:text-[#ECF8F9] transition duration-300">
                                            Spandek Laminasi 0.25 mm
                                        </h4>
                                        <h6 className="text-lg text-black hover:text-[#ECF8F9] transition duration-300">
                                            IDR.178.000/Meter<sup>2</sup>
                                        </h6>
                                    </div>
                                </div>
                            </a>
                        </div>


                        {/* Card 5 */}
                        <div>
                            <a
                                href="https://wa.link/go5rxx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-3 text-lg text-white hover:underline"
                            >
                                <div className="card-harga p-4 bg-[#ECF8F9] rounded-md shadow-md hover:bg-primary transition duration-300">
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        alt="Spandek Lengkung 0.25 mm"
                                        className="w-full rounded-md"
                                    />
                                    <div className="mt-4 text-center">
                                        <h4 className="text-xl font-bold text-black hover:text-[#ECF8F9] transition duration-300">
                                            Spandek Lengkung 0.25 mm
                                        </h4>
                                        <h6 className="text-lg text-black hover:text-[#ECF8F9] transition duration-300">
                                            IDR.155.000/Meter<sup>2</sup>
                                        </h6>
                                    </div>
                                </div>
                            </a>
                        </div>


                        {/* Card 6 */}
                        <div>
                            <a
                                href="https://wa.link/go5rxx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-3 text-lg text-white hover:underline"
                            >
                                <div className="card-harga p-4 bg-[#ECF8F9] rounded-md shadow-md hover:bg-primary transition duration-300">
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        alt="Spandek Warna 0.25 mm"
                                        className="w-full rounded-md"
                                    />
                                    <div className="mt-4 text-center">
                                        <h4 className="text-xl font-bold text-black hover:text-[#ECF8F9] transition duration-300">
                                            Spandek Warna 0.25 mm
                                        </h4>
                                        <h6 className="text-lg text-black hover:text-[#ECF8F9] transition duration-300">
                                            IDR.150.000/Meter<sup>2</sup>
                                        </h6>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Card 7 */}
                        <div>
                            <a
                                href="https://wa.link/go5rxx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-3 text-lg text-white hover:underline"
                            >
                                <div className="card-harga p-4 bg-[#ECF8F9] rounded-md shadow-md hover:bg-primary transition duration-300">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpaAc0Le8k6ZwqIeD17vVgldCo1gPWn7RCQ&s"
                                        alt="Spandek Klipplok 0.25 mm"
                                        className="w-full rounded-md"
                                    />
                                    <div className="mt-4 text-center">
                                        <h4 className="text-xl font-bold text-black hover:text-[#ECF8F9] transition duration-300">
                                            Spandek Klipplok 0.25 mm
                                        </h4>
                                        <h6 className="text-lg text-black hover:text-[#ECF8F9] transition duration-300">
                                            IDR.168.000/Meter<sup>2</sup>
                                        </h6>
                                    </div>
                                </div>
                            </a>
                        </div>


                    </div>
                </div>
            </section>

            {/* Kontak */}
            <section
                id="kontak"
                className="bg-cover bg-no-repeat relative"
                style={{ backgroundImage: 'url(/img/bgkontak.jpg)' }}
            >
                <div className="bg-black/80 h-full">
                    <div className="container mx-auto py-24">
                        <div className="flex flex-wrap">
                            {/* Kolom Kiri */}
                            <div className="w-full md:w-1/2 ml-4 text-white">
                                <h3 className="font-bold text-4xl leading-tight mb-8">
                                    Butuh Konsultasi..? <br />
                                    Silahkan hubungi Kami <br />
                                    Kami siap membantu
                                </h3>
                                <div className="kontak space-y-6">
                                    <h6 className="font-medium text-lg">Kontak</h6>
                                    {/* Instagram */}
                                    <div className="flex items-center">
                                        <img
                                            src="/img/instagram.png"
                                            alt="Instagram"
                                            className="h-4 w-4 bg-white rounded-full"
                                        />
                                        <a
                                            href="https://www.instagram.com/centralbajalampung?igsh=Nnk4ZXljMHR1MmJn"
                                            className="ml-3 text-lg text-white hover:underline"
                                        >
                                            @centralbajalampung
                                        </a>
                                    </div>
                                    {/* Facebook */}
                                    <div className="flex items-center">
                                        <img
                                            src="/img/facebook.png"
                                            alt="Facebook"
                                            className="h-4 w-4 bg-white rounded-full"
                                        />
                                        <a
                                            href="https://www.facebook.com/gallerypropertylampungg?mibextid=mna8qTP8xvtPE1tK"
                                            className="ml-3 text-lg text-white hover:underline"
                                        >
                                            Central Baja Lampung
                                        </a>
                                    </div>
                                    {/* WhatsApp */}
                                    <div className="flex items-center">
                                        <img
                                            src="/img/whatsapp.png"
                                            alt="WhatsApp"
                                            className="h-4 w-4 bg-white rounded-full"
                                        />
                                        <a
                                            href="https://wa.me/6281944203222"
                                            className="ml-3 text-lg text-white hover:underline"
                                        >
                                            0819 4420 3222
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Kolom Kanan */}
                            <div className="w-full md:w-1/4 flex justify-center items-center">
                                <div className="card-logo">
                                    <img
                                        src="/img/logo.png"
                                        alt="Logo"
                                        className="h-96 ml-12 object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

