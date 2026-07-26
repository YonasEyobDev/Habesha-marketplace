import { Link } from "react-router-dom"
import { Search, Heart, ShoppingBag, User } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useAuth } from "@/context/AuthContext"
import { HashLink } from "react-router-hash-link"

export function Header() {
  const { cartCount } = useCart()
  const { user, logout } = useAuth()

  return (
    <header className="w-full border-b border-neutral-200">
      {/* Top utility bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-xs text-neutral-500 border-b border-neutral-100">
        <span>Call Us: +1 (000) 000-0000</span>
        <span>Free delivery on orders over $200</span>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Habesha.
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
  <Link to="/" className="hover:text-neutral-500">Home</Link>
  <Link to="/shop" className="hover:text-neutral-500">Shop</Link>
  <HashLink smooth to="/#collections" className="hover:text-neutral-500">Collections</HashLink>
  <HashLink smooth to="/#about" className="hover:text-neutral-500">About</HashLink>
  <HashLink smooth to="/#contact" className="hover:text-neutral-500">Contact</HashLink>
</nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search">
            <Search className="w-5 h-5" />
          </button>

          <button aria-label="Wishlist">
            <Heart className="w-5 h-5" />
          </button>

          {user ? (
            <button onClick={logout} className="text-sm hover:text-neutral-500">
              Hi, {user.name}
            </button>
          ) : (
            <Link to="/login" aria-label="Account">
              <User className="w-5 h-5" />
            </Link>
          )}

          <Link to="/cart" className="relative" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-neutral-900 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}