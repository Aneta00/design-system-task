import React from "react";

interface Props {
  title: string;
  description: string;
  category: string;
  image: string;
  authorName: string;
  authorImg: string;
  isFavorite?: boolean;
  onClick?: () => void;
}
export const MediaCard: React.FC<Props> = ({
  title,
  description,
  category,
  image,
  authorName,
  authorImg,
  isFavorite = false,
  onClick,
}) => {
  return (
    <div
      className={`relative rounded border-custom border-default rounded-custom overflow-hidden bg-white ${isFavorite ? "md:flex md:flex-row" : ""}`}
    >
      <div className={`${isFavorite ? "md:w-3/5" : "aspect-w-16 aspect-h-9"}`}>
        <img src={image} alt="Media" className="object-cover w-full h-full" />
      </div>
      <div className={`${isFavorite ? "md:w-2/5" : "flex-grow"}`}>
        <div className="px-6 py-4">
          <p className="text-12 font-semibold text-content-secondary">
            {category}
          </p>
          <h4 className="font-bold text-17 text-content-primary">{title}</h4>
          <p className="text-14 font-semibold text-content-secondary">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center">
          <img src={authorImg} alt="" className="w-20 h-20 rounded-full mr-2" />
          <span className="text-14 font-semibold text-content-secondary">
            {authorName}
          </span>
        </div>
      </div>
      {/* adding hidden button and expanding click for accessibility */}
      <button onClick={onClick} className="button-with-before">
        <span>Open setting dialog</span>
      </button>
    </div>
  );
};
