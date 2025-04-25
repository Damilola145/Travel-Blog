// Blog post template page
function BlogPost() {
  const { useParams, Link } = ReactRouterDOM;
  const { useState, useEffect } = React;
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog post by ID
    // First check localStorage for user-created posts
    try {
      const storedPosts = localStorage.getItem('blogPosts');
      if (storedPosts) {
        const userPosts = JSON.parse(storedPosts);
        const userPost = userPosts.find((post) => post.id.toString() === id);
        if (userPost) {
          setPost(userPost);
          setLoading(false);
          return;
        }
      }

      // If not found in user posts, use the sample post data
      setPost({
        id: id,
        title: "The Ultimate Safari Guide: Exploring Tanzania's Serengeti",
        heroImage: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        date: "June 15, 2023",
        author: "Sarah Johnson",
        authorImage: "https://randomuser.me/api/portraits/women/12.jpg",
        authorBio: "Sarah is a travel writer and photographer who has explored over 20 African countries. She specializes in wildlife and sustainable tourism.",
        category: "Wildlife",
        readTime: "8 min read",
        tags: ["Safari", "Tanzania", "Wildlife", "Travel Tips", "Serengeti"],
        introduction: "The Serengeti ecosystem in Tanzania is one of Africa's most captivating safari destinations. Known for its annual great migration of wildebeest and zebra, stunning landscapes, and incredible biodiversity, planning a trip to the Serengeti can be both exciting and overwhelming. This comprehensive guide will help you plan the perfect safari adventure.",
        sections: [
        {
          title: "Best Time to Visit the Serengeti",
          content: "The Serengeti offers a spectacular wildlife viewing experience year-round, but the best time to visit depends on what you want to see. The dry season (June to October) provides the easiest wildlife viewing as animals congregate around water sources and vegetation is less dense. However, if witnessing the Great Migration is your priority, timing is everything:\n\n• December to March: The southern Serengeti and Ndutu area are perfect for witnessing the calving season when thousands of wildebeest babies are born daily.\n\n• April to May: The heavy rainy season. Some camps close, but you'll find fewer tourists and lush landscapes.\n\n• June to July: The migration moves north, with dramatic river crossings in the Western Corridor.\n\n• August to October: The herds are typically in the northern Serengeti and crossing the Mara River into Kenya.\n\n• November: The short rains begin, and the herds start moving south again.",
          image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Wildebeest crossing the Mara River during the Great Migration"
        },
        {
          title: "Safari Accommodation Options",
          content: "The Serengeti offers a range of accommodation options to suit different budgets and preferences:\n\n• Luxury Lodges: Permanent structures offering high-end amenities, gourmet dining, and often spectacular views. Examples include Four Seasons Serengeti and Singita Sasakwa Lodge.\n\n• Tented Camps: Offering the authentic safari experience with comfortable beds, en-suite bathrooms, and the sounds of the wilderness around you. They range from mid-range to ultra-luxury. Some, like Nomad Tanzania's Serengeti Safari Camp, move seasonally to follow the migration.\n\n• Mobile Camping: For the adventurous traveler, mobile camping safaris provide a more immersive experience. Your camp moves with you as you explore different regions.\n\n• Public Campgrounds: Budget-friendly options are available in designated areas, but you'll need to bring your own equipment or book through a tour operator who provides camping gear.",
          image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Luxury tented camp in the Serengeti"
        },
        {
          title: "Safari Activities and Experiences",
          content: "While game drives are the most common safari activity, the Serengeti offers several other ways to experience its beauty:\n\n• Game Drives: The classic safari experience in 4x4 vehicles with pop-up roofs, usually done in the early morning and late afternoon when animals are most active.\n\n• Balloon Safaris: For an unforgettable experience, take a hot air balloon ride at dawn over the plains, followed by a champagne breakfast.\n\n• Walking Safaris: Available in certain areas, these guided walks provide a more intimate connection with the environment and focus on smaller creatures, plants, and tracking skills.\n\n• Cultural Visits: Several operators offer visits to authentic Maasai villages near the Serengeti, where you can learn about traditional lifestyles and cultural practices.\n\n• Photographic Safaris: Specialized tours with expert photography guides who can help you capture the perfect wildlife shots, regardless of your skill level.",
          image: "https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Hot air balloon safari over the Serengeti at sunrise"
        },
        {
          title: "Essential Packing List",
          content: "Packing appropriately for a Serengeti safari will enhance your experience. Here's what you shouldn't leave home without:\n\n• Clothing: Lightweight, neutral-colored clothing (avoid bright colors and blue, which attracts tsetse flies); long-sleeved shirts and pants for sun and insect protection; warm jacket or fleece for cold mornings; hat with a brim; comfortable walking shoes.\n\n• Equipment: Good quality binoculars; camera with zoom lens and extra batteries; headlamp or flashlight; daypack for game drives.\n\n• Health & Safety: Insect repellent with DEET; sunscreen (SPF 30+); basic first-aid kit; prescription medications; hand sanitizer.\n\n• Documents: Passport with Tanzania visa; travel insurance details; cash in US dollars (newer bills, issued after 2006) for tips and small purchases.\n\nMost safari operators will provide a detailed packing list specific to your itinerary and the season of your visit.",
          image: "https://images.unsplash.com/photo-1565361841222-425b5a0645cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Safari essentials including binoculars, camera, and appropriate clothing"
        },
        {
          title: "Responsible Safari Practices",
          content: "As visitors to this precious ecosystem, we have a responsibility to minimize our impact:\n\n• Choose ethical operators who support conservation efforts and local communities.\n\n• Follow park rules and your guide's instructions at all times.\n\n• Keep a respectful distance from wildlife and never attempt to attract an animal's attention.\n\n• Take only photographs, leave only footprints—don't remove anything from the park.\n\n• Minimize waste and dispose of it properly.\n\n• Support local communities by purchasing souvenirs directly from artisans when possible.\n\n• Consider carbon offsetting your flights to and from Tanzania.\n\nBy practicing responsible tourism, you'll help ensure the Serengeti remains pristine for future generations of both wildlife and visitors.",
          image: "https://images.unsplash.com/photo-1511229187427-3b9eff3d7fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          caption: "Responsible wildlife viewing in the Serengeti"
        }],

        conclusion: "A safari in the Serengeti is truly a once-in-a-lifetime experience that will leave you with memories to treasure forever. With proper planning, the right expectations, and a spirit of adventure, you'll discover why this iconic destination has captured the imagination of travelers for generations. The magic of the Serengeti lies not just in the big game sightings, but in the entire experience—the breathtaking landscapes, the stunning sunrises and sunsets, the night skies filled with stars, and the profound sense of connection with the natural world.",
        relatedPosts: [
        {
          id: 5,
          title: "Hiking the Atlas Mountains: A Complete Guide",
          image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          category: "Adventure"
        },
        {
          id: 3,
          title: "Island Paradise: A Week in Zanzibar",
          image: "https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          category: "Beaches"
        },
        {
          id: 7,
          title: "Packing Essentials for an African Safari",
          image: "https://images.unsplash.com/photo-1516299983559-41f5253f2644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          category: "Tips"
        }]
      });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Failed to load blog post. Please try again later.');
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-id="6btdgbkhf" data-path="pages/BlogPost.js">
        <div className="text-center" data-id="67qdbpwqq" data-path="pages/BlogPost.js">
          <i className="fas fa-spinner fa-spin text-3xl text-primary mb-4" data-id="7p2wgk4n1" data-path="pages/BlogPost.js"></i>
          <p className="text-lg" data-id="ojm1xx6i4" data-path="pages/BlogPost.js">Loading blog post...</p>
        </div>
      </div>);

  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-id="2jbu7eyex" data-path="pages/BlogPost.js">
        <div className="text-center text-red-600" data-id="1vajaw1uf" data-path="pages/BlogPost.js">
          <i className="fas fa-exclamation-circle text-3xl mb-4" data-id="966wxapsb" data-path="pages/BlogPost.js"></i>
          <p className="text-lg" data-id="m9xg602ie" data-path="pages/BlogPost.js">{error}</p>
          <Link to="/blog" className="mt-4 inline-block text-primary">Return to Blog</Link>
        </div>
      </div>);

  }

  // If post is loaded successfully
  return (
    <div data-id="9gv8gtng7" data-path="pages/BlogPost.js">
            {/* Hero Image */}
            <div
        className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${post.heroImage})` }} data-id="7puammuae" data-path="pages/BlogPost.js">

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" data-id="w71x4ujwz" data-path="pages/BlogPost.js"></div>
                <div className="container mx-auto px-4 h-full flex items-end pb-12" data-id="ojbva9rki" data-path="pages/BlogPost.js">
                    <div className="text-white z-10 max-w-3xl" data-id="a7ziapzwa" data-path="pages/BlogPost.js">
                        <div className="mb-4" data-id="mnfcsdlde" data-path="pages/BlogPost.js">
                            <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full" data-id="ua2dmo3aw" data-path="pages/BlogPost.js">
                                {post.category}
                            </span>
                            <span className="ml-3 text-sm" data-id="cd8xuwlae" data-path="pages/BlogPost.js">
                                <i className="far fa-clock mr-1" data-id="gm20l63iw" data-path="pages/BlogPost.js"></i> {post.readTime}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-id="0qk08v03z" data-path="pages/BlogPost.js">{post.title}</h1>
                        <div className="flex items-center" data-id="q61udoksv" data-path="pages/BlogPost.js">
                            <img
                src={post.authorImage}
                alt={post.author}
                className="w-12 h-12 rounded-full mr-4" data-id="3ntn0ohgk" data-path="pages/BlogPost.js" />

                            <div data-id="tllehyvlr" data-path="pages/BlogPost.js">
                                <p className="font-medium" data-id="p3kz35p87" data-path="pages/BlogPost.js">{post.author}</p>
                                <p className="text-sm text-gray-300" data-id="4rn0cac8m" data-path="pages/BlogPost.js">{post.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Blog Content */}
            <div className="bg-white py-12" data-id="30w8hahgb" data-path="pages/BlogPost.js">
                <div className="container mx-auto px-4" data-id="7idv8asyd" data-path="pages/BlogPost.js">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" data-id="tl9txgi8m" data-path="pages/BlogPost.js">
                        {/* Main Content */}
                        <div className="lg:col-span-8" data-id="la3dibczl" data-path="pages/BlogPost.js">
                            {/* Introduction */}
                            <div className="prose prose-lg max-w-none mb-12" data-id="hkfs3jclo" data-path="pages/BlogPost.js">
                                <p className="text-xl leading-relaxed text-gray-600" data-id="ub232sbm8" data-path="pages/BlogPost.js">
                                    {post.introduction}
                                </p>
                            </div>
                            
                            {/* Content Sections */}
                            {post.sections.map((section, index) =>
              <div key={index} className="mb-12" data-id="dj1jhe7i8" data-path="pages/BlogPost.js">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6" data-id="cz9dzql5w" data-path="pages/BlogPost.js">{section.title}</h2>
                                    <div className="prose prose-lg max-w-none mb-6" data-id="vkyq3teiw" data-path="pages/BlogPost.js">
                                        {section.content.split('\n\n').map((paragraph, pIndex) =>
                  <p key={pIndex} className="mb-4 text-gray-700 leading-relaxed" data-id="g3qve5erl" data-path="pages/BlogPost.js">
                                                {paragraph}
                                            </p>
                  )}
                                    </div>
                                    {section.image &&
                <div className="my-8" data-id="vz64zji0b" data-path="pages/BlogPost.js">
                                            <img
                    src={section.image}
                    alt={section.caption || section.title}
                    className="w-full h-auto rounded-lg shadow-lg" data-id="s1jm5btfo" data-path="pages/BlogPost.js" />

                                            {section.caption &&
                  <p className="mt-2 text-center text-sm text-gray-500 italic" data-id="dafh134d2" data-path="pages/BlogPost.js">
                                                    {section.caption}
                                                </p>
                  }
                                        </div>
                }
                                </div>
              )}
                            
                            {/* Conclusion */}
                            <div className="prose prose-lg max-w-none mb-12" data-id="aodu128fm" data-path="pages/BlogPost.js">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6" data-id="jg1plqen6" data-path="pages/BlogPost.js">Conclusion</h2>
                                <p className="text-gray-700 leading-relaxed" data-id="cd0s7v13o" data-path="pages/BlogPost.js">
                                    {post.conclusion}
                                </p>
                            </div>
                            
                            {/* Tags */}
                            <div className="mb-12" data-id="ib08ka27o" data-path="pages/BlogPost.js">
                                <h3 className="text-lg font-semibold mb-3" data-id="g1d09yccy" data-path="pages/BlogPost.js">Tags</h3>
                                <div className="flex flex-wrap gap-2" data-id="xxaxtcrkm" data-path="pages/BlogPost.js">
                                    {post.tags.map((tag, index) =>
                  <a
                    key={index}
                    href="#"
                    className="bg-light px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors" data-id="1p2ssh2e2" data-path="pages/BlogPost.js">

                                            {tag}
                                        </a>
                  )}
                                </div>
                            </div>
                            
                            {/* Share */}
                            <div className="mb-12" data-id="082x7k268" data-path="pages/BlogPost.js">
                                <h3 className="text-lg font-semibold mb-3" data-id="x00lxshw8" data-path="pages/BlogPost.js">Share This Article</h3>
                                <div className="flex gap-3" data-id="7nzmzua1n" data-path="pages/BlogPost.js">
                                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b5998] text-white hover:opacity-90 transition-opacity" data-id="d389idq35" data-path="pages/BlogPost.js">
                                        <i className="fab fa-facebook-f" data-id="trf02b4jf" data-path="pages/BlogPost.js"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1da1f2] text-white hover:opacity-90 transition-opacity" data-id="pbo1gfmsa" data-path="pages/BlogPost.js">
                                        <i className="fab fa-twitter" data-id="rzy0o0trl" data-path="pages/BlogPost.js"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077b5] text-white hover:opacity-90 transition-opacity" data-id="qcjzab11i" data-path="pages/BlogPost.js">
                                        <i className="fab fa-linkedin-in" data-id="4qgaffhwu" data-path="pages/BlogPost.js"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition-opacity" data-id="xzeqkqnt1" data-path="pages/BlogPost.js">
                                        <i className="fab fa-whatsapp" data-id="e0tig6yvj" data-path="pages/BlogPost.js"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#bd081c] text-white hover:opacity-90 transition-opacity" data-id="05haix8xt" data-path="pages/BlogPost.js">
                                        <i className="fab fa-pinterest" data-id="oos84d194" data-path="pages/BlogPost.js"></i>
                                    </a>
                                </div>
                            </div>
                            
                            {/* Author Bio */}
                            <div className="bg-light rounded-xl p-6 mb-12" data-id="iegdypklx" data-path="pages/BlogPost.js">
                                <div className="flex flex-col md:flex-row gap-6" data-id="kxwe53uih" data-path="pages/BlogPost.js">
                                    <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-24 h-24 rounded-full object-cover" data-id="2o7f8bvjx" data-path="pages/BlogPost.js" />

                                    <div data-id="y35yvhwo4" data-path="pages/BlogPost.js">
                                        <h3 className="text-xl font-bold mb-2" data-id="0124q2orh" data-path="pages/BlogPost.js">About {post.author}</h3>
                                        <p className="text-gray-600 mb-4" data-id="y92z8eiqs" data-path="pages/BlogPost.js">{post.authorBio}</p>
                                        <div className="flex gap-3" data-id="g4ig1vq6k" data-path="pages/BlogPost.js">
                                            <a href="#" className="text-primary hover:text-primary/80 transition-colors" data-id="eky5xzxrf" data-path="pages/BlogPost.js">
                                                <i className="fab fa-twitter" data-id="ee1j51qmi" data-path="pages/BlogPost.js"></i>
                                            </a>
                                            <a href="#" className="text-primary hover:text-primary/80 transition-colors" data-id="28s1hk8mh" data-path="pages/BlogPost.js">
                                                <i className="fab fa-instagram" data-id="ecp8osxyg" data-path="pages/BlogPost.js"></i>
                                            </a>
                                            <a href="#" className="text-primary hover:text-primary/80 transition-colors" data-id="xs9vzebd3" data-path="pages/BlogPost.js">
                                                <i className="fab fa-linkedin-in" data-id="v0j4q2iy5" data-path="pages/BlogPost.js"></i>
                                            </a>
                                            <a href="#" className="text-primary hover:text-primary/80 transition-colors" data-id="y7l882me9" data-path="pages/BlogPost.js">
                                                <i className="fas fa-globe" data-id="7lafp235y" data-path="pages/BlogPost.js"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Comments Section (Placeholder) */}
                            <div className="mb-12" data-id="uyx4xjeao" data-path="pages/BlogPost.js">
                                <h3 className="text-2xl font-bold mb-6" data-id="cb1qrjlct" data-path="pages/BlogPost.js">Comments (12)</h3>
                                <div className="space-y-6" data-id="eaodpctow" data-path="pages/BlogPost.js">
                                    {/* This is a placeholder for comments - would be dynamically generated */}
                                    <div className="bg-light rounded-xl p-6" data-id="3h42bbeel" data-path="pages/BlogPost.js">
                                        <div className="flex items-start gap-4" data-id="nfnld77oy" data-path="pages/BlogPost.js">
                                            <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt="Lisa Thompson"
                        className="w-12 h-12 rounded-full object-cover" data-id="6n4417cvg" data-path="pages/BlogPost.js" />

                                            <div data-id="5l46ih4l0" data-path="pages/BlogPost.js">
                                                <div className="flex items-center gap-2 mb-1" data-id="u7vqczsa1" data-path="pages/BlogPost.js">
                                                    <h4 className="font-semibold" data-id="nwo9xyroj" data-path="pages/BlogPost.js">Lisa Thompson</h4>
                                                    <span className="text-xs text-gray-500" data-id="llrqo2b87" data-path="pages/BlogPost.js">2 days ago</span>
                                                </div>
                                                <p className="text-gray-600 mb-3" data-id="jzin35mbn" data-path="pages/BlogPost.js">
                                                    Thank you for this detailed guide! I'm planning a trip to Tanzania next year and this has been incredibly helpful. Do you have any recommendations for mid-range accommodations in the central Serengeti?
                                                </p>
                                                <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors" data-id="go8i9ar08" data-path="pages/BlogPost.js">
                                                    Reply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-light rounded-xl p-6 ml-12" data-id="ohselqgxz" data-path="pages/BlogPost.js">
                                        <div className="flex items-start gap-4" data-id="9j2c6taa8" data-path="pages/BlogPost.js">
                                            <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-12 h-12 rounded-full object-cover" data-id="m3em5lv2v" data-path="pages/BlogPost.js" />

                                            <div data-id="an6jf9t7d" data-path="pages/BlogPost.js">
                                                <div className="flex items-center gap-2 mb-1" data-id="946k8b9zi" data-path="pages/BlogPost.js">
                                                    <h4 className="font-semibold" data-id="zx7q4ag9b" data-path="pages/BlogPost.js">{post.author}</h4>
                                                    <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded" data-id="vwcl1qglr" data-path="pages/BlogPost.js">Author</span>
                                                    <span className="text-xs text-gray-500" data-id="0e40uod06" data-path="pages/BlogPost.js">1 day ago</span>
                                                </div>
                                                <p className="text-gray-600 mb-3" data-id="cn8dz02bx" data-path="pages/BlogPost.js">
                                                    Hi Lisa! For mid-range options in Central Serengeti, I'd recommend Kati Kati Tented Camp or Serengeti Sopa Lodge. Both offer good value and are well-positioned for game viewing. Feel free to email me if you need more specific advice!
                                                </p>
                                                <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors" data-id="wfh62yrhu" data-path="pages/BlogPost.js">
                                                    Reply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Comment Form */}
                                <div className="mt-8" data-id="rseztzy6l" data-path="pages/BlogPost.js">
                                    <h4 className="text-xl font-semibold mb-4" data-id="t3qyb5nzg" data-path="pages/BlogPost.js">Leave a Comment</h4>
                                    <form className="space-y-4" data-id="7uj312g8r" data-path="pages/BlogPost.js">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="ugwoenzl6" data-path="pages/BlogPost.js">
                                            <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" data-id="dom2kslwo" data-path="pages/BlogPost.js" />

                                            <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" data-id="ulpv36p2t" data-path="pages/BlogPost.js" />

                                        </div>
                                        <textarea
                      rows="4"
                      placeholder="Your Comment"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" data-id="qihxmc4si" data-path="pages/BlogPost.js">
                    </textarea>
                                        <div className="flex items-center" data-id="308swtwgl" data-path="pages/BlogPost.js">
                                            <input type="checkbox" id="save-info" className="mr-2" data-id="3kkrhczay" data-path="pages/BlogPost.js" />
                                            <label htmlFor="save-info" className="text-gray-600 text-sm" data-id="70dpk6hqn" data-path="pages/BlogPost.js">
                                                Save my name and email for the next time I comment
                                            </label>
                                        </div>
                                        <button
                      type="submit"
                      className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors" data-id="1n1eq5ocz" data-path="pages/BlogPost.js">

                                            Post Comment
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        {/* Sidebar */}
                        <div className="lg:col-span-4" data-id="ukk6wcgbp" data-path="pages/BlogPost.js">
                            {/* Author Card (Mobile Only) */}
                            <div className="lg:hidden bg-light rounded-xl p-6 mb-8" data-id="joc3nxhnk" data-path="pages/BlogPost.js">
                                <div className="flex items-center gap-4 mb-4" data-id="2bbxuzczd" data-path="pages/BlogPost.js">
                                    <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover" data-id="1bpl1z44g" data-path="pages/BlogPost.js" />

                                    <div data-id="el8o23s0q" data-path="pages/BlogPost.js">
                                        <h3 className="font-bold" data-id="grp92fi5q" data-path="pages/BlogPost.js">{post.author}</h3>
                                        <p className="text-gray-600 text-sm" data-id="szq0ta6oy" data-path="pages/BlogPost.js">Travel Writer & Photographer</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm mb-4" data-id="yjm4vxoxw" data-path="pages/BlogPost.js">
                                    {post.authorBio}
                                </p>
                                <div className="flex gap-3" data-id="30sd1z8ek" data-path="pages/BlogPost.js">
                                    <a href="#" className="text-primary hover:text-primary/80 transition-colors" data-id="e2z3rhxrv" data-path="pages/BlogPost.js">
                                        <i className="fab fa-twitter" data-id="lw0qnln4a" data-path="pages/BlogPost.js"></i>
                                    </a>
                                    <a href="#" className="text-primary hover:text-primary/80 transition-colors" data-id="k60bbd8un" data-path="pages/BlogPost.js">
                                        <i className="fab fa-instagram" data-id="eo31m3586" data-path="pages/BlogPost.js"></i>
                                    </a>
                                    <a href="#" className="text-primary hover:text-primary/80 transition-colors" data-id="vecfpa0w0" data-path="pages/BlogPost.js">
                                        <i className="fab fa-linkedin-in" data-id="k7xtw7em" data-path="pages/BlogPost.js"></i>
                                    </a>
                                </div>
                            </div>
                            
                            {/* Search */}
                            <div className="bg-light rounded-xl p-6 mb-8" data-id="ki1f5wvd4" data-path="pages/BlogPost.js">
                                <h3 className="text-xl font-bold mb-4" data-id="9h8whf1pi" data-path="pages/BlogPost.js">Search</h3>
                                <div className="relative" data-id="n9c7nmbzk" data-path="pages/BlogPost.js">
                                    <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-4 pr-10 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary" data-id="jj2jl05xx" data-path="pages/BlogPost.js" />

                                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors" data-id="9m1swyi3t" data-path="pages/BlogPost.js">
                                        <i className="fas fa-search" data-id="0zo6ascog" data-path="pages/BlogPost.js"></i>
                                    </button>
                                </div>
                            </div>
                            
                            {/* Categories */}
                            <div className="bg-light rounded-xl p-6 mb-8" data-id="5nhw5334s" data-path="pages/BlogPost.js">
                                <h3 className="text-xl font-bold mb-4" data-id="xyj0z7wf5" data-path="pages/BlogPost.js">Categories</h3>
                                <ul className="space-y-2" data-id="k7l61tcxd" data-path="pages/BlogPost.js">
                                    <li data-id="4q70iu8cr" data-path="pages/BlogPost.js">
                                        <a href="#" className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors py-2" data-id="px6zw6xie" data-path="pages/BlogPost.js">
                                            <span data-id="bp6vtq5xm" data-path="pages/BlogPost.js">Wildlife</span>
                                            <span className="bg-white px-2 py-1 rounded-full text-xs" data-id="j14myfzud" data-path="pages/BlogPost.js">24</span>
                                        </a>
                                    </li>
                                    <li data-id="k81c9ijwy" data-path="pages/BlogPost.js">
                                        <a href="#" className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors py-2" data-id="mplz98m8o" data-path="pages/BlogPost.js">
                                            <span data-id="sjfisy0k7" data-path="pages/BlogPost.js">Adventure</span>
                                            <span className="bg-white px-2 py-1 rounded-full text-xs" data-id="a2l78p4z4" data-path="pages/BlogPost.js">18</span>
                                        </a>
                                    </li>
                                    <li data-id="2749jvaat" data-path="pages/BlogPost.js">
                                        <a href="#" className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors py-2" data-id="x1fdy3cvo" data-path="pages/BlogPost.js">
                                            <span data-id="g9gip6xwr" data-path="pages/BlogPost.js">Culture</span>
                                            <span className="bg-white px-2 py-1 rounded-full text-xs" data-id="7k6fzimzr" data-path="pages/BlogPost.js">15</span>
                                        </a>
                                    </li>
                                    <li data-id="te0bft7lj" data-path="pages/BlogPost.js">
                                        <a href="#" className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors py-2" data-id="11wgz90li" data-path="pages/BlogPost.js">
                                            <span data-id="3c9ixzy1i" data-path="pages/BlogPost.js">Beaches</span>
                                            <span className="bg-white px-2 py-1 rounded-full text-xs" data-id="bg1yrhb61" data-path="pages/BlogPost.js">12</span>
                                        </a>
                                    </li>
                                    <li data-id="1iw4ap72r" data-path="pages/BlogPost.js">
                                        <a href="#" className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors py-2" data-id="3sq4b0s1l" data-path="pages/BlogPost.js">
                                            <span data-id="wi7d43yan" data-path="pages/BlogPost.js">Food</span>
                                            <span className="bg-white px-2 py-1 rounded-full text-xs" data-id="707l0vmif" data-path="pages/BlogPost.js">9</span>
                                        </a>
                                    </li>
                                    <li data-id="pg1127tq7" data-path="pages/BlogPost.js">
                                        <a href="#" className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors py-2" data-id="xf4n4nqf9" data-path="pages/BlogPost.js">
                                            <span data-id="ih2dpsgc2" data-path="pages/BlogPost.js">Tips</span>
                                            <span className="bg-white px-2 py-1 rounded-full text-xs" data-id="nfw7wgnbx" data-path="pages/BlogPost.js">32</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Related Posts */}
                            <div className="bg-light rounded-xl p-6 mb-8" data-id="q1xyjguiw" data-path="pages/BlogPost.js">
                                <h3 className="text-xl font-bold mb-4" data-id="393lz4j8c" data-path="pages/BlogPost.js">Related Posts</h3>
                                <div className="space-y-4" data-id="bigcf315p" data-path="pages/BlogPost.js">
                                    {post.relatedPosts.map((relatedPost) =>
                  <div key={relatedPost.id} className="flex gap-3" data-id="yazhjzjwn" data-path="pages/BlogPost.js">
                                            <div className="w-20 h-20 flex-shrink-0" data-id="otntwlq2s" data-path="pages/BlogPost.js">
                                                <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover rounded-lg" data-id="zd6568u01" data-path="pages/BlogPost.js" />

                                            </div>
                                            <div data-id="t6mfmnh88" data-path="pages/BlogPost.js">
                                                <span className="text-xs text-primary font-medium" data-id="07p6hv7sq" data-path="pages/BlogPost.js">
                                                    {relatedPost.category}
                                                </span>
                                                <h4 className="font-medium leading-tight" data-id="zf59k58w6" data-path="pages/BlogPost.js">
                                                    <Link
                          to={`/blog/${relatedPost.id}`}
                          className="hover:text-primary transition-colors">

                                                        {relatedPost.title}
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                  )}
                                </div>
                            </div>
                            
                            {/* Tags Cloud */}
                            <div className="bg-light rounded-xl p-6 mb-8" data-id="fg224fjjy" data-path="pages/BlogPost.js">
                                <h3 className="text-xl font-bold mb-4" data-id="ft4ga8c1o" data-path="pages/BlogPost.js">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2" data-id="r3dh3s5af" data-path="pages/BlogPost.js">
                                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors" data-id="hy3dkq2il" data-path="pages/BlogPost.js">Safari</a>
                                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors" data-id="zvlu87qf6" data-path="pages/BlogPost.js">Wildlife</a>
                                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors" data-id="tbbq2959d" data-path="pages/BlogPost.js">Morocco</a>
                                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors" data-id="tumeegy2c" data-path="pages/BlogPost.js">South Africa</a>
                                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors" data-id="34id2mz0i" data-path="pages/BlogPost.js">Beaches</a>
                                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors" data-id="fldvq7mb5" data-path="pages/BlogPost.js">Food</a>
                                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors" data-id="z4zzsc55r" data-path="pages/BlogPost.js">Travel Tips</a>
                                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors" data-id="f8pd94o8i" data-path="pages/BlogPost.js">Photography</a>
                                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors" data-id="5y7xa4tn8" data-path="pages/BlogPost.js">Culture</a>
                                    <a href="#" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors" data-id="wfeajjlh2" data-path="pages/BlogPost.js">Adventure</a>
                                </div>
                            </div>
                            
                            {/* Newsletter */}
                            <div className="bg-primary rounded-xl p-6 text-white" data-id="a01azfv3h" data-path="pages/BlogPost.js">
                                <h3 className="text-xl font-bold mb-3" data-id="t2rqdpm01" data-path="pages/BlogPost.js">Subscribe to Our Newsletter</h3>
                                <p className="mb-4 text-white/90" data-id="rmnc5zi6j" data-path="pages/BlogPost.js">
                                    Stay updated with our latest travel stories and guides.
                                </p>
                                <form className="space-y-3" data-id="d32e8muje" data-path="pages/BlogPost.js">
                                    <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" data-id="eygb9ftir" data-path="pages/BlogPost.js" />

                                    <button
                    type="submit"
                    className="w-full px-4 py-3 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-colors" data-id="c5g940446" data-path="pages/BlogPost.js">

                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* More Articles Section */}
            <section className="py-16 bg-light" data-id="ehheql9zs" data-path="pages/BlogPost.js">
                <div className="container mx-auto px-4" data-id="skuk3copp" data-path="pages/BlogPost.js">
                    <div className="text-center mb-12" data-id="c4yyxg5cv" data-path="pages/BlogPost.js">
                        <h2 className="text-3xl font-bold mb-4" data-id="kbhw9ddif" data-path="pages/BlogPost.js">You May Also Like</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto" data-id="fdiy1ekh3" data-path="pages/BlogPost.js">
                            Explore more travel guides and stories from across Africa.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="evwjgn65w" data-path="pages/BlogPost.js">
                        {post.relatedPosts.map((relatedPost) =>
            <div key={relatedPost.id} className="blog-card bg-white rounded-xl overflow-hidden shadow-md" data-id="abjey7s6i" data-path="pages/BlogPost.js">
                                <div className="relative h-56 overflow-hidden" data-id="2wy81ssa1" data-path="pages/BlogPost.js">
                                    <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" data-id="ox9ojqxy1" data-path="pages/BlogPost.js" />

                                    <div className="absolute top-4 left-4 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full" data-id="x4u99poux" data-path="pages/BlogPost.js">
                                        {relatedPost.category}
                                    </div>
                                </div>
                                <div className="p-6" data-id="id71994a4" data-path="pages/BlogPost.js">
                                    <h3 className="text-xl font-bold mb-4" data-id="k8tpxjrhx" data-path="pages/BlogPost.js">{relatedPost.title}</h3>
                                    <Link
                  to={`/blog/${relatedPost.id}`}
                  className="inline-block text-primary font-semibold hover:text-primary/80 transition-colors">

                                        Read more <i className="fas fa-arrow-right ml-1" data-id="vqjsphv7s" data-path="pages/BlogPost.js"></i>
                                    </Link>
                                </div>
                            </div>
            )}
                    </div>
                </div>
            </section>
        </div>);

}