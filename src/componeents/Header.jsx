import { Link } from "react-router-dom"
import { ShoppingCart, Search, User } from "lucide-react"
import BigLogo from "../asset/logo.png"
export default function Header({ cartCount }) {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <img className="w-[100px] md:w-[150px] aspect-video object-cover" src={BigLogo} alt="" />
          </Link>

          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-sm font-medium hover:underline">
              Shop +
            </Link>
            <Link to="/all-products" className="text-sm font-medium hover:underline">
              ALL PRODUCTS
            </Link>
            <a href="#" className="text-sm font-medium hover:underline">
              COLLECTIONS
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              LOOK BOOK
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              ABOUT
            </a>
          </nav>

          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-gray-100 rounded">
              <User size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Search size={20} />
            </button>
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
