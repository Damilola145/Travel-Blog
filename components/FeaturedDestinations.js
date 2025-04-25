// Featured destinations component showing captivating places in Africa
function FeaturedDestinations() {
  // Sample destinations data - these would normally come from an API or CMS
  const destinations = [
  {
    id: 1,
    name: "Serengeti National Park",
    location: "Tanzania",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Experience the incredible wildlife and witness the great migration across the vast plains.",
    rating: 4.9
  },
  {
    id: 2,
    name: "Cape Town",
    location: "South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Explore the vibrant city nestled between stunning mountains and pristine beaches.",
    rating: 4.8
  },
  {
    id: 3,
    name: "Marrakech",
    location: "Morocco",
    image: "https://images.unsplash.com/photo-1560968245-1df6e5035d63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Immerse yourself in the colorful markets, historic architecture, and rich culture.",
    rating: 4.7
  },
  {
    id: 4,
    name: "Victoria Falls",
    location: "Zimbabwe/Zambia",
    image: "https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Marvel at one of the world's largest waterfalls, known locally as 'The Smoke That Thunders'.",
    rating: 4.9
  },
  {
    id: 5,
    name: "Zanzibar",
    location: "Tanzania",
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Relax on pristine white-sand beaches and discover the historic Stone Town.",
    rating: 4.8
  },
  {
    id: 6,
    name: "Sahara Desert",
    location: "Morocco",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Experience the majestic dunes and starry nights of the world's largest hot desert.",
    rating: 4.7
  }];


  return (
    <section className="py-16 bg-light" data-id="00lue4hc0" data-path="components/FeaturedDestinations.js">
            <div className="container mx-auto px-4" data-id="zz50tls1b" data-path="components/FeaturedDestinations.js">
                <div className="text-center mb-12" data-id="jdklyc0eu" data-path="components/FeaturedDestinations.js">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="x36s47bz3" data-path="components/FeaturedDestinations.js">Discover Africa's Most Amazing Destinations</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto" data-id="lj6vwyr1j" data-path="components/FeaturedDestinations.js">
                        From breathtaking landscapes and stunning wildlife to rich cultures and historical sites, 
                        Africa offers unforgettable experiences for every traveler.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="mih6nu1it" data-path="components/FeaturedDestinations.js">
                    {destinations.map((destination) =>
          <div key={destination.id} className="destination-card bg-white rounded-xl overflow-hidden shadow-md" data-id="x20ruomn0" data-path="components/FeaturedDestinations.js">
                            <div className="relative h-64 overflow-hidden" data-id="y506m7e7c" data-path="components/FeaturedDestinations.js">
                                <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" data-id="o63xswch7" data-path="components/FeaturedDestinations.js" />

                                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-primary flex items-center" data-id="gcnxpbwim" data-path="components/FeaturedDestinations.js">
                                    <i className="fas fa-star text-accent mr-1" data-id="coivthw12" data-path="components/FeaturedDestinations.js"></i> {destination.rating}
                                </div>
                            </div>
                            <div className="p-6" data-id="0u4bv0rv1" data-path="components/FeaturedDestinations.js">
                                <div className="flex items-center mb-2" data-id="9gasg52fd" data-path="components/FeaturedDestinations.js">
                                    <i className="fas fa-map-marker-alt text-primary mr-2" data-id="1efkzbfjo" data-path="components/FeaturedDestinations.js"></i>
                                    <span className="text-gray-600" data-id="z12talcar" data-path="components/FeaturedDestinations.js">{destination.location}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2" data-id="qtm2iwoc3" data-path="components/FeaturedDestinations.js">{destination.name}</h3>
                                <p className="text-gray-600 mb-4" data-id="1zay31v31" data-path="components/FeaturedDestinations.js">{destination.description}</p>
                                <a
                href="#"
                className="inline-block text-primary font-semibold hover:text-primary/80 transition-colors" data-id="fpmndc3yd" data-path="components/FeaturedDestinations.js">

                                    Explore more <i className="fas fa-arrow-right ml-1" data-id="txyt8im3c" data-path="components/FeaturedDestinations.js"></i>
                                </a>
                            </div>
                        </div>
          )}
                </div>
                
                <div className="text-center mt-12" data-id="nwn41drex" data-path="components/FeaturedDestinations.js">
                    <a
            href="#"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors" data-id="ycxo66qcr" data-path="components/FeaturedDestinations.js">

                        View All Destinations <i className="fas fa-arrow-right ml-2" data-id="xh92w0ax3" data-path="components/FeaturedDestinations.js"></i>
                    </a>
                </div>
            </div>
        </section>);

}