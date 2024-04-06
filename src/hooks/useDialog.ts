import { useState } from "react";

export default function useDialog() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return { isOpen, handleOpen, handleClose };
}
