import React from "react";
import { Button } from "./ui/button";
import { useModal } from "@/context/ModalContext";
import { useCaptionContext } from "@/context/CaptionContext";

interface ModalComponentProps {
  children: React.ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ children }) => {
  const { isModalOpen, closeModal, handleSubmit } = useModal();
  const { handleReset } = useCaptionContext();
  if (!isModalOpen) return null;

  return (
    <div className="  fixed inset-0 flex items-center justify-center z-50 overflow-auto">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      <div className="bg-white p-6 rounded-lg z-10 max-w-7xl mx-auto relative">
        <button
          className="text-black absolute top-0 right-0 m-4"
          onClick={closeModal}
        >
          &times;
        </button>
        {children}
        <div className="flex justify-end space-x-4 mt-4">
          <Button
            onClick={() => {
              closeModal();
              handleReset();
            }}
            variant={"secondary"}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
