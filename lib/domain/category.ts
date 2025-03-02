export const ALL_CATEGORIES = [
  "Food",
  "Shopping",
  "Nature",
  "Culture",
  "Accommodation",
  "Experience",
] as const;
type CategoryTuple = typeof ALL_CATEGORIES;
export type Category = CategoryTuple[number];

export const categoryColors: Record<
  Category,
  "spring" | "summer" | "autumn" | "winter" | "water" | "sun" | "history"
> = {
  Food: "spring",
  Shopping: "sun",
  Nature: "summer",
  Culture: "history",
  Accommodation: "water",
  Experience: "autumn",
};

export const categoryJA: Record<Category, string> = {
  Food: "食事",
  Shopping: "買い物",
  Nature: "自然",
  Culture: "文化",
  Accommodation: "民泊",
  Experience: "体験",
};
