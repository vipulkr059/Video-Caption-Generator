import { useEffect, useState } from "react";
import { useCaptionContext } from "@/context/CaptionContext";
import { useUrlContext } from "@/context/UrlContext";

const VideoPlayer = () => {
  const { items: captions } = useCaptionContext();
  const { url } = useUrlContext();
  const [vttBlobUrl, setVttBlobUrl] = useState<string>("");

  useEffect(() => {
    const generateVttContent = (): string => {
      let vttContent = "WEBVTT\n\n";

      captions.forEach((caption, index) => {
        vttContent += `${index + 1}\n`;
        vttContent += `${caption.startTime} --> ${caption.endTime}\n`;
        vttContent += `${caption.text}\n\n`;
      });

      return vttContent;
    };

    const createVttBlobUrl = (vttContent: string) => {
      const blob = new Blob([vttContent], { type: "text/vtt" });
      return URL.createObjectURL(blob);
    };

    const vttContent = generateVttContent();
    const blobUrl = createVttBlobUrl(vttContent);
    setVttBlobUrl(blobUrl);
    // Clean up the URL object when component unmounts or captions change
    return () => {
      URL.revokeObjectURL(blobUrl);
    };
  }, [captions]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Video Caption Generator</h1>
      <div className="w-full md:w-1/2">
        <video className="w-full" controls src={url}>
          <track kind="subtitles" srcLang="en" src={vttBlobUrl} default />
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
