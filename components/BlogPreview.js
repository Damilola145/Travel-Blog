// Blog preview component for displaying recent blog posts on the home page
function BlogPreview() {
  const { Link } = ReactRouterDOM;

  // Sample blog posts data - these would normally come from an API or CMS
  const blogPosts = [
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
  }];


  return (
    <section className="py-16 bg-white" data-id="3a20ry1bb" data-path="components/BlogPreview.js">
            <div className="container mx-auto px-4" data-id="eunx8wsfb" data-path="components/BlogPreview.js">
                <div className="text-center mb-12" data-id="ncmoqq4ei" data-path="components/BlogPreview.js">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="q8t8jt789" data-path="components/BlogPreview.js">Latest From Our Blog</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto" data-id="djbpu2awb" data-path="components/BlogPreview.js">
                        Travel tips, destination guides, and stories from across the African continent.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="h12fv79qr" data-path="components/BlogPreview.js">
                    {blogPosts.map((post) =>
          <div key={post.id} className="blog-card bg-light rounded-xl overflow-hidden shadow-md" data-id="46t81s16n" data-path="components/BlogPreview.js">
                            <div className="relative h-56 overflow-hidden" data-id="n4lckppdj" data-path="components/BlogPreview.js">
                                <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" data-id="ijbqp10tt" data-path="components/BlogPreview.js" />

                                <div className="absolute top-4 left-4 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full" data-id="novcksvy5" data-path="components/BlogPreview.js">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6" data-id="42z3ha8a5" data-path="components/BlogPreview.js">
                                <div className="flex items-center mb-4" data-id="jht93xmm6" data-path="components/BlogPreview.js">
                                    <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-10 h-10 rounded-full mr-3" data-id="cr3jmy5st" data-path="components/BlogPreview.js" />

                                    <div data-id="3ra4i3ndm" data-path="components/BlogPreview.js">
                                        <p className="font-medium text-dark" data-id="7vtfcvmew" data-path="components/BlogPreview.js">{post.author}</p>
                                        <p className="text-sm text-gray-500" data-id="cgt9c5oh4" data-path="components/BlogPreview.js">{post.date}</p>
                                    </div>
                                    <div className="ml-auto text-sm text-gray-500" data-id="61qk4ruyz" data-path="components/BlogPreview.js">
                                        <i className="far fa-clock mr-1" data-id="owiek2uw7" data-path="components/BlogPreview.js"></i> {post.readTime}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2" data-id="q0cxwzjqc" data-path="components/BlogPreview.js">{post.title}</h3>
                                <p className="text-gray-600 mb-4" data-id="pd5443msj" data-path="components/BlogPreview.js">{post.excerpt}</p>
                                <Link
                to={`/blog/${post.id}`}
                className="inline-block text-primary font-semibold hover:text-primary/80 transition-colors">

                                    Read more <i className="fas fa-arrow-right ml-1" data-id="fmas7gf4a" data-path="components/BlogPreview.js"></i>
                                </Link>
                            </div>
                        </div>
          )}
                </div>
                
                <div className="text-center mt-12" data-id="n62qoxemv" data-path="components/BlogPreview.js">
                    <Link
            to="/blog"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">

                        View All Articles <i className="fas fa-arrow-right ml-2" data-id="1nvzagi3f" data-path="components/BlogPreview.js"></i>
                    </Link>
                </div>
            </div>
        </section>);

}