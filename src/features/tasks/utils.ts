export function changeColorByDiffDays(diffInDays: number): string {
  if (diffInDays <= 3) {
    return "text-red-500";
  } else if (diffInDays <= 7) {
    return "text-orange-500";
  } else if (diffInDays <= 14) {
    return "text-yellow-500";
  }

  return "text-muted-foreground";
}

export function snakeCaseToTitleCase(str: string) {
  return str
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
