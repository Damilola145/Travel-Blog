// Header component with navigation
function Header() {
  const { Link, NavLink, useLocation } = ReactRouterDOM;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" data-id="c6ao5evb9" data-path="components/Header.js">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center" data-id="msqv2zg8n" data-path="components/Header.js">
                <Link to="/" className="flex items-center">
                    <span className="text-primary text-3xl font-bold font-['Playfair_Display']" data-id="hvbagip94" data-path="components/Header.js">
                        Roam<span className="text-secondary" data-id="aobn3e6s5" data-path="components/Header.js">Africa</span>
                    </span>
                </Link>
                
                {/* Mobile menu button */}
                <button
          onClick={toggleMenu}
          className="md:hidden text-dark focus:outline-none"
          aria-label="Toggle menu" data-id="tfzllfep2" data-path="components/Header.js">

                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} data-id="f7xbwtbei" data-path="components/Header.js"></i>
                </button>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8" data-id="c715qa8ct" data-path="components/Header.js">
                    <NavLink
            to="/"
            className={`navbar-link text-dark hover:text-primary ${location.pathname === '/' ? 'active' : ''}`}>

                        Home
                    </NavLink>
                    <NavLink
            to="/blog"
            className={`navbar-link text-dark hover:text-primary ${location.pathname.includes('/blog') ? 'active' : ''}`}>

                        Blog
                    </NavLink>
                    <NavLink
            to="/about"
            className={`navbar-link text-dark hover:text-primary ${location.pathname === '/about' ? 'active' : ''}`}>

                        About
                    </NavLink>
                    <NavLink
            to="/contact"
            className={`navbar-link text-dark hover:text-primary ${location.pathname === '/contact' ? 'active' : ''}`}>

                        Contact
                    </NavLink>
                    <a
            href="#"
            className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors" data-id="7se9vh71f" data-path="components/Header.js">

                        Subscribe
                    </a>
                </div>
            </nav>
            
            {/* Mobile Navigation */}
            <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg absolute w-full left-0 py-4 px-4 transition-all duration-300`} data-id="enwmgo2u0" data-path="components/Header.js">

                <div className="flex flex-col space-y-4" data-id="e4rvc3i5k" data-path="components/Header.js">
                    <NavLink
            to="/"
            className="text-dark hover:text-primary py-2"
            onClick={() => setIsMenuOpen(false)}>

                        Home
                    </NavLink>
                    <NavLink
            to="/blog"
            className="text-dark hover:text-primary py-2"
            onClick={() => setIsMenuOpen(false)}>

                        Blog
                    </NavLink>
                    <NavLink
            to="/about"
            className="text-dark hover:text-primary py-2"
            onClick={() => setIsMenuOpen(false)}>

                        About
                    </NavLink>
                    <NavLink
            to="/contact"
            className="text-dark hover:text-primary py-2"
            onClick={() => setIsMenuOpen(false)}>

                        Contact
                    </NavLink>
                    <a
            href="#"
            className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors text-center" data-id="0w76vij2q" data-path="components/Header.js">

                        Subscribe
                    </a>
                </div>
            </div>
        </header>);

}