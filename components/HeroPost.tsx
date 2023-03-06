export default function HeroPost({ date, title, summary, image }: any) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <main
      className={"h-80 bg-cover bg-center bg-no-repeat text-white"}
      style={{ backgroundImage: `url('/${image}')` }}
    >
      <p className="">{formattedDate}</p>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="max-w-xl">{summary}</p>
    </main>
  );
}
