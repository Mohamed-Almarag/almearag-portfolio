import Image from "next/image";
import photo from "@/assets/mohamed-almearag.jpg";
import { Icon } from "@/components/ui/Icon";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
      <Image
        src={photo}
        alt={profile.name}
        placeholder="blur"
        loading="eager"
        sizes="(min-width: 640px) 208px, 144px"
        className="size-36 shrink-0 rounded-full border border-border object-cover sm:size-52"
      />
      <div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg text-muted">{profile.title}</p>
        <p className="mt-3 text-sm font-medium text-accent">
          {profile.stack.join(" | ")}
        </p>
        <p className="mt-4 flex items-center gap-1.5 text-sm text-muted">
          <Icon name="mapPin" className="size-4" />
          {profile.location}
        </p>
        <a
          href={profile.cv}
          download
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/85"
        >
          <Icon name="download" className="size-4" />
          Download CV
        </a>
      </div>
    </div>
  );
}
