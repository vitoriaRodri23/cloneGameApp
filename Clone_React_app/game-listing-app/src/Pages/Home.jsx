import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import Banner from "../Components/Banner";
import GlobalApi from "../Services/GlobalApi";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenreId from "../Components/GamesByGenreId";

function Home() {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenre, setGameListByGenre] = useState([]);

  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
      setGameListByGenre(resp.data.results);
    });
  };

  const getGameListByGenreId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      console.log(resp.data.results);
      setGameListByGenre(resp.data.results);
    });
  };
  
  return (
    <div className="grid grid-cols-4">
      <div className="hidden md:block px-8">
        <GenreList genereId={(genereId) => getGameListByGenreId(genereId)} />
      </div>
      <div className="col-span-4 md:col-span-3 ">
        {allGameList?.length && gameListByGenre?.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
          </div>
        ) : null}
        <TrendingGames gameList={allGameList} />
        <GamesByGenreId gameList={gameListByGenre} />
      </div>
    </div>
  );
}

export default Home;
