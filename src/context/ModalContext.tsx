import { toast } from "@/components/ui/use-toast";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ModalContextProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  handleSubmit: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    toast({
      title: "Plese enter timeStamp in HH:mm:ss.mmm format",
      description: "Only above format is supported for captions",
    });
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = () => {
    toast({
      title: "Captions Submitted successfully",
    });
    closeModal();
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, handleSubmit }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
