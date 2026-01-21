import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { allHooks, getHookById } from "@/lib/data/hooks-list";
import { UseStateDemos } from "./demos/UseStateDemos";

interface HookPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allHooks.map((hook) => ({
    slug: hook.id,
  }));
}

export default async function HookPage({ params }: HookPageProps) {
  const { slug } = await params;
  const hook = getHookById(slug);

  if (!hook) {
    notFound();
  }

  const statusVariant = {
    planned: "default" as const,
    "in-progress": "warning" as const,
    done: "success" as const,
  };

  const difficultyVariant = {
    beginner: "success" as const,
    intermediate: "warning" as const,
    advanced: "danger" as const,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all hooks
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <h1 className="font-mono text-3xl font-bold text-gray-900 dark:text-white">
              {hook.name}
            </h1>
            <Badge variant={statusVariant[hook.status]}>{hook.status}</Badge>
            <Badge variant={difficultyVariant[hook.difficulty]}>
              {hook.difficulty}
            </Badge>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {hook.description}
          </p>
        </div>

        {/* Demos Section */}
        <DemosSection slug={slug} />
      </div>
    </div>
  );
}

function DemosSection({ slug }: { slug: string }) {
  // Render demos based on hook slug
  switch (slug) {
    case "use-state":
      return <UseStateDemos />;
    default:
      return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <p className="text-gray-500 dark:text-gray-400">
            Demos coming soon...
          </p>
        </div>
      );
  }
}
