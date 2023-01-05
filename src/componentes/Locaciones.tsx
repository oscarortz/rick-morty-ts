import axios from "axios";
import React, { useEffect, useState } from "react";
import { Locacion } from "./Locacion";
import { PaginacionLocaciones } from "./PaginacionLocaciones";

const URL = "https://rickandmortyapi.com/api/location";

interface locaciones {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}

export const Locaciones = () => {
  const [locaciones, setLocaciones] = useState<Array<locaciones>>([]);
  const [pages, setPages] = useState<Record<string, string>>({});
  useEffect(() => {
    getLocaciones(URL);
  }, []);

  const getLocaciones = (url: string) => {
    axios
      .get(url)
      .then((resp) => {
        setLocaciones(resp.data.results);
        setPages(resp.data.info);
        // console.log(resp.data.info);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handlePrev = () => {
    getLocaciones(pages.prev);
  };
  const handleNext = () => {
    getLocaciones(pages.next);
  };

  return (
    <div>
      <PaginacionLocaciones
        handlePrev={handlePrev}
        handleNext={handleNext}
        prev={pages.prev}
        next={pages.next}
      />
      <Locacion locaciones={locaciones} />
    </div>
  );
};
