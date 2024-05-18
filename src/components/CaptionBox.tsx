import React from "react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useCaptionContext } from "@/context/CaptionContext";
import { Plus, Trash2 } from "lucide-react";

const CaptionBox: React.FC = () => {
  const {
    items,
    handleTextChange,
    handleTimeChange,
    handleAddItem,
    handleDeleteItem,
  } = useCaptionContext();

  return (
    <div className="container mx-auto">
      {items.map((item) => (
        <div key={item.id} className="flex items-center space-x-4 mb-4">
          <Textarea
            value={item.text}
            onChange={(e) => handleTextChange(item.id, e.target.value)}
            className="flex-grow border rounded px-4 py-2"
            placeholder="Text"
          />
          <div className="flex flex-col gap-1">
            <Input
              type="text"
              value={item.startTime}
              onChange={(e) =>
                handleTimeChange(item.id, "startTime", e.target.value)
              }
              className="border rounded px-2 py-1 w-20"
              placeholder="Start"
            />
            <Input
              type="text"
              value={item.endTime}
              onChange={(e) =>
                handleTimeChange(item.id, "endTime", e.target.value)
              }
              className="border rounded px-2 py-1 w-20"
              placeholder="End"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Button onClick={handleAddItem}>
              <Plus />
            </Button>
            <Button
              onClick={() => handleDeleteItem(item.id)}
              variant={"destructive"}
              disabled={item.id == 1 ? true : false}
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
