import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";
import React from "react";

const HomePage = () => {
  return (
    <main className={"wrapper page"}>
      <Header title={"All videos"} subHeader={"Public library"} />
      <section className={"video-grid"}>
        {dummyCards.map((card) => (
          <VideoCard {...card} key={card.id} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
