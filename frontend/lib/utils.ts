// Utility function to combine class names (Tailwind + ShadCN UI)
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
