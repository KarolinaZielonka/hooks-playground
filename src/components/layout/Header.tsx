// Placeholder - will be implemented in Phase 1
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Hooks Playground
        </Link>
        <nav className="flex gap-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
