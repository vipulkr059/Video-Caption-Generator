import React, { createContext, useContext, useState, ReactNode } from "react";

interface Caption {
  id: number;
  text: string;
  startTime: string;
  endTime: string;
}

interface CaptionContextType {
  captions: Caption[];
  handleTextChange: (id: number, text: string) => void;
  handleTimeChange: (id: number, field: string, value: string) => void;
  handleAddItem: () => void;
  handleReset: () => void;
  handleDeleteItem: (id: number) => void;
}

const CaptionContext = createContext<CaptionContextType | undefined>(undefined);

export const useCaptionContext = () => {
  const context = useContext(CaptionContext);
  if (!context) {
    throw new Error("useCaptionContext must be used within a CaptionProvider");
  }
  return context;
};

interface CaptionProviderProps {
  children: ReactNode;
}

export const CaptionProvider: React.FC<CaptionProviderProps> = ({
  children,
}) => {
  const [captions, setCaptions] = useState<Caption[]>([
    { id: 1, text: "", startTime: "", endTime: "" },
  ]);

  const handleTextChange = (id: number, text: string) => {
    const updatedItems = captions.map((caption) =>
      caption.id === id ? { ...caption, text } : caption
    );
    setCaptions(updatedItems);
  };

  const handleTimeChange = (id: number, field: string, value: string) => {
    const updatedItems = captions.map((caption) =>
      caption.id === id ? { ...caption, [field]: value } : caption
    );
    setCaptions(updatedItems);
  };

  const handleAddItem = () => {
    const newItem: Caption = {
      id: captions.length + 1,
      text: "",
      startTime: "",
      endTime: "",
    };
    setCaptions([...captions, newItem]);
  };
  const handleReset = () => {
    setCaptions([{ id: 1, text: "", startTime: "", endTime: "" }]);
  };

  const handleDeleteItem = (id: number) => {
    const updatedItems = captions.filter((caption) => caption.id !== id);
    setCaptions(updatedItems);
  };

  return (
    <CaptionContext.Provider
      value={{
        captions,
        handleReset,
        handleTextChange,
        handleTimeChange,
        handleAddItem,
        handleDeleteItem,
      }}
    >
      {children}
    </CaptionContext.Provider>
  );
};
