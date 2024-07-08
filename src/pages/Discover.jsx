import { useEffect, useState } from "react";
import getMovies from "../db/db";
const Discover = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const moviesData = await getMovies();
      setMovies(moviesData);
    }

    fetchMovies();
  }, []);

  const featuredMovies = movies
    .filter((movie) => movie.inPreSale === false)
    .slice(0, 4);

  const comingSoonMovies = movies
    .filter((movie) => movie.inPreSale === true)
    .slice(0, 4);

  return (
    <div className="flex-grow font-roboto">
      <section>
        <h2 className="px-4 py-7 font-black text-3xl ">Featured Movies</h2>
        <div className="flex gap-8 overflow-x-auto flex-nowrap flex-shrink-0 px-4 ">
          {featuredMovies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 flex flex-col w-[222px] text-[#EEEEEE] gap-2">
              <img
                src={movie.images[0].url}
                alt=""
                className="w-[222px] h-[328px] object-cover rounded-lg "
              />
              <span className="text-lg font-bold">{movie.title}</span>
              <span className="text-xs line-clamp-3">{movie.synopsis}</span>
              <div className="flex flex-row justify-between pt-2">
                <span className="p-3 bg-[#444444] rounded-lg text-xs">
                  3:30 PM
                </span>
                <span className="p-3 bg-[#444444] rounded-lg text-xs">
                  3:30 PM
                </span>
                <span className="p-3 bg-[#444444] rounded-lg text-xs">
                  3:30 PM
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="pb-12">
        <h2 className="px-4 pb-7 font-black text-3xl ">Coming Soon</h2>
        <div className="grid grid-cols-2 gap-4 px-4">
          {comingSoonMovies.map((movie) => (
            <div className=" w-fit text-[#EEEEEE]">
              <img
                src={movie.images[0].url}
                alt=""
                className="w-[164px] h-[242px] object-cover rounded-lg "
              />
            </div>
          ))}
        </div>
      </section>
      <section className="pb-12">
        <h2 className="px-4 pb-7 font-black text-3xl ">Recently Watched</h2>
        <div className="grid grid-cols-2 gap-4 px-4">
          {comingSoonMovies.map((movie) => (
            <div className=" w-fit text-[#EEEEEE]">
              <img
                src={movie.images[0].url}
                alt=""
                className="w-[164px] h-[242px] object-cover rounded-lg "
              />
            </div>
          ))}
        </div>
      </section>
      <section className="pb-12">
        <h2 className="px-4 pb-7 font-black text-3xl ">Stream On Demand</h2>
        <div className="grid grid-cols-2 gap-4 px-4">
          {comingSoonMovies.map((movie) => (
            <div className=" w-fit text-[#EEEEEE]">
              <img
                src={movie.images[0].url}
                alt=""
                className="w-[164px] h-[242px] object-cover rounded-lg "
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discover;
