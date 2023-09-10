import React, { useEffect } from "react";

function GamesByGenreId({ gameList }) {
  useEffect(() => {
    console.log("Game Lists", gameList);
  }, []);

  const getMovieDetails = (id) => {
    GlobalApi.getMovieDetails(id).then((resp) => {
      console.log(resp);
    });
  };
  return (
    <div className="mt-5">
      <h2 className="font-bold text-[30px] dark:text-white">Popular Games</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
    lg:grid-cols-3 gap-6 mt-7"
      >
        {gameList.map((item) => (
          <div className="bg-[#76a8f75e] rounded-lg p-3 pb-10 h-full hover:scale-110 transition ease-in-out duration-300 cursos-pointer">
            <img
              src={item.background_image}
              width={1080}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2 className="text-[20px] dark:text-white font-bold">
              {item.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-500 dark:text-gray-300">
              ⭐{item.rating} 💬{item.reviews_count}
              🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenreId;
