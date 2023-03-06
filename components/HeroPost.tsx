import formatDate from "@/utils/formatDate";

export default function HeroPost({ date, title, summary, image }: any) {
  const formattedDate = formatDate(date);

  return (
    <main
      className={
        "flex h-80 flex-col justify-end gap-2 bg-cover bg-center bg-no-repeat px-4 py-4 text-white"
      }
      style={{ backgroundImage: `url('/${image}')` }}
    >
      <p className="">{formattedDate}</p>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="max-w-xl">{summary}</p>
    </main>
  );
}
