import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import ProfileModal from "./ProfileModal";
import { ChevronDown } from "lucide-react";

interface HeaderProps {
  user: {
    name: string;
    photoUrl?: string;
    // Add more user fields if needed
  } | null;
}

const Header = ({ user }: HeaderProps) => {
  const { logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Title and slogan */}
        <div>
          <h1 className="text-2xl font-bold text-primary">Career Compass</h1>
          <p className="text-xs text-muted-foreground">Especially for students of Jammu and Kashmir</p>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/dashboard" className="hover:text-primary transition-colors">Take Test</Link>
          <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
          <Link to="/colleges" className="hover:text-primary transition-colors">Colleges</Link>
        </nav>

        {/* User section */}
        <div className="relative inline-block text-left">
          {user ? (
            <>
              <button
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer shadow transition duration-200 focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                {user.photoUrl ? (
                  <img src={user.photoUrl} alt="User avatar" className="h-8 w-8 rounded-full object-cover" />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold uppercase">
                    {user.name.charAt(0)}
                  </div>
                )}
                <span className="font-semibold">{user.name}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>

              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-40 bg-white rounded shadow-md border z-50"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                      setShowProfileModal(true);
                      setDropdownOpen(false);
                    }}
                  >
                    Profile
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600"
                    onClick={() => {
                      logout();
                      setDropdownOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}

              {showProfileModal && (
                <ProfileModal
                  user={user}
                  onClose={() => setShowProfileModal(false)}
                  onSave={(updatedUser) => {
                    // Update user logic here, e.g., update context or make API call
                    setShowProfileModal(false);
                  }}
                />
              )}
            </>
          ) : (
            <Link to="/signin" className="font-semibold hover:text-primary transition-colors">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
