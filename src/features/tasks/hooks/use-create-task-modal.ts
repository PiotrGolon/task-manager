"use client";
import { parseAsBoolean, parseAsString, useQueryState } from "nuqs";
import { TaskStatus } from "../types";

export const useCreateTaskModal = () => {
  const [isOpen, setIsOpen] = useQueryState(
    "create-task",
    parseAsBoolean.withDefault(false).withOptions({
      clearOnDefault: true,
    })
  );

  const [boardStatus, setBoardStatus] = useQueryState(
    "board-status",
    parseAsString
  );

  // Funkcja otwierająca modal z opcjonalnym statusem
  const open = (initialStatus?: TaskStatus) => {
    if (initialStatus) {
      setBoardStatus(initialStatus);
    }
    setIsOpen(true);
  };

  // Funkcja zamykająca modal i resetująca status
  const close = () => {
    setIsOpen(false);
    setBoardStatus(null);
  };

  const handleChange = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (!isOpen) {
      setBoardStatus(null);
    }
  };

  return {
    isOpen,
    open,
    close,
    setIsOpen,
    handleChange,
    boardStatus,
  };
};
