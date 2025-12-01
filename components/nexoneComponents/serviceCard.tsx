import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-900">
      <div className="relative h-48 w-full shrink-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-2 font-poppins text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        <p className="mb-4 font-poppins text-sm text-zinc-800 dark:text-zinc-800">
          {description}
        </p>
        <Button className="mt-auto w-full px-5 py-2 uppercase font-poppins font-semibold text-white text-sm bg-amber-600">
          View Tour Packages
        </Button>
      </div>
    </div>
  );
}