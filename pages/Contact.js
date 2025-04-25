// Contact page component
function Contact() {
  const [formStatus, setFormStatus] = React.useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });

    // In a real application, you would send the form data to an API
    // Reset form
    e.target.reset();
  };

  return (
    <div data-id="hmussbkr8" data-path="pages/Contact.js">
            <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team for collaborations, questions, or just to say hello."
        backgroundImage="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" />

            
            <section className="py-16 bg-light" data-id="0bcam9kbv" data-path="pages/Contact.js">
                <div className="container mx-auto px-4" data-id="z5mlb321o" data-path="pages/Contact.js">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-id="o6f4dslza" data-path="pages/Contact.js">
                        {/* Contact Form */}
                        <div data-id="hr4h2a8qx" data-path="pages/Contact.js">
                            <h2 className="text-3xl font-bold mb-6" data-id="ipi859rp9" data-path="pages/Contact.js">Send Us a Message</h2>
                            <p className="text-gray-600 mb-8" data-id="ta4tw3dr4" data-path="pages/Contact.js">
                                Have a question about a destination, want to collaborate, or need help planning your African adventure? 
                                We'd love to hear from you!
                            </p>
                            
                            {formStatus.submitted &&
              <div className={`p-4 mb-6 rounded-lg ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`} data-id="hgz7tse13" data-path="pages/Contact.js">
                                    {formStatus.message}
                                </div>
              }
                            
                            <form onSubmit={handleSubmit} className="space-y-6" data-id="ywp17o7oy" data-path="pages/Contact.js">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="8ui4wu0um" data-path="pages/Contact.js">
                                    <div data-id="6k2fujs72" data-path="pages/Contact.js">
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2" data-id="di96uzpm7" data-path="pages/Contact.js">Your Name</label>
                                        <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" data-id="nt0333b07" data-path="pages/Contact.js" />

                                    </div>
                                    <div data-id="xemvr6ygz" data-path="pages/Contact.js">
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2" data-id="ebkmnj1ej" data-path="pages/Contact.js">Your Email</label>
                                        <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" data-id="av124seeh" data-path="pages/Contact.js" />

                                    </div>
                                </div>
                                
                                <div data-id="nrtqoq6ke" data-path="pages/Contact.js">
                                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2" data-id="0zijovmfq" data-path="pages/Contact.js">Subject</label>
                                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" data-id="3dsed4ani" data-path="pages/Contact.js" />

                                </div>
                                
                                <div data-id="k2o2nqc83" data-path="pages/Contact.js">
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2" data-id="n68qvjd71" data-path="pages/Contact.js">Message</label>
                                    <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" data-id="qgv8cmvqy" data-path="pages/Contact.js">
                  </textarea>
                                </div>
                                
                                <div className="flex items-center" data-id="akayrmtmq" data-path="pages/Contact.js">
                                    <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mr-2" data-id="ky8gd4elc" data-path="pages/Contact.js" />

                                    <label htmlFor="privacy" className="text-gray-600 text-sm" data-id="1u8uljaym" data-path="pages/Contact.js">
                                        I agree to the <a href="#" className="text-primary hover:underline" data-id="4gm19xy3q" data-path="pages/Contact.js">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                                    </label>
                                </div>
                                
                                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors" data-id="odv2qwp3p" data-path="pages/Contact.js">

                                    Send Message
                                </button>
                            </form>
                        </div>
                        
                        {/* Contact Information */}
                        <div data-id="zyzsl8t1r" data-path="pages/Contact.js">
                            <h2 className="text-3xl font-bold mb-6" data-id="5x6jb2z7z" data-path="pages/Contact.js">Contact Information</h2>
                            <p className="text-gray-600 mb-8" data-id="3hbfc8w7v" data-path="pages/Contact.js">
                                We're based in Cape Town, South Africa, but our team works remotely across the African continent. 
                                Here's how you can reach us:
                            </p>
                            
                            <div className="space-y-6" data-id="dmpk5d199" data-path="pages/Contact.js">
                                <div className="flex items-start" data-id="t2p0q5u21" data-path="pages/Contact.js">
                                    <div className="bg-white p-3 rounded-full shadow-sm mr-4" data-id="nl3757mgj" data-path="pages/Contact.js">
                                        <i className="fas fa-envelope text-primary" data-id="yg0swcy2e" data-path="pages/Contact.js"></i>
                                    </div>
                                    <div data-id="2lsfy3d3u" data-path="pages/Contact.js">
                                        <h3 className="font-semibold text-lg" data-id="ejq3uets5" data-path="pages/Contact.js">Email Us</h3>
                                        <p className="text-gray-600" data-id="p6zj4gojo" data-path="pages/Contact.js">hello@africanvista.com</p>
                                        <p className="text-gray-600" data-id="61t5s11rb" data-path="pages/Contact.js">partnerships@africanvista.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start" data-id="ncuvjy6i6" data-path="pages/Contact.js">
                                    <div className="bg-white p-3 rounded-full shadow-sm mr-4" data-id="mu6610m1y" data-path="pages/Contact.js">
                                        <i className="fas fa-phone text-primary" data-id="qta9bw801" data-path="pages/Contact.js"></i>
                                    </div>
                                    <div data-id="enmmxw13a" data-path="pages/Contact.js">
                                        <h3 className="font-semibold text-lg" data-id="0dkv7rcx7" data-path="pages/Contact.js">Call Us</h3>
                                        <p className="text-gray-600" data-id="d4swybu9s" data-path="pages/Contact.js">+27 21 123 4567</p>
                                        <p className="text-gray-600" data-id="uk4n70lem" data-path="pages/Contact.js">Monday to Friday, 9am - 5pm SAST</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start" data-id="tcmuz9ftw" data-path="pages/Contact.js">
                                    <div className="bg-white p-3 rounded-full shadow-sm mr-4" data-id="bd3enktl8" data-path="pages/Contact.js">
                                        <i className="fas fa-map-marker-alt text-primary" data-id="1run1jsvt" data-path="pages/Contact.js"></i>
                                    </div>
                                    <div data-id="udwcop6st" data-path="pages/Contact.js">
                                        <h3 className="font-semibold text-lg" data-id="rrgwytv5k" data-path="pages/Contact.js">Office Location</h3>
                                        <p className="text-gray-600" data-id="yyibksvju" data-path="pages/Contact.js">123 Bree Street</p>
                                        <p className="text-gray-600" data-id="c40t13m7v" data-path="pages/Contact.js">Cape Town, 8001</p>
                                        <p className="text-gray-600" data-id="755875i2z" data-path="pages/Contact.js">South Africa</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start" data-id="kxg5q3z4q" data-path="pages/Contact.js">
                                    <div className="bg-white p-3 rounded-full shadow-sm mr-4" data-id="oefp8sdy7" data-path="pages/Contact.js">
                                        <i className="fas fa-share-alt text-primary" data-id="03h6xffdw" data-path="pages/Contact.js"></i>
                                    </div>
                                    <div data-id="6f4aqfj7e" data-path="pages/Contact.js">
                                        <h3 className="font-semibold text-lg" data-id="ixrt3lx3x" data-path="pages/Contact.js">Follow Us</h3>
                                        <div className="flex space-x-4 mt-2" data-id="4ei6mrevd" data-path="pages/Contact.js">
                                            <a href="#" className="text-gray-600 hover:text-primary transition-colors" data-id="8kpezrrwl" data-path="pages/Contact.js">
                                                <i className="fab fa-facebook-f text-xl" data-id="e23t5ac26" data-path="pages/Contact.js"></i>
                                            </a>
                                            <a href="#" className="text-gray-600 hover:text-primary transition-colors" data-id="0ge2figo7" data-path="pages/Contact.js">
                                                <i className="fab fa-twitter text-xl" data-id="y9jjtiv6l" data-path="pages/Contact.js"></i>
                                            </a>
                                            <a href="#" className="text-gray-600 hover:text-primary transition-colors" data-id="8qeujowdy" data-path="pages/Contact.js">
                                                <i className="fab fa-instagram text-xl" data-id="je34o0a1w" data-path="pages/Contact.js"></i>
                                            </a>
                                            <a href="#" className="text-gray-600 hover:text-primary transition-colors" data-id="6zlxothnu" data-path="pages/Contact.js">
                                                <i className="fab fa-pinterest text-xl" data-id="8r2216pv1" data-path="pages/Contact.js"></i>
                                            </a>
                                            <a href="#" className="text-gray-600 hover:text-primary transition-colors" data-id="ddr3us2ob" data-path="pages/Contact.js">
                                                <i className="fab fa-youtube text-xl" data-id="pprkzjkpf" data-path="pages/Contact.js"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Map (Placeholder) */}
                            <div className="mt-8 bg-gray-200 rounded-lg overflow-hidden h-72" data-id="8o6v3qma3" data-path="pages/Contact.js">
                                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.7177203388535!2d18.417692700000003!3d-33.92258899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc676e2a5c5885%3A0x730828940fcf9bd3!2sBree%20Street%2C%20Cape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1653674404017!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" data-id="d8oi572ys" data-path="pages/Contact.js">
                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 bg-white" data-id="ya6y61d5e" data-path="pages/Contact.js">
                <div className="container mx-auto px-4" data-id="ua5qm295v" data-path="pages/Contact.js">
                    <div className="text-center mb-12" data-id="4wu136sgd" data-path="pages/Contact.js">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="z3oa5p9w6" data-path="pages/Contact.js">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto" data-id="bc6jk5wfa" data-path="pages/Contact.js">
                            Have questions about our blog, collaborations, or African travel? Find answers to commonly asked questions below.
                        </p>
                    </div>
                    
                    <div className="max-w-3xl mx-auto space-y-6" data-id="rlnic3yoi" data-path="pages/Contact.js">
                        <div className="bg-light rounded-lg p-6" data-id="htl6t7ini" data-path="pages/Contact.js">
                            <h3 className="text-xl font-bold mb-3" data-id="gvrncdwf3" data-path="pages/Contact.js">Can I contribute a guest post to your blog?</h3>
                            <p className="text-gray-600" data-id="0fxnp37uc" data-path="pages/Contact.js">
                                Yes! We welcome submissions from travelers, writers, and photographers who have experienced Africa firsthand. 
                                Please use our contact form to send a brief outline of your proposed article along with some information about 
                                yourself and samples of your previous work.
                            </p>
                        </div>
                        
                        <div className="bg-light rounded-lg p-6" data-id="jfyaq99xx" data-path="pages/Contact.js">
                            <h3 className="text-xl font-bold mb-3" data-id="hqbw248qr" data-path="pages/Contact.js">Do you offer travel planning services?</h3>
                            <p className="text-gray-600" data-id="74i2hp4gu" data-path="pages/Contact.js">
                                While we don't directly book travel, we do offer personalized travel consultation services to help you 
                                plan your perfect African adventure. We can provide destination recommendations, itinerary suggestions, 
                                and connect you with reputable local operators. Contact us for details.
                            </p>
                        </div>
                        
                        <div className="bg-light rounded-lg p-6" data-id="tydktbs3v" data-path="pages/Contact.js">
                            <h3 className="text-xl font-bold mb-3" data-id="njmwnxf6t" data-path="pages/Contact.js">I'm a travel business in Africa. Can we partner together?</h3>
                            <p className="text-gray-600" data-id="vxsdlayc4" data-path="pages/Contact.js">
                                Absolutely! We collaborate with hotels, tour operators, and travel businesses that align with our values 
                                of sustainable and authentic travel experiences. Please email us at partnerships@africanvista.com with 
                                details about your business and proposed collaboration.
                            </p>
                        </div>
                        
                        <div className="bg-light rounded-lg p-6" data-id="swilns5uh" data-path="pages/Contact.js">
                            <h3 className="text-xl font-bold mb-3" data-id="rx79429ry" data-path="pages/Contact.js">How can I use your photography or content?</h3>
                            <p className="text-gray-600" data-id="bpaywgzgz" data-path="pages/Contact.js">
                                All content on our site is protected by copyright. If you'd like to use our photos or articles for 
                                commercial purposes, please contact us for licensing information. For personal use or social media 
                                sharing, we ask that you provide proper attribution with a link back to our site.
                            </p>
                        </div>
                        
                        <div className="bg-light rounded-lg p-6" data-id="yyht9gnbh" data-path="pages/Contact.js">
                            <h3 className="text-xl font-bold mb-3" data-id="am6otsg8t" data-path="pages/Contact.js">I have a specific question about a destination. Can you help?</h3>
                            <p className="text-gray-600" data-id="qaluotifv" data-path="pages/Contact.js">
                                We're happy to help with specific travel questions! Send us your query through our contact form, 
                                and we'll do our best to provide information based on our experiences or connect you with relevant resources.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 bg-primary text-white" data-id="4v50kk3mk" data-path="pages/Contact.js">
                <div className="container mx-auto px-4 text-center" data-id="2vmose6ka" data-path="pages/Contact.js">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" data-id="e3wxhxevd" data-path="pages/Contact.js">Join Our Community</h2>
                    <p className="text-white/90 max-w-2xl mx-auto mb-8" data-id="y75s4hrxu" data-path="pages/Contact.js">
                        Subscribe to our newsletter for exclusive travel guides, destination insights, and special offers.
                    </p>
                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" data-id="lpb7h3x9e" data-path="pages/Contact.js">
                        <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-full focus:outline-none" data-id="kcqnnuxse" data-path="pages/Contact.js" />

                        <button
              type="submit"
              className="bg-accent text-dark px-6 py-3 rounded-full hover:bg-accent/90 transition-colors font-medium" data-id="3842jpslp" data-path="pages/Contact.js">

                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>);

}