import Image from "next/image";
import { Inter } from "next/font/google";
import HeroPost from "@/components/HeroPost";

const inter = Inter({ subsets: ["latin"] });

import postSummaries from "@/data/postSummaryData";

export default function Home() {
  return (
    <div>
      <HeroPost {...postSummaries[0]} />
    </div>
  );
}
