"use client";

import * as React from "react";
import { Drawer } from "vaul";
import { X } from "lucide-react";

export function BottomSheet({
  open,
  onOpenChange,
  title,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="z-10 fixed inset-0 bg-black/40 backdrop-blur-sm" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-3xl bg-white p-6 shadow-lg">
          <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-gray-300" />
          <div className="flex items-center justify-between mb-4">
            {title && (
              <Drawer.Title className="text-lg font-semibold text-gray-900">
                {title}
              </Drawer.Title>
            )}
            <Drawer.Close className="rounded-full p-1 text-gray-500 bg-transparent hover:bg-gray-100">
              <X className="w-4 h-4" />
            </Drawer.Close>
          </div>
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
