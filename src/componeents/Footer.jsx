import { Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap  justify-between grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">JOIN THE COMMUNITY.</h3>
            <p className="text-sm text-gray-600 mb-4">You Will Receive All The Information Regarding The Next Drops.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 border border-gray-300 px-4 py-2 text-sm"
              />
              <button className="bg-black text-white px-6 py-2 text-sm font-medium hover:bg-gray-800">
                SUBSCRIBE →
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:bg-gray-100 rounded">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-gray-100 rounded">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-600">© 2025, SOUTIE.</p>
        </div>
      </div>
    </footer>
  )
}
