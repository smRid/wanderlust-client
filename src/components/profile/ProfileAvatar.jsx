import Image from "next/image";
import { getProfileImage } from "@/lib/local-images";

const ProfileAvatar = ({ user }) => {
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";

  const displayImage = user?.image || getProfileImage(user);
  const isRemoteImage =
    typeof displayImage === "string" && /^https?:\/\//.test(displayImage);

  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 group">
      <div className="relative w-full h-full rounded-2xl ring-4 ring-surface overflow-hidden shadow-xl">
        {displayImage ? (
          <Image
            src={displayImage}
            alt={user?.name ?? "Profile"}
            fill
            sizes="(max-width: 640px) 96px, 112px"
            quality={100}
            unoptimized={isRemoteImage}
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-accent to-secondary flex items-center justify-center">
            <span className="text-3xl sm:text-4xl font-bold font-heading text-surface">
              {initials}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileAvatar;
