import CaptionBox from "@/components/CaptionBox";
import { ToggleTheme } from "@/components/ToggleTheme";
import UrlInput from "@/components/UrlInput";
import VideoPlayer from "@/components/VideoPlayer";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-3 m-2">
      <ToggleTheme />
      <UrlInput />
      <VideoPlayer />
      <CaptionBox />
    </div>
  );
}
