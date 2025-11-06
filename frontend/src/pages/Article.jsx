import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function Article() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="mx-[120px] flex flex-1 flex-col">
        <Navbar />

        <main className="flex flex-1 flex-col items-center pb-16">
          <section className="mt-10 flex w-full max-w-[1000px] flex-col items-center gap-10 ">
            {/* back arrow */}
            <div className="flex w-full">
              <Link to={"/"}>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm transition-colors hover:border-gray-300 hover:text-gray-800 cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Kembali</span>
                </button>
              </Link>
            </div>

            {/* article content */}
            <article className="flex w-full max-w-[800px] flex-col items-center gap-10">
              {/* title & meta */}
              <header className="flex w-full flex-col gap-4 text-left">
                <h1 className="text-4xl font-medium text-gray-900">
                  Designing a Modern Blog: Clean Layouts That Focus on the
                  Reading Experience
                </h1>

                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>Ditulis oleh:</span>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-gray-300" />
                    <span className="font-medium text-black">Admin</span>
                  </div>
                  <span>12 Agustus 2025</span>
                </div>
              </header>

              {/* article image */}
              <div className="h-[400px] w-full rounded-lg bg-gray-200" />

              {/* body */}
              <div className="flex w-full flex-col gap-12 text-left text-gray-700">
                <section className="flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Pendahuluan
                  </h2>
                  <p className="text-base leading-relaxed">
                    Di era digital saat ini, blog bukan lagi sekadar tempat
                    menulis, tetapi juga wadah untuk berbagi pengalaman dan
                    membangun kepercayaan. Desain blog yang bersih dan mudah
                    dibaca membantu pembaca fokus pada isi, bukan terganggu oleh
                    tampilan. Dalam artikel ini, kita akan membahas cara
                    membangun halaman blog dengan desain minimalis yang punya UX
                    nyaman dan efektif.
                  </p>
                </section>

                <section className="flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Menentukan Struktur yang Sederhana
                  </h2>
                  <p className="text-base leading-relaxed">
                    Langkah pertama dalam menciptakan pengalaman membaca yang
                    baik adalah menjaga struktur halaman tetap sederhana.
                  </p>
                </section>

                <section className="flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Kesimpulan
                  </h2>
                  <p className="text-base leading-relaxed">
                    Desain blog yang baik tidak selalu harus rumit. Justru
                    dengan pendekatan minimalis, pembaca akan merasa lebih
                    nyaman dan fokus pada isi tulisan. Gunakan tipografi yang
                    konsisten, warna yang tenang, serta tata letak yang rapi
                    untuk menciptakan pengalaman membaca yang menyenangkan -
                    baik di desktop maupun di mobile.
                  </p>
                </section>
              </div>

              {/* navigation */}
              <div className="mt-8 flex w-full justify-between text-xs text-gray-400">
                <button className="cursor-pointer">Previous Article</button>
                <button className="cursor-pointer">Next Article</button>
              </div>
            </article>
          </section>
        </main>
      </div>

      <div className="flex">
        <Footer />
      </div>
    </div>
  );
}
