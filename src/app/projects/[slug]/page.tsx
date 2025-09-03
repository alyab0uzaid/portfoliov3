import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
    <div className="prose dark:prose-invert prose-lg max-w-none">
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
        <div className="bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-600 p-8">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-neutral-600 pb-4">Component 1 – Roles & Permissions Management</h2>
        
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
            <Image
              src="/images/roles-before.png"
              alt="Before: Multiple role panels with flat lists and no responsiveness"
              width={800}
              height={600}
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
                          <Image
                src="/images/roles-after-desktop.png"
                alt="After: Sidebar navigation, grouped permissions, search, consistent toggles"
                width={800}
                height={600}
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
        </div>
      </section>

      {/* Component 2 - Retention Features Tab */}
      <section className="mb-16">
        <div className="bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-600 p-8">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-neutral-600 pb-4">Component 2 – Retention Features Tab</h2>
        
        {/* Problem Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">Problem</h3>
          <p className="mb-4">The original Retention → Features tab used cards to display retention settings. While visually simple, this design created several challenges:</p>
          
          <ul className="space-y-3">
            <li>
              <strong>Hard to scan:</strong> Users had to open and read each card individually to compare lists.
            </li>
            <li>
              <strong>Limited space:</strong> Important details like &ldquo;status&rdquo; or &ldquo;time left&rdquo; were either hidden or not visible without extra clicks.
            </li>
            <li>
              <strong>Not scalable:</strong> As more lists were added, the card layout became cluttered and inefficient for quick management.
            </li>
          </ul>

          {/* Before Screenshot */}
          <div className="my-8">
                          <Image
                src="/images/features-before.png"
                alt="Before: Retention lists shown in separate cards, difficult to compare at scale"
                width={800}
                height={600}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
              />
            <p className="text-sm text-center text-muted-foreground mt-2 italic">
              Before — Retention lists shown in separate cards, difficult to compare at scale
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Solution</h3>
          <p className="mb-4">I redesigned the Features tab to use a table-based layout instead of cards, optimizing it for quick scanning and bulk management:</p>
          
          <ul className="space-y-3">
            <li>
              <strong>Converted cards into a single sortable table view.</strong>
            </li>
            <li>
              <strong>Added clear columns</strong> for Date Created, Retention Duration, Time Left, Delete On, and Status.
            </li>
            <li>
              <strong>Applied color-coded status labels</strong> (Active, Expiring Soon, Expired) for quick recognition.
            </li>
            <li>
              <strong>Added filter controls</strong> (Retention Duration, Delete On, Status) for easier navigation in large datasets.
            </li>
            <li>
              <strong>Preserved consistency</strong> with AvidBeam&rsquo;s overall UI style while making the design scalable.
            </li>
          </ul>

          {/* After Screenshots */}
          <div className="grid gap-8 my-8">
            {/* Main Table View */}
            <div>
                              <Image
                  src="/images/features-after-table.png"
                  alt="After: Table view with sortable columns and color-coded statuses for quick scanning"
                  width={800}
                  height={600}
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
                />
              <p className="text-sm text-center text-muted-foreground mt-2 italic">
                After — Table view with sortable columns and color-coded statuses for quick scanning
              </p>
            </div>

            {/* Filter View */}
            <div>
                              <Image
                  src="/images/features-after-filters.png"
                  alt="After: Filters allow users to narrow down results for faster management"
                  width={800}
                  height={600}
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
                />
              <p className="text-sm text-center text-muted-foreground mt-2 italic">
                After — Filters allow users to narrow down results for faster management
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Implementation</h3>
          <p className="mb-4">I delivered this redesign in Figma with:</p>
          
          <ul className="space-y-3">
            <li>
              <strong>Interaction notes</strong> for sorting, filtering, and color states.
            </li>
            <li>
              <strong>Guidance on responsive table behavior</strong> for different breakpoints.
            </li>
            <li>
              <strong>Collaboration with developers</strong> to align on feasibility and data handling in real-time.
            </li>
          </ul>
        </div>

        {/* Impact Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Impact (In Progress)</h3>
          <p className="mb-4">Once implemented, this redesign is expected to:</p>
          
          <ul className="space-y-3">
            <li>
              <strong>Save time for admins</strong> by making retention lists scannable at a glance.
            </li>
            <li>
              <strong>Improve accuracy</strong> by surfacing expiring/expired items clearly with status labels.
            </li>
            <li>
              <strong>Scale better</strong> as more lists are added, avoiding the clutter of a card-based UI.
            </li>
          </ul>
        </div>
        </div>
      </section>

      {/* Component 3 - Disks Tab */}
      <section className="mb-16">
        <div className="bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-600 p-8">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-neutral-600 pb-4">Component 3 – Disks Tab</h2>
          
          {/* Problem Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">Problem</h3>
            <p className="mb-4">The original Disks tab presented information in a way that was functional but difficult to parse at a glance:</p>
            
            <ul className="space-y-3">
              <li>
                <strong>Crowded layout:</strong> Each disk card contained multiple text labels (used memory, total memory, mount path) without strong hierarchy.
              </li>
              <li>
                <strong>Threshold controls:</strong> Threshold percentage inputs and toggles were placed inconsistently, making them harder to use quickly.
              </li>
              <li>
                <strong>Limited readability:</strong> The design emphasized raw numbers rather than usage percentage, slowing down decision-making.
              </li>
              <li>
                <strong>Scalability issues:</strong> As more disks were added, the visual density became harder to manage.
              </li>
            </ul>

            {/* Before Screenshot */}
            <div className="my-8">
              <Image
                src="/images/disks-before.png"
                alt="Before: Disk usage shown with dense text blocks and inconsistent threshold controls"
                width={800}
                height={600}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
              />
              <p className="text-sm text-center text-muted-foreground mt-2 italic">
                Before — Disk usage shown with dense text blocks and inconsistent threshold controls
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Solution</h3>
            <p className="mb-4">I simplified the design and emphasized clarity for system admins:</p>
            
            <ul className="space-y-3">
              <li>
                <strong>Created a cleaner card layout</strong> with consistent formatting for each disk.
              </li>
              <li>
                <strong>Highlighted usage percentage and progress bars</strong> as the primary visual indicators.
              </li>
              <li>
                <strong>Standardized threshold controls</strong> across all disks for predictability.
              </li>
              <li>
                <strong>Added a Retain Data toggle</strong> directly in each card to streamline decision-making.
              </li>
              <li>
                <strong>Improved spacing and visual hierarchy,</strong> so the most critical information (usage % and status) stands out immediately.
              </li>
            </ul>

            {/* After Screenshot */}
            <div className="my-8">
              <Image
                src="/images/disks-after.png"
                alt="After: Cleaner disk cards with consistent threshold controls, usage emphasized as primary visual"
                width={800}
                height={600}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
              />
              <p className="text-sm text-center text-muted-foreground mt-2 italic">
                After — Cleaner disk cards with consistent threshold controls, usage emphasized as primary visual
              </p>
            </div>
          </div>

          {/* Implementation Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Implementation</h3>
            <p className="mb-4">I handed off the redesign with:</p>
            
            <ul className="space-y-3">
              <li>
                <strong>Updated Figma components</strong> for disk cards.
              </li>
              <li>
                <strong>Documentation on usage bar scaling,</strong> toggle states, and responsive behavior.
              </li>
              <li>
                <strong>Developer collaboration</strong> to ensure accurate reflection of live system values in the UI.
              </li>
            </ul>
          </div>

          {/* Impact Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Impact (In Progress)</h3>
            <p className="mb-4">When implemented, this redesign is expected to:</p>
            
            <ul className="space-y-3">
              <li>
                <strong>Reduce cognitive load</strong> by making usage % instantly visible.
              </li>
              <li>
                <strong>Improve usability</strong> through consistent control placement.
              </li>
              <li>
                <strong>Scale more effectively</strong> as multiple disks are added without overwhelming the interface.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Component 4 - Delete Data */}
      <section className="mb-16">
        <div className="bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-600 p-8">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-neutral-600 pb-4">Component 4 – Delete Data</h2>
          
          {/* Problem Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">Problem</h3>
            <p className="mb-4">The original Delete Data screen had several UX issues:</p>
            
            <ul className="space-y-3">
              <li>
                <strong>Unclear labeling:</strong> The purpose of the screen wasn&rsquo;t immediately obvious — &ldquo;9605 records&rdquo; was shown without context.
              </li>
              <li>
                <strong>Weak hierarchy:</strong> Critical actions like deleting records were placed next to less important elements, making them easy to miss.
              </li>
              <li>
                <strong>Low affordance:</strong> The delete action was represented by a small trash icon, which did not communicate the severity of the action.
              </li>
              <li>
                <strong>Crowded layout:</strong> Key elements (record count, refresh, date pickers, and delete action) lacked spacing and separation.
              </li>
            </ul>

            {/* Before Screenshot */}
            <div className="my-8">
              <Image
                src="/images/delete-before.png"
                alt="Before: Minimal context, unclear labeling, and low visibility of destructive action"
                width={800}
                height={600}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
              />
              <p className="text-sm text-center text-muted-foreground mt-2 italic">
                Before — Minimal context, unclear labeling, and low visibility of destructive action
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Solution</h3>
            <p className="mb-4">I redesigned the screen to make destructive actions clear, intentional, and safe:</p>
            
            <ul className="space-y-3">
              <li>
                <strong>Added a clear title (&ldquo;Delete Data&rdquo;)</strong> so users understand the screen&rsquo;s purpose.
              </li>
              <li>
                <strong>Changed the record count</strong> to a more readable format: &ldquo;9,605 records found&rdquo;.
              </li>
              <li>
                <strong>Introduced a dedicated red &ldquo;Delete Records&rdquo; button</strong> with clear labeling to signal destructive action.
              </li>
              <li>
                <strong>Reorganized layout:</strong> record count and refresh controls grouped together, date range inputs aligned consistently.
              </li>
              <li>
                <strong>Improved spacing and alignment</strong> to make the flow easier to follow.
              </li>
            </ul>

            {/* After Screenshot */}
            <div className="my-8">
              <Image
                src="/images/delete-after.png"
                alt="After: Clear title, readable record count, and dedicated red button for destructive action"
                width={800}
                height={600}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
              />
              <p className="text-sm text-center text-muted-foreground mt-2 italic">
                After — Clear title, readable record count, and dedicated red button for destructive action
              </p>
            </div>
          </div>

          {/* Implementation Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Implementation</h3>
            <p className="mb-4">I provided developers with:</p>
            
            <ul className="space-y-3">
              <li>
                <strong>Figma documentation</strong> outlining button states (default, hover, confirmation).
              </li>
              <li>
                <strong>Notes on confirmation flows</strong> to prevent accidental deletions.
              </li>
              <li>
                <strong>Layout spacing rules</strong> to maintain consistency with the rest of the AvidBeam UI.
              </li>
            </ul>
          </div>

          {/* Impact Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Impact (In Progress)</h3>
            <p className="mb-4">Once implemented, this redesign will:</p>
            
            <ul className="space-y-3">
              <li>
                <strong>Reduce user error</strong> by making the destructive action highly visible and intentional.
              </li>
              <li>
                <strong>Improve clarity</strong> with better labeling and hierarchy.
              </li>
              <li>
                <strong>Increase confidence</strong> by aligning the design with common UX conventions for data deletion.
              </li>
            </ul>
          </div>
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

// TrackMySci Case Study Component
const TrackMySciCaseStudy = () => {
  return (
    <div className="prose dark:prose-invert prose-lg max-w-none">
      {/* Project Overview */}
      <div className="mb-12">
        <p className="text-lg mb-6">
          TrackMySci is a literature tracking platform designed specifically for researchers and academics. 
          Think StoryGraph, but for scientific papers and research literature. I led the complete design and 
          frontend development process, from initial user research through final implementation.
        </p>
      </div>

      {/* Demo Video Section */}
      <section className="mb-16">
        <div className="bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-600 p-8">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-neutral-600 pb-4">Platform Walkthrough</h2>
          
          <div className="mb-8">
            <p className="mb-6">
              This demo video shows the core functionality of TrackMySci, walking through how researchers can 
              track, organize, and manage their scientific literature. The interface focuses on usability and 
              efficient workflow for academic research.
            </p>
            
            {/* YouTube Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/TqopIPtt6zs"
                title="TrackMySci Platform Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="mb-16">
        <div className="bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-600 p-8">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-neutral-600 pb-4">Key Features & Design Decisions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">User-Centered Design</h3>
              <ul className="space-y-2">
                <li><strong>Research-focused interface</strong> tailored for academic workflows</li>
                <li><strong>Intuitive organization</strong> of papers and research materials</li>
                <li><strong>Clean, distraction-free</strong> reading and tracking experience</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Technical Implementation</h3>
              <ul className="space-y-2">
                <li><strong>SvelteKit framework</strong> for optimal performance and developer experience</li>
                <li><strong>Responsive design</strong> for desktop and mobile access</li>
                <li><strong>Modern CSS</strong> for clean, professional aesthetics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="mb-16">
        <div className="bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-600 p-8">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-neutral-600 pb-4">Design Process</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">1. User Research</h3>
              <p>Conducted interviews with researchers and academics to understand their literature tracking pain points and workflow needs.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">2. Information Architecture</h3>
              <p>Designed the structure and navigation flow to support efficient research literature management and discovery.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">3. Prototyping & Testing</h3>
              <p>Created interactive prototypes in Figma and conducted usability testing with target users to refine the interface.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">4. Frontend Development</h3>
              <p>Implemented the final design using SvelteKit, ensuring responsive behavior and smooth user interactions.</p>
            </div>
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

  // Check if this is the AvidBeam or TrackMySci project for special case study treatment
  const isAvidBeam = project.slug === "avidbeam-redesign";
  const isTrackMySci = project.slug === "trackmysci";

  // TypeScript now knows project exists and is not undefined
  return (
    <div className="fixed inset-0 overflow-auto bg-background">
      <main className="flex flex-col min-h-[100dvh] space-y-10 py-12 sm:py-24">
        <div className="mx-auto w-full max-w-4xl px-6">
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
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="w-full rounded-lg mb-8"
          />
        )}

        {/* Render specialized case studies or basic content */}
        {isAvidBeam ? (
          <AvidBeamCaseStudy />
        ) : isTrackMySci ? (
          <TrackMySciCaseStudy />
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
    </div>
  );
} 