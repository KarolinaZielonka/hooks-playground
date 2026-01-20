import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { allHooks, getHookById } from "@/lib/data/hooks-list";

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
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <h1 className="text-3xl font-bold">{hook.name}</h1>
          <Badge variant={statusVariant[hook.status]}>{hook.status}</Badge>
          <Badge variant={difficultyVariant[hook.difficulty]}>
            {hook.difficulty}
          </Badge>
        </div>
        <p className="text-lg text-gray-600">{hook.description}</p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <p className="text-gray-500">Demo and implementation coming soon...</p>
      </div>
    </div>
  );
}
