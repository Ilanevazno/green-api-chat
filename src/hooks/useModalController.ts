import { useState, useCallback } from "react";

export interface IUseModalController {
  isOpen: boolean;
  toggle: () => void;
  dismiss: () => void;
  open: () => void;
}

export function useModalController() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const dismiss = useCallback(() => setIsOpen(false), [setIsOpen]);
  const open = useCallback(() => setIsOpen(true), [setIsOpen]);
  return {
    isOpen,
    toggle,
    dismiss,
    open,
  };
}
