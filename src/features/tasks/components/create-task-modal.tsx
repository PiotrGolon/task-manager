"use client";

import { ResponsiveModal } from "@/components/responive-modal";
import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import { CreateTaskFormWrapper } from "./create-task-form-wrapper";
import { TaskStatus } from "../types";

export const CreateTaskModal = () => {
  const { isOpen, close, boardStatus, handleChange } = useCreateTaskModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={handleChange}>
      <CreateTaskFormWrapper
        onCancel={close}
        initialStatus={boardStatus as TaskStatus}
      />
    </ResponsiveModal>
  );
};
