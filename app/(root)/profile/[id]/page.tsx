import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";
import React from "react";

const UserProfilePage = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <div className={"wrapper page"}>
      <Header
        subHeader={"vasyl.petrovych@gmail.com"}
        title={"Vasyl Petrovych"}
        userImg={"/assets/images/dummy.jpg"}
      />
      <section className={"video-grid"}>
        {dummyCards.map((card) => (
          <VideoCard {...card} key={card.id} />
        ))}
      </section>
    </div>
  );
};

export default UserProfilePage;
