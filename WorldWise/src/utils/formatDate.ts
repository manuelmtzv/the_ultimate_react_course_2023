export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("mx", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
