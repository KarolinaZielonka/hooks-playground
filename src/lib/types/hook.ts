export type HookStatus = "planned" | "in-progress" | "done";
export type HookCategory = "built-in" | "custom";
export type HookDifficulty = "beginner" | "intermediate" | "advanced";

export interface Hook {
  id: string;
  name: string;
  category: HookCategory;
  status: HookStatus;
  description: string;
  difficulty: HookDifficulty;
}

export interface HookDemo {
  id: string;
  title: string;
  description: string;
  code: string;
}

export interface HookDetail extends Hook {
  longDescription?: string;
  demos?: HookDemo[];
  useCases?: string[];
  gotchas?: string[];
  relatedHooks?: string[];
}
