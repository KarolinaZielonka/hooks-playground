"use client";

// Placeholder - will be implemented in Phase 3
interface DemoContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function DemoContainer({
  title,
  description,
  children,
}: DemoContainerProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-4 py-3">
        <h3 className="font-semibold">{title}</h3>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
