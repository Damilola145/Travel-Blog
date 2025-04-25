// Hero section with captivating image and call to action
function HeroSection({ title, subtitle, backgroundImage, showSearch = false }) {
  return (
    <section
      className="hero-image relative"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }} data-id="lj2ajx2wb" data-path="components/HeroSection.js">

            <div className="hero-overlay" data-id="825s17w2b" data-path="components/HeroSection.js"></div>
            <div className="container mx-auto px-4 h-full flex items-center" data-id="t4zz1eob1" data-path="components/HeroSection.js">
                <div className="text-white z-10 max-w-2xl" data-id="05witltqv" data-path="components/HeroSection.js">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-id="11szm9ewl" data-path="components/HeroSection.js">{title}</h1>
                    <p className="text-xl mb-8" data-id="rkogkv2vp" data-path="components/HeroSection.js">{subtitle}</p>
                    
                    {showSearch &&
          <div className="bg-white p-4 rounded-lg shadow-lg" data-id="0fpipndsz" data-path="components/HeroSection.js">
                            <div className="flex flex-col md:flex-row gap-3" data-id="tkwzu2owg" data-path="components/HeroSection.js">
                                <input
                type="text"
                placeholder="Search destinations, experiences..."
                className="flex-grow px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary text-dark" data-id="r1j1g4t1o" data-path="components/HeroSection.js" />

                                <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors" data-id="qcxl0irn5" data-path="components/HeroSection.js">
                                    <i className="fas fa-search mr-2" data-id="4g7z2ualf" data-path="components/HeroSection.js"></i> Search
                                </button>
                            </div>
                        </div>
          }
                    
                    {!showSearch &&
          <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors" data-id="lkgg0m2gu" data-path="components/HeroSection.js">
                            Explore Destinations
                        </button>
          }
                </div>
            </div>
        </section>);

}