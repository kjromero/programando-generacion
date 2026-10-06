import { cn } from "@/lib/utils";
import type { Photo } from "@/content/generations";

interface PhotoImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  photo: Photo;
  /** Overrides the alt text stored alongside the photo. */
  alt?: string;
  priority?: boolean;
}

/**
 * Renders one of the program's real photographs, serving an optimized WebP
 * with the untouched original as a fallback.
 */
const PhotoImage = ({ photo, alt, priority = false, className, ...props }: PhotoImageProps) => (
  <picture>
    <source srcSet={photo.webp} type="image/webp" />
    <img
      src={photo.fallback}
      alt={alt ?? photo.alt}
      width={photo.width}
      height={photo.height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={cn("h-full w-full object-cover", className)}
      {...props}
    />
  </picture>
);

export default PhotoImage;
