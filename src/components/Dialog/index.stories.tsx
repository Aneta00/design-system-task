import { Dialog } from ".";
import { action } from "@storybook/addon-actions";

export default {
  component: Dialog,
};

export const Default = () => (
  <Dialog
    isOpen={true}
    onOpenChange={action("open-change")}
    isFavorite={false}
    toggleFavorite={action("toggle-favorite")}
  />
);
