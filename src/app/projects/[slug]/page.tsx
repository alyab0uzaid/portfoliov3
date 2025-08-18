import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "globe":
      return <Icons.globe className="size-4" />;
    case "github":
      return <Icons.github className="size-4" />;
    default:
      return <Icons.globe className="size-4" />;
  }
};

export async function generateStaticParams() {
  return DATA.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = DATA.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // TypeScript now knows project exists and is not undefined
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="mx-auto w-full max-w-2xl">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
        
        <h1 className="text-3xl font-bold tracking-tighter mb-4">
          {project.title}
        </h1>
        
        <p className="text-muted-foreground mb-8">
          {project.dates}
        </p>

        {/* Video/Image section */}
        {project.video && (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg mb-8"
          />
        )}
        
        {/* @ts-ignore - TypeScript inference issue after null check */}
        {project.image && !project.video && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg mb-8"
          />
        )}

        {/* Basic content - you can customize this later */}
        <div className="prose dark:prose-invert max-w-none">
          <p>{project.description}</p>
          
          <h2>Technologies Used</h2>
          <div className="flex flex-wrap gap-2 not-prose">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.links && project.links.length > 0 && (
            <>
              <h2>Links</h2>
              <div className="flex gap-4 not-prose">
                {project.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                  >
                    {getIcon(link.icon)}
                    {link.type}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
} 