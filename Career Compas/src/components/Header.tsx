import { Link } from "react-router-dom";

interface HeaderProps {
  username: string | null;
  photoUrl?: string;
}

const Header = ({ username, photoUrl }: HeaderProps) => {
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
        <div className="flex items-center space-x-2 text-gray-700">
          {username ? (
            photoUrl ? (
              <img
                src={photoUrl}
                alt="User avatar"
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold uppercase">
                {username.charAt(0)}
              </div>
            )
          ) : (
            <Link to="/signin" className="font-semibold hover:text-primary transition-colors">
              Login
            </Link>
          )}
          {username && <span className="font-semibold">{username}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
