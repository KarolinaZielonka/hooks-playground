"use client";

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
    <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="border-b border-gray-200 px-4 py-3 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
