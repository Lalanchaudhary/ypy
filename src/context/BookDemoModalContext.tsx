"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import BookDemoModal from "@/components/BookDemoModal";

type BookDemoModalContextType = {
  openModal: () => void;
};

const BookDemoModalContext = createContext<BookDemoModalContextType | undefined>(undefined);

export function useBookDemoModal() {
  const ctx = useContext(BookDemoModalContext);
  if (!ctx) throw new Error("useBookDemoModal must be used within BookDemoModalProvider");
  return ctx;
}

export function BookDemoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <BookDemoModalContext.Provider value={{ openModal }}>
      {children}
      <BookDemoModal open={open} onClose={closeModal} />
    </BookDemoModalContext.Provider>
  );
}