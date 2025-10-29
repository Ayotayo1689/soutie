import { Link } from "react-router-dom"
import ProductCard from "@/componeents/ProductCard"
import { products } from "@/data/products"

export default function Home({ addToCart }) {
  const featuredProducts = products.slice(0, 4)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 h-96 flex items-center justify-center mb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Discover the collective</h1>
          <p className="text-gray-600">Premium streetwear and fashion</p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-right mt-8">
          <Link to="/all-products" className="text-sm font-medium hover:underline">
            View all →
          </Link>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="bg-gray-100 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-300 flex items-center justify-center">
              <img src="/placeholder.svg?height=400&width=500" alt="Lifestyle" className="w-full h-full object-cover" />
            </div>
            <div className="h-96 bg-gray-300 flex items-center justify-center">
              <img src="/placeholder.svg?height=400&width=500" alt="Lifestyle" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
