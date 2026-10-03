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
      title: "Guide Not Found | CoderTine 7.0",
    };
  }

  return {
    title: `${event.title} Guide & Syllabus | CoderTine 7.0`,
    description: event.guide.subtitle,
  };
}

export default async function EventGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const event = getCodertineModuleBySlug(slug);

  if (!event) {
    notFound();
  }

  return <EventDetailView event={event} initialTab="guide" />;
}
