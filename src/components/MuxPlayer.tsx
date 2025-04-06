import MuxPlayer from "@mux/mux-player-react";

const VideoPlayer = ({ playbackId }: { playbackId: string }) => {
  return (
    <MuxPlayer
      playbackId={playbackId}
      className=" border-4 aspect-video"
      metadata={{
        video_title: "Placeholder (optional)",
        viewer_user_id: "Placeholder (optional)",
      }}
    />
  );
};
export default VideoPlayer;
