"use client";
import VideoPlayer from "@/components/MuxPlayer";
import { useClerk } from "@clerk/nextjs";
import React, { useEffect } from "react";

const LivePage = () => {
  const { user } = useClerk();
  useEffect(() => {
    async function temp() {
      if (user) {
        let response = await fetch("/api/testip", {
          method: "POST",

          body: JSON.stringify({
            userId: user.id,
          }),
        });
        response = await response.json();
      }
    }

    temp();
  }, []);
  return (
    <div className="w-full h-[calc(100vh-50px)] bg-black flex items-center justify-center">
      <div className="max-w-[80%] h-3/5 flex items-center justify-center z-20">
        <VideoPlayer playbackId="qgZpQwJI1M3nz4zd8lVT2LfVwiFIHGB00FKCkhl1gEfo" />
        {/* <h3 className="font-bold text-2xl text-white animate-bounce">
          LIVE STREAM WILL BE UP SHORTLY
        </h3> */}
      </div>
    </div>
  );
};

export default LivePage;
