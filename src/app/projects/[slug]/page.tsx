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

// AvidBeam Case Study Component
const AvidBeamCaseStudy = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {/* Project Overview */}
      <div className="mb-12">
        <p className="text-lg mb-6">
          During my internship at AvidBeam, I led the redesign of critical components in their AI video analytics platform. 
          This case study focuses on the comprehensive overhaul of the Roles & Permissions Management system, 
          which was essential for admin workflows but suffered from significant usability issues.
        </p>
      </div>

      {/* Component 1 - Roles & Permissions */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 border-b pb-2">Component 1 – Roles & Permissions Management</h2>
        
        {/* Problem Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">Problem</h3>
          <p className="mb-4">The original Roles & Permissions screen was difficult for admins to use:</p>
          
          <ul className="space-y-3">
            <li>
              <strong>Cluttered layout:</strong> Multiple role panels were displayed at once, overwhelming users with redundant information.
            </li>
            <li>
              <strong>No clear hierarchy:</strong> Permissions were listed in long, flat lists without logical grouping.
            </li>
            <li>
              <strong>Not responsive:</strong> The layout did not adapt for tablet or mobile, despite many admins needing access on the go.
            </li>
            <li>
              <strong>Poor scalability:</strong> Adding more roles or permissions would quickly make the interface unmanageable.
            </li>
          </ul>

          {/* Before Screenshot */}
          <div className="my-8">
            <img
              src="/images/roles-before.png"
              alt="Before: Multiple role panels with flat lists and no responsiveness"
              className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
            />
            <p className="text-sm text-center text-muted-foreground mt-2 italic">
              Before — Multiple role panels with flat lists and no responsiveness
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Solution</h3>
          <p className="mb-4">I redesigned the screen with an emphasis on clarity, hierarchy, and scalability:</p>
          
          <ul className="space-y-3">
            <li>
              <strong>Introduced a sidebar</strong> for switching between roles instead of showing all roles at once.
            </li>
            <li>
              <strong>Added search functionality</strong> for both roles and permissions.
            </li>
            <li>
              <strong>Grouped permissions</strong> into expandable categories to reduce visual noise.
            </li>
            <li>
              <strong>Applied a consistent toggle interaction</strong> across all permissions.
            </li>
            <li>
              <strong>Designed with responsiveness in mind</strong> to ensure the interface works across different screen sizes.
            </li>
          </ul>

          {/* After Screenshot */}
          <div className="my-8">
            <img
              src="/images/roles-after-desktop.png"
              alt="After: Sidebar navigation, grouped permissions, search, consistent toggles"
              className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
            />
            <p className="text-sm text-center text-muted-foreground mt-2 italic">
              After — Sidebar navigation, grouped permissions, search, consistent toggles
            </p>
          </div>
        </div>

        {/* Implementation Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Implementation</h3>
          <p className="mb-4">I worked with other interns and the dev team to begin implementing the redesign into the live app. My process included:</p>
          
          <ul className="space-y-3">
            <li>
              <strong>Delivering detailed Figma mockups</strong> with notes and documentation.
            </li>
            <li>
              <strong>Providing responsive breakpoints</strong> and interaction specs.
            </li>
            <li>
              <strong>Iterating based on technical feasibility</strong> and feedback from developers.
            </li>
          </ul>
        </div>

        {/* Impact Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Impact (In Progress)</h3>
          <p className="mb-4">While full rollout is ongoing, this redesign is expected to:</p>
          
          <ul className="space-y-3">
            <li>
              <strong>Simplify workflows</strong> by focusing the view on one role at a time.
            </li>
            <li>
              <strong>Scale effectively</strong> as more roles and permissions are added.
            </li>
            <li>
              <strong>Improve accessibility</strong> for admins working on tablets and mobile devices.
            </li>
          </ul>
        </div>
      </section>

      {/* Process & Learnings */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 border-b pb-2">Design Process & Key Learnings</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Design Process</h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li>User research and problem identification</li>
              <li>Competitive analysis and design patterns review</li>
              <li>Wireframing and information architecture</li>
              <li>High-fidelity mockups and prototyping</li>
              <li>Developer handoff and implementation support</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Key Learnings</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Importance of mobile-first design for admin tools</li>
              <li>Value of progressive disclosure in complex interfaces</li>
              <li>Need for consistent interaction patterns</li>
              <li>Collaboration between design and development teams</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
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

  // Check if this is the AvidBeam project for special case study treatment
  const isAvidBeam = project.slug === "avidbeam-redesign";

  // TypeScript now knows project exists and is not undefined
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="mx-auto w-full max-w-12xl px-4">
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

        {/* Render AvidBeam case study or basic content */}
        {isAvidBeam ? (
          <AvidBeamCaseStudy />
        ) : (
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
        )}
      </div>
    </main>
  );
} 