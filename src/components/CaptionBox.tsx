import React from "react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useCaptionContext } from "@/context/CaptionContext";
import { Plus, Trash2 } from "lucide-react";

const CaptionBox: React.FC = () => {
  const {
    captions,
    handleTextChange,
    handleTimeChange,
    handleAddItem,
    handleDeleteItem,
  } = useCaptionContext();

  return (
    <div className="container mx-auto overflow-y-auto max-h-52">
      {captions.map((caption) => (
        <div key={caption.id} className="flex items-center space-x-4 mb-4">
          <Textarea
            value={caption.text}
            onChange={(e) => handleTextChange(caption.id, e.target.value)}
            className="flex-grow border rounded px-4 py-2"
            placeholder="Text"
          />
          <div className="flex flex-col gap-1">
            <Input
              type="text"
              value={caption.startTime}
              onChange={(e) => {
                handleTimeChange(caption.id, "startTime", e.target.value);
              }}
              className="border rounded px-2 py-1 w-32"
              placeholder="HH:MM:SS.mmm"
            />
            <Input
              type="text"
              value={caption.endTime}
              onChange={(e) =>
                handleTimeChange(caption.id, "endTime", e.target.value)
              }
              className="border rounded px-2 py-1 w-32"
              placeholder="HH:MM:SS.mmm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Button onClick={handleAddItem}>
              <Plus />
            </Button>
            <Button
              onClick={() => handleDeleteItem(caption.id)}
              variant={"destructive"}
              disabled={caption.id == 1 ? true : false}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaptionBox;
