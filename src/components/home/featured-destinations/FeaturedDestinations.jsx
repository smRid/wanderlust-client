import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import CarouselContainer from "./CarouselContainer";
import { getFeaturedDestinations } from "@/lib/data";
import { localImages } from "@/lib/local-images";

const BEST_CITY_DESTINATIONS = [
  {
    _id: "best-city-santorini",
    destinationName: "Santorini",
    city: "Oia",
    country: "Greece",
    category: "Island City",
    rating: 4.9,
    reviewsCount: 1280,
    price: 899,
    discountPrice: 749,
    duration: "5 days",
    featured: true,
    image: localImages.destinations[0],
    description: "Whitewashed lanes, blue-domed rooftops, and caldera sunsets.",
  },
  {
    _id: "best-city-kyoto",
    destinationName: "Kyoto",
    city: "Kyoto",
    country: "Japan",
    category: "Culture",
    rating: 4.9,
    reviewsCount: 2140,
    price: 1199,
    discountPrice: 999,
    duration: "6 days",
    featured: true,
    image: localImages.destinations[1],
    description: "Temple gardens, lantern-lit streets, and quiet tea houses.",
  },
  {
    _id: "best-city-paris",
    destinationName: "Paris",
    city: "Paris",
    country: "France",
    category: "Romance",
    rating: 4.8,
    reviewsCount: 3050,
    price: 1299,
    discountPrice: 1099,
    duration: "4 days",
    featured: true,
    image: localImages.destinations[2],
    description: "Iconic boulevards, riverside cafes, and timeless art.",
  },
  {
    _id: "best-city-tokyo",
    destinationName: "Tokyo",
    city: "Tokyo",
    country: "Japan",
    category: "Modern",
    rating: 4.8,
    reviewsCount: 2670,
    price: 1399,
    discountPrice: 1199,
    duration: "7 days",
    featured: true,
    image: localImages.destinations[3],
    description: "Neon nights, precise cuisine, and peaceful historic shrines.",
  },
  {
    _id: "best-city-bali",
    destinationName: "Ubud",
    city: "Bali",
    country: "Indonesia",
    category: "Nature",
    rating: 4.7,
    reviewsCount: 1860,
    price: 799,
    discountPrice: 649,
    duration: "5 days",
    featured: true,
    image: localImages.destinations[4],
    description: "Rice terraces, artisan villages, and tropical wellness stays.",
  },
  {
    _id: "best-city-dubai",
    destinationName: "Dubai",
    city: "Dubai",
    country: "UAE",
    category: "Luxury",
    rating: 4.8,
    reviewsCount: 1590,
    price: 1099,
    discountPrice: 899,
    duration: "4 days",
    featured: true,
    image: localImages.destinations[5],
    description: "Skyline views, desert drives, and refined coastal escapes.",
  },
];

const FeaturedDestinations = async () => {
  const featuredDestinations = await getFeaturedDestinations();
  const destinations =
    featuredDestinations.length > 0
      ? featuredDestinations
      : BEST_CITY_DESTINATIONS;

  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 xl:px-20 bg-[#eef7fa]"
      id="featured"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4 text-accent">
            <MapPin className="w-4 h-4" />
            <span className="text-xs font-bold font-body uppercase tracking-[0.2em]">
              Wonderful city picks
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-heading mb-3 sm:mb-4">
            Best Cities <span className="text-accent">For Travel</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-muted font-body">
            Discover handpicked city escapes with standout views, culture, food,
            and unforgettable places to stay.
          </p>
        </div>

        <Link
          href="/destinations"
          className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent text-primary font-semibold font-body rounded-xl hover:bg-accent-soft active:scale-95 transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 w-fit text-sm sm:text-base"
        >
          All Destinations
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Carousel Container */}
      <CarouselContainer featuredDestinations={destinations} />
    </section>
  );
};

export default FeaturedDestinations;
