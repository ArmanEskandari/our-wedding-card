import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "./utils";

export function Dialog({
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
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10" />
        <DialogPrimitive.Content
          className={cn(
            "z-50 fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-lg focus:outline-none",
          )}
        >
          <div className="flex items-center justify-between mb-4">
            {title && (
              <DialogPrimitive.Title className="text-lg font-semibold text-gray-900">
                {title}
              </DialogPrimitive.Title>
            )}
            <DialogPrimitive.Close className="rounded-full p-1 text-gray-500 bg-transparent hover:bg-gray-100">
              <X className="w-4 h-4" />
            </DialogPrimitive.Close>
          </div>
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
