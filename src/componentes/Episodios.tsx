import axios from "axios";
import { useState, useEffect } from "react";
import { Episodio } from "./Episodio";
import { PaginacionEpisodios } from "./PaginacionEpisodios";

const URL = "https://rickandmortyapi.com/api/episode";

interface episodio {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export const Episodios = () => {
  const [episodios, setEpsodios] = useState<Array<episodio>>([]);
  const [pages, setPages] = useState<Record<string, string>>({});
  useEffect(() => {
    fetchEpisodios(URL);
  }, []);

  const fetchEpisodios = (url: string) => {
    axios
      .get(url)
      .then((resp) => {
        // console.log(resp.data.results);
        setEpsodios(resp.data.results);
        setPages(resp.data.info);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handlePrev = () => {
    fetchEpisodios(pages.prev);
  };
  const handleNext = () => {
    fetchEpisodios(pages.next);
  };

  return (
    <div>
      <PaginacionEpisodios
        handlePrev={handlePrev}
        handleNext={handleNext}
        prev={pages.prev}
        next={pages.next}
      />
      <Episodio episodios={episodios} />
    </div>
  );
};
