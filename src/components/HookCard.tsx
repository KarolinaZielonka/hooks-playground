// Placeholder - will be implemented in Phase 2
import Link from "next/link";
import type { Hook } from "@/lib/types/hook";
import { Badge } from "./ui/Badge";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/Card";

interface HookCardProps {
  hook: Hook;
}

export function HookCard({ hook }: HookCardProps) {
  const statusVariant = {
    planned: "default" as const,
    "in-progress": "warning" as const,
    done: "success" as const,
  };

  return (
    <Link href={`/hooks/${hook.id}`}>
      <Card className="transition-shadow hover:shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{hook.name}</CardTitle>
            <Badge variant={statusVariant[hook.status]}>{hook.status}</Badge>
          </div>
          <CardDescription>{hook.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
