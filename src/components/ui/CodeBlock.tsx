"use client";

// Placeholder - will be implemented in Phase 1
export function CodeBlock({
  code,
  _language = "tsx",
}: {
  code: string;
  language?: string;
}) {
  return (
    <pre className="rounded-lg bg-gray-900 p-4 overflow-x-auto">
      <code className="text-sm text-gray-100">{code}</code>
    </pre>
  );
}
