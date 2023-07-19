"use client";

import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  Onclose: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  Onclose,
  description,
  isOpen,
  title,
  children,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      Onclose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
