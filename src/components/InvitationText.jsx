export default function InvitationText() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: "url('/images/italy-bg.jpg')",
        // filter: 'grayscale(1)'
      }}
    >
      {/* Overlay mờ để dễ đọc chữ */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 px-6 sm:px-12">
        {/* Ảnh Polaroid + phong bì */}
        <div className="relative rotate-[-3deg]">
          {/* phong bì phía sau */}
          <div className="absolute -bottom-4 -left-4 w-[240px] sm:w-[300px] h-[180px] sm:h-[220px] bg-[#f1e8da] rounded-sm -z-10 shadow-md"></div>

          {/* ảnh polaroid */}
          <div className="bg-white shadow-lg p-2 sm:p-3 rounded-sm">
            <img
              src="/images/JUL05439.jpg"
              alt="Couple"
              className="w-[220px] sm:w-[280px] h-[180px] sm:h-[220px] object-cover rounded-sm"
            />
          </div>
        </div>

        {/* Thiệp chữ bên phải */}
        <div className="bg-[#f7f3eb] px-6 sm:px-8 py-6 sm:py-8 rotate-2 shadow-md w-[220px] sm:w-[280px] h-[300px] sm:h-[480px]">
          <p className="text-[10px] sm:text-xs font-mono text-gray-700 mb-3">
            JANUARY 26, 2030
          </p>
          <p
            className="text-[clamp(1rem,2vw,1.5rem)] text-gray-800 italic leading-relaxed mb-6"
            style={{
              fontFamily: '"Great Vibes", cursive',
              whiteSpace: 'pre-line'
            }}
          >
            A small{"\n"}celebration in{"\n"}the heart of{"\n"}Italy.
          </p>
          <p className="text-[10px] sm:text-xs tracking-widest text-gray-800 font-semibold">
            PAOLO & CHRISTINE
          </p>
        </div>
      </div>
    </section>
  )
}
