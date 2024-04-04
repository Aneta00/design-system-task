import * as RadixDialog from "@radix-ui/react-Dialog";
import React from "react";

interface FavoriteRadixDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

export const Dialog: React.FC<FavoriteRadixDialogProps> = ({
  isOpen,
  onOpenChange,
  isFavorite,
  toggleFavorite,
}) => {
  return (
    <RadixDialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <RadixDialog.Trigger asChild>
        <button className="text-content-primary font-medium rounded-custom border border-custom p-4">
          Open RadixDialog
        </button>
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 bg-black opacity-25" />
        <RadixDialog.Content
          className="fixed top-1/2 left-1/2 bg-white p-20 rounded-custom shadow-lg 
                     transform -translate-x-1/2 -translate-y-1/2"
        >
          <RadixDialog.Title className="heading-1000">
            Favorite
          </RadixDialog.Title>
          <RadixDialog.Description className="text-content-secondary">
            Do you want to mark this item as favorite?
          </RadixDialog.Description>
          <div className="flex justify-end space-x-4 mt-8">
            <RadixDialog.Close asChild>
              <button
                className="bg-gray-100 hover:bg-gray-200 text-content-primary 
                                 font-medium rounded-custom border border-custom py-2 px-6"
              >
                Cancel
              </button>
            </RadixDialog.Close>
            <button
              onClick={toggleFavorite}
              className={`${
                isFavorite
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white font-medium rounded-custom py-2 px-6`}
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
