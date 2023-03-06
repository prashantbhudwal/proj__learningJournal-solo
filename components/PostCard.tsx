import formatDate from "@/utils/formatDate";
import Image from "next/image";

export default function PostCard({ id, image, date, title, summary }: any) {
  return (
    <div className="flex w-96 flex-col gap-1">
      <Image src={`/${image}`} alt="" width={400} height={200} />
      <p className="text-sm uppercase">{formatDate(date)}</p>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="leading-5">{summary}</p>
    </div>
  );
}
