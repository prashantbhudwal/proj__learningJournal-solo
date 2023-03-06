import Image from "next/image";
import { Inter } from "next/font/google";
import HeroPost from "@/components/HeroPost";
import PostCard from "@/components/PostCard";

const inter = Inter({ subsets: ["latin"] });

import postSummaries from "@/data/postSummaryData";
import Stack from "@/components/Stack";

export default function Home() {
  const cards = postSummaries.map((post) => (
    <PostCard {...post} key={post.id} />
  ));

  return (
    <div>
      <HeroPost {...postSummaries[0]} />
      <Stack>{cards}</Stack>
    </div>
  );
}
