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

  return (
    <div className="flex-grow font-roboto">
      <section>
        <h2 className="px-4 py-7 font-black text-3xl ">Featured Movies</h2>
        <div className="flex gap-8 overflow-x-auto flex-nowrap flex-shrink-0 px-4 scroll">
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
      <section>
        <h2>Coming Soon</h2>
        <div>
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
    </div>
  );
};

export default Discover;
