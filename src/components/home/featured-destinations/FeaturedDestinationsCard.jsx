import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getDestinationImage } from "@/lib/local-images";

const FeaturedDestinationsCard = ({ destination, visibleSlides }) => {
  const image = destination.image ?? getDestinationImage(destination);
  const price = destination.discountPrice ?? destination.price;

  return (
    <div
      className="shrink-0 px-3 sm:px-4 relative z-0 group/card"
      style={{ width: `${100 / visibleSlides}%` }}
    >
      <Link
        href={`/destinations/${destination._id}`}
        className="group block relative overflow-hidden rounded-3xl bg-surface shadow-[0_18px_50px_rgba(4,19,34,0.12)] ring-1 ring-border/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(4,19,34,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={image}
            alt={`${destination.destinationName}, ${destination.country}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/35 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-surface/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
            <div className="rounded-full bg-surface/95 px-3 py-2 shadow-lg backdrop-blur-md">
              <span className="text-xs font-bold font-body uppercase tracking-wide text-primary">
                {destination.category}
              </span>
            </div>

            <div className="flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-2 shadow-lg backdrop-blur-md">
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              <span className="text-xs font-bold text-surface font-body">
                {destination.rating}
              </span>
              <span className="hidden sm:inline text-xs text-surface/70 font-body">
                ({destination.reviewsCount})
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
            <div className="rounded-2xl border border-surface/20 bg-primary/55 p-4 backdrop-blur-xl">
              <div className="mb-2 flex items-center gap-2 text-surface/85">
                <MapPin className="w-4 h-4 shrink-0 text-accent-soft" />
                <span className="text-sm font-semibold font-body">
                {destination.city}, {destination.country}
              </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-surface font-heading mb-2 leading-tight transition-colors group-hover:text-accent-soft">
                {destination.destinationName}
              </h3>

              <p className="mb-4 line-clamp-2 min-h-10 text-sm leading-relaxed text-surface/82 font-body">
                {destination.description}
              </p>

              <div className="flex items-end justify-between gap-3 border-t border-surface/15 pt-4">
                <div>
                  <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-surface/70 font-body">
                    <Clock className="w-3.5 h-3.5 text-accent-soft" />
                    {destination.duration}
                  </div>
                  <div className="flex items-baseline gap-2">
                    {destination.discountPrice && (
                      <span className="text-sm text-surface/45 line-through font-body">
                        ${destination.price}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-accent-soft font-heading">
                      ${price}
                    </span>
                  </div>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary shadow-lg transition-all group-hover:scale-110 group-hover:bg-accent-soft">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedDestinationsCard;
