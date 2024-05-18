import { useUrlContext } from "@/context/UrlContext";

const VideoPlayer = () => {
  const { url } = useUrlContext();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Video Caption Generator</h1>
      <div className="w-full md:w-1/2">
        <video className="w-full" controls src={url}></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
