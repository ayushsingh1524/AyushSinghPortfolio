import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectDetailClient } from "./ProjectDetailClient";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#f5efe6] min-h-screen text-[#4a3b32] selection:bg-[#d35400] selection:text-white font-sans">
      
      {/* ── TOP NAV ── */}
      <div className="absolute top-8 left-8 right-8 z-50 flex justify-between items-center text-white mix-blend-difference">
        <Link 
          href="/works"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity font-bold tracking-widest text-xs md:text-sm uppercase"
        >
          <ArrowLeft size={16} />
          Back to Works
        </Link>
        <Link href="/" className="flex items-center gap-4 hover:opacity-70 transition-opacity cursor-pointer">
          <h1 className="text-xl md:text-2xl font-black tracking-tighter uppercase">
            AYUSH
          </h1>
        </Link>
      </div>

      <ProjectDetailClient project={project} />

    </main>
  );
}
