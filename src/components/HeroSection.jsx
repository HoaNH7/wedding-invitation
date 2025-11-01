export default function HeroSection() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#f6f0e6] relative overflow-hidden px-6 sm:px-12">
        {/* Chữ chính */}
        <h1
          className="
            text-[clamp(1.8rem,5vw,4.5rem)]
            text-center
            font-[400]
            italic
            text-gray-800
            mb-6
            leading-tight
          "
          style={{
            fontFamily: '"Great Vibes", cursive',
            transform: 'rotate(-2.5deg)',
            whiteSpace: 'pre-line'
          }}
        >
          Paolo & Cristine{"\n"}are getting married!
        </h1>
  
        {/* Ảnh Polaroid */}
        <div className="relative mt-4 sm:mt-8 rotate-2">
          <div className="p-2 sm:p-3 bg-white shadow-[0_4px_8px_rgba(0,0,0,0.15)] rounded-sm">
            <img
              src="/images/JUL05439.jpg"
              alt="Couple"
              className="
                w-[180px] h-[180px]
                sm:w-[240px] sm:h-[240px]
                md:w-[280px] md:h-[280px]
                object-cover
                rounded-sm
              "
            />
          </div>
        </div>
  
        {/* Ngày và địa điểm */}
        <div className="
          absolute bottom-6 sm:bottom-10 w-full
          flex justify-between items-center
          px-6 sm:px-12
          font-mono text-[10px] sm:text-xs md:text-sm
          tracking-wider text-gray-700
        ">
          <span>JANUARY 26, 2030</span>
          <span>RAVELLO, AMALFI COAST</span>
        </div>
      </section>
    )
  }
  