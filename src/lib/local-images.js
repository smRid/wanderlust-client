import heroBanner from "@/assets/Banner.png";
import ctaBanner from "@/assets/CTA.png";
import logo from "@/assets/Wanderlast.png";
import person1 from "@/assets/person1.png";
import person2 from "@/assets/person2.png";
import destination1 from "@/assets/destinations/image1.png";
import destination2 from "@/assets/destinations/image2.png";
import destination3 from "@/assets/destinations/image3.png";
import destination4 from "@/assets/destinations/image4.png";
import destination5 from "@/assets/destinations/image5.png";
import destination6 from "@/assets/destinations/image6.png";

export const localImages = {
  heroBanner,
  ctaBanner,
  logo,
  person1,
  person2,
  destinations: [
    destination1,
    destination2,
    destination3,
    destination4,
    destination5,
    destination6,
  ],
};

const hashString = (value = "") => {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
};

export const getDestinationImage = (destination = {}) => {
  const key =
    destination._id ??
    destination.destinationId ??
    destination.destinationName ??
    destination.name ??
    destination.country ??
    "";

  return localImages.destinations[hashString(String(key)) % localImages.destinations.length];
};

export const getProfileImage = (user = {}) => {
  return user?.name?.length % 2 === 0 ? localImages.person2 : localImages.person1;
};
