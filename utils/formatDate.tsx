export default function formatDate(unformattedDate: string): string {
  const date = new Date(unformattedDate);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return formattedDate;
}
