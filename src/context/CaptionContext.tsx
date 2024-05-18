import React, { createContext, useContext, useState, ReactNode } from "react";

interface Item {
  id: number;
  text: string;
  startTime: string;
  endTime: string;
}

interface CaptionContextType {
  items: Item[];
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
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: "", startTime: "", endTime: "" },
  ]);

  const handleTextChange = (id: number, text: string) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, text } : item
    );
    setItems(updatedItems);
  };

  const handleTimeChange = (id: number, field: string, value: string) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    const newItem: Item = {
      id: items.length + 1,
      text: "",
      startTime: "",
      endTime: "",
    };
    setItems([...items, newItem]);
  };
  const handleReset = () => {
    setItems([{ id: 1, text: "", startTime: "", endTime: "" }]);
  };

  const handleDeleteItem = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <CaptionContext.Provider
      value={{
        items,
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
