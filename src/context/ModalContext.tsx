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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = () => {
    // Handle the submit action here, such as saving data or updating state
    console.log("Captions submitted");
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
