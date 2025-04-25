// Blog listing page
function Blog() {
  const { Link } = ReactRouterDOM;
  const { useState, useEffect } = React;
  const [activeCategory, setActiveCategory] = useState('All');
  const [allBlogPosts, setAllBlogPosts] = useState([]);

  // Sample categories
  const categories = [
  'All', 'Wildlife', 'Culture', 'Food', 'Adventure', 'Beaches', 'Cities', 'Tips'];

  // Fetch blog posts from localStorage and combine with sample data
  useEffect(() => {
    // Sample blog posts data
    const sampleBlogPosts = [
    {
      id: 1,
      title: "The Ultimate Safari Guide: Exploring Tanzania's Serengeti",
      excerpt: "Discover the best time to visit, where to stay, and how to experience the Great Migration in one of Africa's most iconic wildlife destinations.",
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "June 15, 2023",
      author: "Sarah Johnson",
      authorImage: "https://randomuser.me/api/portraits/women/12.jpg",
      category: "Wildlife",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Hidden Gems of Morocco: Beyond Marrakech",
      excerpt: "Venture beyond the tourist hotspots and discover the authentic side of Morocco through its lesser-known towns, mountain villages, and coastal retreats.",
      image: "https://images.unsplash.com/photo-1539020140153-e09256789880?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "May 28, 2023",
      author: "Mohammed Al-Farsi",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      category: "Culture",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Island Paradise: A Week in Zanzibar",
      excerpt: "White sand beaches, crystal clear waters, and a fascinating blend of cultures make this Tanzanian archipelago a must-visit destination.",
      image: "https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 10, 2023",
      author: "Emily Chen",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      category: "Beaches",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Culinary Journey Through Ethiopia",
      excerpt: "Explore the rich flavors and unique dining traditions of Ethiopian cuisine, from spicy wat to the sourdough injera bread that accompanies every meal.",
      image: "https://images.unsplash.com/photo-1566324102072-557dfcfb7a12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 22, 2023",
      author: "Daniel Kebede",
      authorImage: "https://randomuser.me/api/portraits/men/55.jpg",
      category: "Food",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Hiking the Atlas Mountains: A Complete Guide",
      excerpt: "Plan your perfect trekking adventure through Morocco's stunning mountain range, from day hikes to multi-day expeditions with local guides.",
      image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "February 17, 2023",
      author: "Rachel Torres",
      authorImage: "https://randomuser.me/api/portraits/women/22.jpg",
      category: "Adventure",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Cape Town: The Perfect 5-Day Itinerary",
      excerpt: "Make the most of your time in South Africa's most beautiful city with this carefully crafted itinerary covering all the must-see attractions.",
      image: "https://images.unsplash.com/photo-1576485375217-d6a95e34d077?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "January 30, 2023",
      author: "Michael Okafor",
      authorImage: "https://randomuser.me/api/portraits/men/67.jpg",
      category: "Cities",
      readTime: "10 min read"
    },
    {
      id: 7,
      title: "Packing Essentials for an African Safari",
      excerpt: "Don't know what to bring on your safari adventure? This comprehensive packing guide covers everything from clothing to camera gear.",
      image: "https://images.unsplash.com/photo-1516299983559-41f5253f2644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "December 12, 2022",
      author: "Lisa Williams",
      authorImage: "https://randomuser.me/api/portraits/women/33.jpg",
      category: "Tips",
      readTime: "6 min read"
    },
    {
      id: 8,
      title: "Cultural Etiquette: Respecting Local Traditions Across Africa",
      excerpt: "Learn about the diverse cultural norms and practices across different African countries to ensure respectful and meaningful travel experiences.",
      image: "https://images.unsplash.com/photo-1523243319451-54b60322f948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "November 5, 2022",
      author: "Thomas Ngabo",
      authorImage: "https://randomuser.me/api/portraits/men/42.jpg",
      category: "Culture",
      readTime: "8 min read"
    }];

    // Get user-created posts from localStorage
    let userPosts = [];
    try {
      const storedPosts = localStorage.getItem('blogPosts');
      if (storedPosts) {
        userPosts = JSON.parse(storedPosts);
      }
    } catch (error) {
      console.error('Error retrieving posts:', error);
    }

    // Combine user posts with sample posts
    setAllBlogPosts([...userPosts, ...sampleBlogPosts]);
  }, []);

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All' ?
  allBlogPosts :
  allBlogPosts.filter((post) => post.category === activeCategory);

  return (
    <div data-id="0m0t8lv6w" data-path="pages/Blog.js">
            <HeroSection
        title="Travel Blog"
        subtitle="Insights, guides, and stories from our adventures across Africa."
        backgroundImage="https://images.unsplash.com/photo-1516299983559-41f5253f2644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" />

            
            <section className="py-16 bg-light" data-id="s92zyub32" data-path="pages/Blog.js">
                <div className="container mx-auto px-4" data-id="rvd1g8wka" data-path="pages/Blog.js">
                    {/* Action buttons */}
                    <div className="mb-8 flex justify-end" data-id="w2nph290e" data-path="pages/Blog.js">
                        <Link
              to="/blog/create"
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors flex items-center">
                            <i className="fas fa-plus mr-2" data-id="yv3u11bcp" data-path="pages/Blog.js"></i> Create New Blog Post
                        </Link>
                    </div>
                    
                    {/* Category filters */}
                    <div className="mb-12 flex flex-wrap justify-center gap-3" data-id="tvtlqav7f" data-path="pages/Blog.js">
                        {categories.map((category) =>
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors ${
              activeCategory === category ?
              'bg-primary text-white' :
              'bg-white text-gray-600 hover:bg-gray-100'}`
              } data-id="mbx5f9456" data-path="pages/Blog.js">

                                {category}
                            </button>
            )}
                    </div>
                    
                    {/* Blog posts grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="qauzubck9" data-path="pages/Blog.js">
                        {filteredPosts.map((post) =>
            <div key={post.id} className="blog-card bg-white rounded-xl overflow-hidden shadow-md" data-id="hx93966mb" data-path="pages/Blog.js">
                                <div className="relative h-56 overflow-hidden" data-id="t79vhiszh" data-path="pages/Blog.js">
                                    <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" data-id="0kk8eb00m" data-path="pages/Blog.js" />

                                    <div className="absolute top-4 left-4 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full" data-id="03odxmk6z" data-path="pages/Blog.js">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6" data-id="sp2kfcnq7" data-path="pages/Blog.js">
                                    <div className="flex items-center mb-4" data-id="34ka3vqik" data-path="pages/Blog.js">
                                        <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-10 h-10 rounded-full mr-3" data-id="paybg5vjs" data-path="pages/Blog.js" />

                                        <div data-id="026j48zhi" data-path="pages/Blog.js">
                                            <p className="font-medium text-dark" data-id="4d1h33kal" data-path="pages/Blog.js">{post.author}</p>
                                            <p className="text-sm text-gray-500" data-id="k7z17mt7s" data-path="pages/Blog.js">{post.date}</p>
                                        </div>
                                        <div className="ml-auto text-sm text-gray-500" data-id="m7v0zoiiv" data-path="pages/Blog.js">
                                            <i className="far fa-clock mr-1" data-id="ly1axgm5c" data-path="pages/Blog.js"></i> {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2" data-id="tnaf1vlpr" data-path="pages/Blog.js">{post.title}</h3>
                                    <p className="text-gray-600 mb-4" data-id="agn2clq89" data-path="pages/Blog.js">{post.excerpt}</p>
                                    <Link
                  to={`/blog/${post.id}`}
                  className="inline-block text-primary font-semibold hover:text-primary/80 transition-colors">

                                        Read more <i className="fas fa-arrow-right ml-1" data-id="iytg494jo" data-path="pages/Blog.js"></i>
                                    </Link>
                                </div>
                            </div>
            )}
                    </div>
                    
                    {/* Empty state if no posts match the filter */}
                    {filteredPosts.length === 0 &&
          <div className="text-center py-16" data-id="vyxtsqye0" data-path="pages/Blog.js">
                            <div className="text-4xl mb-4" data-id="kkmnsjiqi" data-path="pages/Blog.js">🏝️</div>
                            <h3 className="text-xl font-bold mb-2" data-id="mxhot3kqt" data-path="pages/Blog.js">No posts found</h3>
                            <p className="text-gray-600" data-id="7l29ci2ex" data-path="pages/Blog.js">
                                We couldn't find any blog posts in this category. 
                                Please try another category or check back later.
                            </p>
                        </div>
          }
                    
                    {/* Pagination (simplified) */}
                    <div className="flex justify-center mt-12" data-id="c6p07alqe" data-path="pages/Blog.js">
                        <div className="flex space-x-2" data-id="lg25jdxd4" data-path="pages/Blog.js">
                            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100" data-id="gf4a01jg5" data-path="pages/Blog.js">
                                <i className="fas fa-chevron-left" data-id="qx2szruhw" data-path="pages/Blog.js"></i>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white" data-id="gk9txrqvm" data-path="pages/Blog.js">
                                1
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100" data-id="xgiqwv4b3" data-path="pages/Blog.js">
                                2
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100" data-id="y1ktjn5fc" data-path="pages/Blog.js">
                                3
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100" data-id="pdq6r6x2e" data-path="pages/Blog.js">
                                <i className="fas fa-chevron-right" data-id="wtak2ekuz" data-path="pages/Blog.js"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Newsletter section */}
            <section className="py-16 bg-white" data-id="gjbufvqvs" data-path="pages/Blog.js">
                <div className="container mx-auto px-4" data-id="mn4hqm6u4" data-path="pages/Blog.js">
                    <div className="bg-dark rounded-2xl overflow-hidden" data-id="ij7ky5s7x" data-path="pages/Blog.js">
                        <div className="grid grid-cols-1 md:grid-cols-2" data-id="5x8gwd10l" data-path="pages/Blog.js">
                            <div className="p-8 md:p-12 flex flex-col justify-center" data-id="3k5zhcwgy" data-path="pages/Blog.js">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-id="lk5a5yw42" data-path="pages/Blog.js">Subscribe to Our Newsletter</h2>
                                <p className="text-gray-300 mb-6" data-id="qk9ys7341" data-path="pages/Blog.js">
                                    Get notified about new travel guides, blog posts, and special offers directly to your inbox.
                                </p>
                                <form className="space-y-4" data-id="5kf4rf956" data-path="pages/Blog.js">
                                    <div className="flex flex-col md:flex-row gap-3" data-id="wz26uk3sa" data-path="pages/Blog.js">
                                        <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary" data-id="rthpwz7ht" data-path="pages/Blog.js" />

                                        <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors" data-id="vuso9juar" data-path="pages/Blog.js">
                                            Subscribe
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-400" data-id="42lmqjh63" data-path="pages/Blog.js">
                                        We respect your privacy. Unsubscribe at any time.
                                    </p>
                                </form>
                            </div>
                            <div className="relative h-64 md:h-auto overflow-hidden" data-id="a2umxnl1n" data-path="pages/Blog.js">
                                <img
                  src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="African landscape"
                  className="absolute inset-0 w-full h-full object-cover" data-id="1gke3nb0b" data-path="pages/Blog.js" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>);

}