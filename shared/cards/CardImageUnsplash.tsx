import { unsplashImageInterface } from "@/interfaces/unsplashImageInterface";
import Image from "next/image";

interface Props {
  image: unsplashImageInterface;
}

export function CardImageUnsplash({ image }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-neutral-900 shadow-md hover:shadow-xl transition-shadow">
      <Image
        src={image.urls.small}
        alt={image.alt_description ?? "Unsplash image"}
        width={400}
        height={400}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        unoptimized
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-sm font-semibold truncate">{image.user.name}</p>

        <div className="flex items-center justify-between text-xs text-neutral-300">
          <span>@{image.user.username}</span>
          <span>❤️ {image.likes}</span>
        </div>
      </div>
    </div>
  );
}
