import { Link } from "react-router-dom";
import ProductCard from "@/componeents/ProductCard";
import { products } from "@/data/products";

export default function Home({ addToCart }) {
  const featuredProducts = products.slice(0, 12);

  return (
    <div>
      <section className="relative  h-[80vh] flex items-center justify-center mb-16 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            x5-video-player-type="h5"
            x5-video-orientation="portrait"
            x5-playsinline="true"
            disablePictureInPicture
            controls={false}
          >
            <source
              src="https://www.shutterstock.com/shutterstock/videos/1098864383/preview/stock-footage-silhouette-of-a-man-putting-on-his-jacket-in-dark-room-on-the-background-of-the-window-close-up.webm"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <video
            className="hidden md:block w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            x5-video-player-type="h5"
            x5-video-orientation="portrait"
            x5-playsinline="true"
            disablePictureInPicture
            controls={false}
          >
            <source
              src="https://www.shutterstock.com/shutterstock/videos/1112105367/preview/stock-footage-content-stylish-young-black-man-in-his-s-enjoys-dancing-while-listening-to-an-online-playlist.webm"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute inset-0 bg-black/40" />

        {/* Text content on top of videos */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Discover the collective
          </h1>
          <p className="text-gray-200">Premium streetwear and fashion</p>
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
          <Link
            to="/all-products"
            className="text-sm font-medium hover:underline"
          >
            View all →
          </Link>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="bg-gray-100  mb-16">
        <div className="   ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="md:h-[90vh] aspect-square bg-gray-300 flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/medium-shot-model-wearing-chain-necklace_23-2149439826.jpg"
                alt="Lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" md:h-[90vh] aspect-square bg-gray-300 flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/portrait-young-handsome-male_23-2148884391.jpg"
                alt="Lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
