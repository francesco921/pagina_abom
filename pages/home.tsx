import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1e293b] text-white">
      <header className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-extrabold tracking-wide text-white">
            MEDTEST EXCELLENCE
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        <div className="max-w-xl w-full text-center">
          <div className="inline-block bg-yellow-400 text-black font-bold text-sm px-3 py-1 rounded mb-4 uppercase tracking-widest">
            2025–2026 Edition
          </div>

          <h2 className="text-5xl font-extrabold leading-tight mb-4 text-white">
            OBESITY MEDICINE<br />BOARD EXCELLENCE
          </h2>

          <ul className="text-left text-lg text-gray-100 mb-6 space-y-2">
            <li>✔ 585+ ABOM-Inspired Questions</li>
            <li>✔ VUE-Tailored Simulation</li>
            <li>✔ Deep Explanations & Audio Summaries</li>
            <li>✔ Realistic Online Testing Environment</li>
          </ul>

          <p className="bg-yellow-400 text-black font-bold py-3 px-4 rounded mb-8 inline-block">
            Master the ABOM Exam in One Go!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.medtestpublishing.com/quizzes"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition"
            >
              Start a Quiz
            </a>
            <a
              href="https://www.medtestpublishing.com/"
              className="bg-white text-[#c8102e] border border-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              24/7 Support
            </a>
          </div>
        </div>

        <div className="w-full max-w-md md:max-w-lg flex justify-center">
          <Image
            src="/ABOM-Cover-9.jpg"
            alt="ABOM Prep Preview"
            width={600}
            height={900}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </main>
    </div>
  );
}
