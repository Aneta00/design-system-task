import { useState } from "react";
import data from "./data.json";
import { MediaCard } from "./components/MediaCard";
import { Dialog } from "./components/Dialog";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // would store current item design id to know which favorite to change
  // const [currentItemId, setCurrentItemId] = useState<string | null>(null);

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  const toggleFavorite = () => console.log();

  const favoriteDesigns = data.designs.filter((design) => design.isFavorite);
  const otherDesigns = data.designs.filter((design) => !design.isFavorite);

  return (
    <>
      <h1 className="text-50 font-bold text-center mb-40">
        Design system task
      </h1>
      <div className="max-w-1200 mx-auto">
        {favoriteDesigns.length > 0 && (
          <>
            <h2 className="text-50 font-bold text-center">My favorites</h2>
            <div className="favorites mb-8 grid grid-cols-1 gap-24 p-24">
              {favoriteDesigns.map((design) => (
                <MediaCard
                  key={design.id}
                  title={design.title}
                  description={design.subtitle}
                  category="Favorite Category"
                  image={design.imageSrc}
                  authorName={design.author.name}
                  authorImg={design.author.avatarSrc}
                  onClick={toggleDialog}
                  isFavorite
                />
              ))}
            </div>
          </>
        )}

        {otherDesigns.length > 0 && (
          <>
            <h2 className="text-50 font-bold text-center">My designs</h2>
            <div className="otherDesigns mb-8 grid grid-cols-1 md:grid-cols-3 gap-24 p-24">
              {otherDesigns.map((design) => (
                <MediaCard
                  key={design.id}
                  title={design.title}
                  description={design.subtitle}
                  category="Category"
                  image={design.imageSrc}
                  authorName={design.author.name}
                  authorImg={design.author.avatarSrc}
                  onClick={toggleDialog}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {isDialogOpen && (
        <Dialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          isFavorite={false /* Determine if the currentItem is favorite */}
          toggleFavorite={toggleFavorite}
        />
      )}
    </>
  );
}

export default App;
