import { MediaCard } from ".";

export default {
  component: MediaCard,
};

export const Default = () => (
  <MediaCard
    title="Lorem ipsum dolor sit ametetur adipiscing elit vitae"
    description="consectet sit ametetur adipiscing"
    category="Category"
    image="https://via.placeholder.com/640x360"
    authorName=" Authorn name"
    authorImg="https://via.placeholder.com/40x40"
  />
);

export const Favorite = () => (
  <MediaCard
    title="Lorem ipsum dolor sit ametetur adipiscing elit vitae"
    description="consectet sit ametetur adipiscing"
    category="Category"
    image="https://via.placeholder.com/640x360"
    authorName=" Authorn name"
    authorImg="https://via.placeholder.com/40x40"
    isFavorite
  />
);
