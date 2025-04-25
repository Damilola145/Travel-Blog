// Create Blog Post page
function CreateBlogPost() {
  const { useState, useEffect } = React;
  const { useNavigate } = ReactRouterDOM;
  const navigate = useNavigate();

  // Form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('Wildlife');
  const [featuredImage, setFeaturedImage] = useState('');
  const [tags, setTags] = useState('');
  const [sections, setSections] = useState([{ title: '', content: '', image: '', caption: '' }]);
  const [isPreview, setIsPreview] = useState(false);
  const [previewPost, setPreviewPost] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Categories (same as in Blog.js)
  const categories = ['Wildlife', 'Culture', 'Food', 'Adventure', 'Beaches', 'Cities', 'Tips'];

  // Handle section changes
  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  // Add new section
  const addSection = () => {
    setSections([...sections, { title: '', content: '', image: '', caption: '' }]);
  };

  // Remove section
  const removeSection = (index) => {
    if (sections.length > 1) {
      const updatedSections = [...sections];
      updatedSections.splice(index, 1);
      setSections(updatedSections);
    } else {
      setErrorMessage('You must have at least one section.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  // Generate preview
  const generatePreview = () => {
    // Create tag array from comma-separated list
    const tagArray = tags.split(',').map((tag) => tag.trim()).filter((tag) => tag);

    // Get current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Create preview post object
    const post = {
      id: Date.now(), // temporary ID for preview
      title: title,
      heroImage: featuredImage || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: formattedDate,
      author: 'Your Name', // This would be the logged-in user
      authorImage: 'https://randomuser.me/api/portraits/men/1.jpg', // Placeholder
      authorBio: 'Travel enthusiast and blogger sharing experiences from around the world.',
      category: category,
      readTime: `${Math.max(5, Math.ceil(content.length / 1000))} min read`,
      tags: tagArray,
      introduction: excerpt,
      sections: sections.filter((section) => section.title && section.content),
      conclusion: content,
      relatedPosts: [] // These would be fetched from existing posts
    };

    setPreviewPost(post);
    setIsPreview(true);
  };

  // Publish post
  const publishPost = () => {
    // Validate required fields
    if (!title || !content || !excerpt || !featuredImage) {
      setErrorMessage('Please fill in all required fields: title, content, excerpt, and featured image.');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    // Get existing posts from localStorage or initialize empty array
    let existingPosts = [];
    try {
      const storedPosts = localStorage.getItem('blogPosts');
      if (storedPosts) {
        existingPosts = JSON.parse(storedPosts);
      }
    } catch (error) {
      console.error('Error retrieving posts:', error);
      existingPosts = [];
    }

    // Create tag array from comma-separated list
    const tagArray = tags.split(',').map((tag) => tag.trim()).filter((tag) => tag);

    // Get current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Create new post object
    const newPost = {
      id: Date.now(),
      title: title,
      excerpt: excerpt,
      image: featuredImage,
      heroImage: featuredImage,
      date: formattedDate,
      author: 'Your Name', // This would be the logged-in user
      authorImage: 'https://randomuser.me/api/portraits/men/1.jpg', // Placeholder
      authorBio: 'Travel enthusiast and blogger sharing experiences from around the world.',
      category: category,
      readTime: `${Math.max(5, Math.ceil(content.length / 1000))} min read`,
      tags: tagArray,
      introduction: excerpt,
      sections: sections.filter((section) => section.title && section.content),
      conclusion: content,
      relatedPosts: [] // These would be determined when viewing the post
    };

    // Add new post to existing posts
    const updatedPosts = [newPost, ...existingPosts];

    // Save to localStorage
    try {
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

      // Navigate to the blog page
      navigate('/blog');
    } catch (error) {
      console.error('Error saving post:', error);
      setErrorMessage('There was an error publishing your post. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  // Reset preview mode
  const resetPreview = () => {
    setIsPreview(false);
  };

  // Render post preview similar to BlogPost component
  const renderPreview = () => {
    if (!previewPost) return null;

    return (
      <div className="bg-white rounded-lg shadow-lg p-8" data-id="41ck9te58" data-path="pages/CreateBlogPost.js">
        <div className="mb-8" data-id="flb7l7qgt" data-path="pages/CreateBlogPost.js">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-id="bfn8xwfv5" data-path="pages/CreateBlogPost.js">{previewPost.title}</h1>
          <div className="flex items-center mb-4" data-id="6rcmiw7wq" data-path="pages/CreateBlogPost.js">
            <img
              src={previewPost.authorImage}
              alt={previewPost.author}
              className="w-12 h-12 rounded-full mr-4" data-id="2uo7yyo87" data-path="pages/CreateBlogPost.js" />

            <div data-id="ad7v12m9l" data-path="pages/CreateBlogPost.js">
              <p className="font-medium" data-id="c3xm8523f" data-path="pages/CreateBlogPost.js">{previewPost.author}</p>
              <p className="text-sm text-gray-500" data-id="n3eq1gqkj" data-path="pages/CreateBlogPost.js">{previewPost.date}</p>
            </div>
            <div className="ml-auto" data-id="ehorvsbi1" data-path="pages/CreateBlogPost.js">
              <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full" data-id="j5vyvyo14" data-path="pages/CreateBlogPost.js">
                {previewPost.category}
              </span>
            </div>
          </div>
        </div>
        
        {previewPost.heroImage &&
        <div className="mb-8" data-id="m31zuebkg" data-path="pages/CreateBlogPost.js">
            <img
            src={previewPost.heroImage}
            alt={previewPost.title}
            className="w-full h-auto rounded-lg" data-id="61ac9iz5x" data-path="pages/CreateBlogPost.js" />

          </div>
        }
        
        <div className="prose prose-lg max-w-none mb-12" data-id="crulcznhk" data-path="pages/CreateBlogPost.js">
          <p className="text-xl leading-relaxed text-gray-600" data-id="3coah3g7l" data-path="pages/CreateBlogPost.js">
            {previewPost.introduction}
          </p>
        </div>
        
        {previewPost.sections.map((section, index) =>
        <div key={index} className="mb-12" data-id="2d801mgbw" data-path="pages/CreateBlogPost.js">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" data-id="rszdilwbg" data-path="pages/CreateBlogPost.js">{section.title}</h2>
            <div className="prose prose-lg max-w-none mb-6" data-id="xp7w1jik9" data-path="pages/CreateBlogPost.js">
              {section.content.split('\n\n').map((paragraph, pIndex) =>
            <p key={pIndex} className="mb-4 text-gray-700 leading-relaxed" data-id="30dqh28i0" data-path="pages/CreateBlogPost.js">
                  {paragraph}
                </p>
            )}
            </div>
            {section.image &&
          <div className="my-8" data-id="w4qv9trum" data-path="pages/CreateBlogPost.js">
                <img
              src={section.image}
              alt={section.caption || section.title}
              className="w-full h-auto rounded-lg shadow-lg" data-id="i7g469w6u" data-path="pages/CreateBlogPost.js" />

                {section.caption &&
            <p className="mt-2 text-center text-sm text-gray-500 italic" data-id="w03wkoy3f" data-path="pages/CreateBlogPost.js">
                    {section.caption}
                  </p>
            }
              </div>
          }
          </div>
        )}
        
        <div className="prose prose-lg max-w-none mb-12" data-id="r4mu3min8" data-path="pages/CreateBlogPost.js">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" data-id="u2v0js4xx" data-path="pages/CreateBlogPost.js">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed" data-id="41fzhsow2" data-path="pages/CreateBlogPost.js">
            {previewPost.conclusion}
          </p>
        </div>
        
        {previewPost.tags.length > 0 &&
        <div className="mb-12" data-id="xttbrc6hq" data-path="pages/CreateBlogPost.js">
            <h3 className="text-lg font-semibold mb-3" data-id="inz54mbat" data-path="pages/CreateBlogPost.js">Tags</h3>
            <div className="flex flex-wrap gap-2" data-id="15g2vpfn4" data-path="pages/CreateBlogPost.js">
              {previewPost.tags.map((tag, index) =>
            <span
              key={index}
              className="bg-light px-3 py-1 rounded-full text-sm text-gray-700" data-id="0fpzw65gh" data-path="pages/CreateBlogPost.js">
                  {tag}
                </span>
            )}
            </div>
          </div>
        }
      </div>);

  };

  return (
    <div data-id="lsscgifi4" data-path="pages/CreateBlogPost.js">
      <div className="py-12 bg-light" data-id="iifjkasyu" data-path="pages/CreateBlogPost.js">
        <div className="container mx-auto px-4" data-id="3kaxqvy50" data-path="pages/CreateBlogPost.js">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center" data-id="vlz5wpcly" data-path="pages/CreateBlogPost.js">
            {isPreview ? 'Preview Your Blog Post' : 'Create a New Blog Post'}
          </h1>
          
          {errorMessage &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" data-id="yyxy8f1cg" data-path="pages/CreateBlogPost.js">
              <p data-id="1p5h7c5xi" data-path="pages/CreateBlogPost.js">{errorMessage}</p>
            </div>
          }
          
          {isPreview ?
          <div data-id="ccdgojltd" data-path="pages/CreateBlogPost.js">
              {renderPreview()}
              <div className="flex justify-center gap-4 mt-8" data-id="d2hdbmz7p" data-path="pages/CreateBlogPost.js">
                <button
                onClick={resetPreview}
                className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors" data-id="snfjtnp6w" data-path="pages/CreateBlogPost.js">
                  Back to Edit
                </button>
                <button
                onClick={publishPost}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors" data-id="hoozuv9k8" data-path="pages/CreateBlogPost.js">
                  Publish Post
                </button>
              </div>
            </div> :

          <div className="bg-white rounded-lg shadow-lg p-8" data-id="24xrluwei" data-path="pages/CreateBlogPost.js">
              <form className="space-y-6" data-id="wpky0wxqo" data-path="pages/CreateBlogPost.js">
                {/* Title */}
                <div data-id="5ue3hvcj6" data-path="pages/CreateBlogPost.js">
                  <label htmlFor="title" className="block text-gray-700 font-medium mb-2" data-id="c3n0i5mz6" data-path="pages/CreateBlogPost.js">
                    Post Title <span className="text-red-500" data-id="d9pjphuue" data-path="pages/CreateBlogPost.js">*</span>
                  </label>
                  <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a compelling title for your blog post"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                  required data-id="jzywwlc30" data-path="pages/CreateBlogPost.js" />

                </div>
                
                {/* Featured Image */}
                <div data-id="6w6mr58nm" data-path="pages/CreateBlogPost.js">
                  <label htmlFor="featuredImage" className="block text-gray-700 font-medium mb-2" data-id="bugp5opri" data-path="pages/CreateBlogPost.js">
                    Featured Image URL <span className="text-red-500" data-id="p6y42ti96" data-path="pages/CreateBlogPost.js">*</span>
                  </label>
                  <input
                  id="featuredImage"
                  type="text"
                  value={featuredImage}
                  onChange={(e) => setFeaturedImage(e.target.value)}
                  placeholder="Enter the URL for your featured image"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                  required data-id="9muv50839" data-path="pages/CreateBlogPost.js" />

                  <p className="text-sm text-gray-500 mt-1" data-id="7vnckuxf0" data-path="pages/CreateBlogPost.js">
                    We recommend using high-quality images from Unsplash or similar sites.
                  </p>
                </div>
                
                {/* Category */}
                <div data-id="kl87uzzho" data-path="pages/CreateBlogPost.js">
                  <label htmlFor="category" className="block text-gray-700 font-medium mb-2" data-id="ceru90mhj" data-path="pages/CreateBlogPost.js">
                    Category
                  </label>
                  <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" data-id="r2y447nl6" data-path="pages/CreateBlogPost.js">

                    {categories.map((cat) =>
                  <option key={cat} value={cat} data-id="2t5oknyb0" data-path="pages/CreateBlogPost.js">
                        {cat}
                      </option>
                  )}
                  </select>
                </div>
                
                {/* Excerpt */}
                <div data-id="66iv9i7ln" data-path="pages/CreateBlogPost.js">
                  <label htmlFor="excerpt" className="block text-gray-700 font-medium mb-2" data-id="rfuiymb0b" data-path="pages/CreateBlogPost.js">
                    Excerpt/Introduction <span className="text-red-500" data-id="3wk1g1hdg" data-path="pages/CreateBlogPost.js">*</span>
                  </label>
                  <textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Write a brief, engaging summary of your blog post"
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                  required data-id="8fsi1fj34" data-path="pages/CreateBlogPost.js">
                </textarea>
                </div>
                
                {/* Tags */}
                <div data-id="gon018rso" data-path="pages/CreateBlogPost.js">
                  <label htmlFor="tags" className="block text-gray-700 font-medium mb-2" data-id="bqafaji1u" data-path="pages/CreateBlogPost.js">
                    Tags (comma-separated)
                  </label>
                  <input
                  id="tags"
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="E.g., Safari, Wildlife, Tanzania, Travel Tips"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" data-id="5vm9xsdil" data-path="pages/CreateBlogPost.js" />

                </div>
                
                {/* Content Sections */}
                <div data-id="ddgcs9969" data-path="pages/CreateBlogPost.js">
                  <h3 className="text-xl font-semibold mb-4" data-id="ifr8to60n" data-path="pages/CreateBlogPost.js">Content Sections</h3>
                  <p className="text-gray-600 mb-4" data-id="2d6kh1uu3" data-path="pages/CreateBlogPost.js">
                    Break your post into sections with headings for better readability.
                  </p>
                  
                  {sections.map((section, index) =>
                <div key={index} className="mb-8 p-6 border rounded-lg" data-id="y8jaiapqs" data-path="pages/CreateBlogPost.js">
                      <div className="flex justify-between items-center mb-4" data-id="swl9p3kxa" data-path="pages/CreateBlogPost.js">
                        <h4 className="font-semibold" data-id="jyl2468sp" data-path="pages/CreateBlogPost.js">Section {index + 1}</h4>
                        <button
                      type="button"
                      onClick={() => removeSection(index)}
                      className="text-red-500 hover:text-red-700 transition-colors" data-id="d6bqk4mzm" data-path="pages/CreateBlogPost.js">

                          <i className="fas fa-trash" data-id="5jq3qj4oy" data-path="pages/CreateBlogPost.js"></i> Remove
                        </button>
                      </div>
                      
                      <div className="space-y-4" data-id="kgknnkwls" data-path="pages/CreateBlogPost.js">
                        <div data-id="etkgpfv5n" data-path="pages/CreateBlogPost.js">
                          <label className="block text-gray-700 font-medium mb-2" data-id="3wbwi41gq" data-path="pages/CreateBlogPost.js">
                            Section Title
                          </label>
                          <input
                        type="text"
                        value={section.title}
                        onChange={(e) => handleSectionChange(index, 'title', e.target.value)}
                        placeholder="E.g., Best Time to Visit"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" data-id="thponx1rc" data-path="pages/CreateBlogPost.js" />

                        </div>
                        
                        <div data-id="n243a7e0a" data-path="pages/CreateBlogPost.js">
                          <label className="block text-gray-700 font-medium mb-2" data-id="nxyfbbupk" data-path="pages/CreateBlogPost.js">
                            Section Content
                          </label>
                          <textarea
                        value={section.content}
                        onChange={(e) => handleSectionChange(index, 'content', e.target.value)}
                        placeholder="Write your section content here..."
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" data-id="ggd6diw1h" data-path="pages/CreateBlogPost.js">
                      </textarea>
                          <p className="text-sm text-gray-500 mt-1" data-id="bvxm8cya9" data-path="pages/CreateBlogPost.js">
                            Use double line breaks for paragraphs.
                          </p>
                        </div>
                        
                        <div data-id="mr5125raj" data-path="pages/CreateBlogPost.js">
                          <label className="block text-gray-700 font-medium mb-2" data-id="yq0z7b4yt" data-path="pages/CreateBlogPost.js">
                            Section Image URL (optional)
                          </label>
                          <input
                        type="text"
                        value={section.image}
                        onChange={(e) => handleSectionChange(index, 'image', e.target.value)}
                        placeholder="Enter image URL"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" data-id="a96m9ro82" data-path="pages/CreateBlogPost.js" />

                        </div>
                        
                        <div data-id="od3ghoow3" data-path="pages/CreateBlogPost.js">
                          <label className="block text-gray-700 font-medium mb-2" data-id="buf8nje5a" data-path="pages/CreateBlogPost.js">
                            Image Caption (optional)
                          </label>
                          <input
                        type="text"
                        value={section.caption}
                        onChange={(e) => handleSectionChange(index, 'caption', e.target.value)}
                        placeholder="Describe your image"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" data-id="pcm8gjgrh" data-path="pages/CreateBlogPost.js" />

                        </div>
                      </div>
                    </div>
                )}
                  
                  <button
                  type="button"
                  onClick={addSection}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors" data-id="jsrtrjz5c" data-path="pages/CreateBlogPost.js">

                    <i className="fas fa-plus mr-2" data-id="0pi5q89ut" data-path="pages/CreateBlogPost.js"></i> Add Another Section
                  </button>
                </div>
                
                {/* Conclusion */}
                <div data-id="30282uter" data-path="pages/CreateBlogPost.js">
                  <label htmlFor="content" className="block text-gray-700 font-medium mb-2" data-id="l75wfz5hv" data-path="pages/CreateBlogPost.js">
                    Conclusion <span className="text-red-500" data-id="kiro2iw13" data-path="pages/CreateBlogPost.js">*</span>
                  </label>
                  <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write a conclusion for your blog post"
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                  required data-id="snc3hhtc9" data-path="pages/CreateBlogPost.js">
                </textarea>
                </div>
                
                {/* Action Buttons */}
                <div className="flex justify-end gap-4" data-id="236mkbx6m" data-path="pages/CreateBlogPost.js">
                  <button
                  type="button"
                  onClick={() => navigate('/blog')}
                  className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors" data-id="tcwf49ivl" data-path="pages/CreateBlogPost.js">

                    Cancel
                  </button>
                  <button
                  type="button"
                  onClick={generatePreview}
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors" data-id="tqnj7r52q" data-path="pages/CreateBlogPost.js">

                    Preview Post
                  </button>
                </div>
              </form>
            </div>
          }
        </div>
      </div>
    </div>);

}