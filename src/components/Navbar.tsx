
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Menu, X, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Use Us', path: '/why-use-us' },
    { name: 'Additions', path: '/additions' },
    { name: 'Kitchens', path: '/kitchens' },
    { name: 'Bathrooms', path: '/bathrooms' },
    { name: 'Floors', path: '/floors' },
    { name: 'Basements', path: '/basements' },
    { name: 'Careers', path: '/careers' },
    { name: 'Special Offer', path: '/coupon' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-6 w-6 text-reno-accent" />
            <span className="font-bold text-xl text-reno-800">1 Week Remodel</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "text-reno-700 hover:text-reno-accent transition-colors font-medium",
                route.path === '/coupon' && "flex items-center gap-1"
              )}
            >
              {route.path === '/coupon' && <Tag className="h-4 w-4 text-reno-accent-alt" />}
              {route.name}
            </Link>
          ))}
          <Link to="/quote">
            <Button className="bg-reno-accent hover:bg-reno-accent/90 text-white">Get Quote</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-[#1A1F2C] z-40 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "text-lg font-medium text-white hover:text-white/80 py-2",
                route.path === '/coupon' && "flex items-center gap-2"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {route.path === '/coupon' && <Tag className="h-4 w-4 text-reno-accent-alt" />}
              {route.name}
            </Link>
          ))}
          <Link to="/quote" onClick={() => setIsMenuOpen(false)}>
            <Button className="bg-white hover:bg-white/90 text-reno-accent w-full mt-4">
              Get Quote
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
