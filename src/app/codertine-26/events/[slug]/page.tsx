import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CODERTINE_MODULES, getCodertineModuleBySlug } from "@/data/codertine-2026";
import EventDetailView from "@/components/sections/codertine-2026/EventDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CODERTINE_MODULES.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getCodertineModuleBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found | CoderTine 7.0",
    };
  }

  return {
    title: `${event.title} | CoderTine 7.0`,
    description: event.subtitle,
    openGraph: {
      title: `${event.title} — CoderTine 7.0`,
      description: `${event.day}, ${event.date} · ${event.time} · ${event.venue}. ${event.tagline}`,
    },
  };
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getCodertineModuleBySlug(slug);

  if (!event) {
    notFound();
  }

  return <EventDetailView event={event} initialTab="overview" />;
}
