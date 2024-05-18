import CaptionBox from "@/components/CaptionBox";
import ModalComponent from "@/components/ModalComponent";
import { ToggleTheme } from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";
import UrlInput from "@/components/UrlInput";
import VideoPlayer from "@/components/VideoPlayer";
import { useModal } from "@/context/ModalContext";

export default function HomePage() {
  const { openModal } = useModal();

  return (
    <div className="flex flex-col gap-3 m-2">
      <ToggleTheme />
      <UrlInput />
      <VideoPlayer />
      <div className="flex justify-center">
        <Button onClick={openModal}>Add Captions</Button>
        <ModalComponent>
          <h2 className="text-xl mb-4">Edit Captions</h2>
          <CaptionBox />
        </ModalComponent>
      </div>
    </div>
  );
}
