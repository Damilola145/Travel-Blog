// Main App component that handles routing
function App() {
  const { BrowserRouter, Routes, Route } = ReactRouterDOM;

  return (
    <BrowserRouter>
            <div className="flex flex-col min-h-screen" data-id="3wgxh0sgy" data-path="App.js">
                <Header />
                <main className="flex-grow" data-id="63i2ovq1c" data-path="App.js">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/create" element={<CreateBlogPost />} />
                        <Route path="/blog/:id" element={<BlogPost />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
                <ChatBot />
            </div>
        </BrowserRouter>);

}