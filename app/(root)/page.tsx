import { getAllVideos } from "@/actions/video";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import React from "react";

const HomePage = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams;
  const { videos, pagination } = await getAllVideos(
    query,
    filter,
    Number(page) || 1,
  );

  return (
    <main className={"wrapper page"}>
      <Header title={"All videos"} subHeader={"Public library"} />
      {videos?.length > 0 ? (
        <section className={"video-grid"}>
          {videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
              {...video}
              thumbnail={video.thumbnailUrl}
              userImg={user?.image || ""}
              username={user?.name || "Guest"}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          icon={"/assets/icons/video.svg"}
          title={"No videos found"}
          description={"Try adjusting your search"}
        />
      )}
    </main>
  );
};

export default HomePage;
