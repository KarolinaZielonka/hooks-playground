"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { HookCard } from "@/components/HookCard";
import { allHooks, builtInHooks, customHooks } from "@/lib/data/hooks-list";
import type { HookCategory } from "@/lib/types/hook";

type FilterCategory = "all" | HookCategory;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredHooks = allHooks.filter((hook) => {
    const matchesSearch =
      hook.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hook.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "all" || hook.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const filters: { label: string; value: FilterCategory; count: number }[] = [
    { label: "All Hooks", value: "all", count: allHooks.length },
    { label: "Built-in", value: "built-in", count: builtInHooks.length },
    { label: "Custom", value: "custom", count: customHooks.length },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            React Hooks Playground
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn React hooks through interactive demos and recreations. Explore
            10 built-in hooks and 10 custom hooks with hands-on examples.
          </p>
          <div className="mt-6 flex justify-center gap-4 text-sm">
            <StatusIndicator
              color="bg-green-500"
              label="Complete"
              count={allHooks.filter((h) => h.status === "done").length}
            />
            <StatusIndicator
              color="bg-yellow-500"
              label="In Progress"
              count={allHooks.filter((h) => h.status === "in-progress").length}
            />
            <StatusIndicator
              color="bg-gray-400"
              label="Planned"
              count={allHooks.filter((h) => h.status === "planned").length}
            />
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
          <FilterTabs
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      </section>

      {/* Hooks Grid */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        {filteredHooks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No hooks found matching your search.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredHooks.map((hook) => (
              <HookCard key={hook.id} hook={hook} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function StatusIndicator({
  color,
  label,
  count,
}: {
  color: string;
  label: string;
  count: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className={`inline-block h-3 w-3 rounded-full ${color}`} />
      <span className="text-gray-600 dark:text-gray-300">
        {count} {label}
      </span>
    </div>
  );
}

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative flex-1 max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search hooks..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
}

function FilterTabs({
  filters,
  activeFilter,
  onFilterChange,
}: {
  filters: { label: string; value: FilterCategory; count: number }[];
  activeFilter: FilterCategory;
  onFilterChange: (value: FilterCategory) => void;
}) {
  return (
    <div className="flex gap-2">
      {filters.map((filter) => (
        <button
          type="button"
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            activeFilter === filter.value
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          {filter.label} ({filter.count})
        </button>
      ))}
    </div>
  );
}
