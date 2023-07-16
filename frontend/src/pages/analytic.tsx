import Stats from "@/components/Dashboard/Stats";
import Hero from "@/components/Home/Hero";

import Image from "next/image";

const Analytics = () => {
  const stats = [
    {
      name: "Total Subscribers",
      stat: "71,897",
      previousStat: "70,946",
      change: "12%",
      changeType: "increase",
    },
    {
      name: "Avg. Open Rate",
      stat: "58.16%",
      previousStat: "56.14%",
      change: "2.02%",
      changeType: "increase",
    },
    {
      name: "Avg. Click Rate",
      stat: "24.57%",
      previousStat: "28.62%",
      change: "4.05%",
      changeType: "decrease",
    },
  ];

  return (
    <div>
      <Hero />
      <div className="mt-8">
        <Stats stats={stats} />
        <div className="relative w-full aspect-square">
          <Image
            src="/charts.webp"
            fill={true}
            alt=""
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default Analytics;
