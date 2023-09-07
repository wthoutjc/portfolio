"use client";
import Image from "next/image";

// Zustand
import { useModalStore } from "@/zustand";

const ImageCard = () => {
  const { showModal } = useModalStore();

  const handleShowModal = () => {
    showModal({
      show: true,
      modalProps: {},
      modalType: "normal",
    });
  };

  return (
    <div className="flex justify-start w-full mb-4 overflow-auto">
      <Image
        className="object-cover rounded-full w-36 h-36"
        src="https://res.cloudinary.com/ddmeptk5c/image/upload/f_auto,q_auto/v1/portfolio/mbxscisbe6yacaa7lkky"
        alt="ionjc"
        width={300}
        height={300}
        onClick={() => handleShowModal()}
      />
    </div>
  );
};

export { ImageCard };
