'use client'

import { unsplashImageInterface } from "@/interfaces/unsplashImageInterface";
import { getPhotos } from "@/services/unsplash.service";
import { CardImageUnsplash } from "@/shared/cards/CardImageUnsplash";
import { useApp } from "@/store/ContextProvider";
import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";

export function HomeView(){

    const { refreshSearchView } = useApp(); 

  const [images, setImages] = useState<unsplashImageInterface[] | null>(null);

  const [term, setTerm] = useQueryState("term", {
    defaultValue: "",
    parse: String,
  });

  const [page, setPage] = useQueryState("page", {
    defaultValue: 1,
    parse: Number,
  });

  useEffect(() => {
    getPhotos({ page, term })
      .then((response) => {
        setImages(response);
      })
      .catch(console.error);
  }, [page, refreshSearchView]);

    return(
         <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-4 gap-4">
                {images?.map((image) => (
                  <CardImageUnsplash key={image.id} image={image} />
                ))}
              </div>
        
              <div className="mt-10 flex items-center justify-center gap-4">
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page <= 1}
                  className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700
                           hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ← Anterior
                </button>
        
                <span className="text-sm font-medium text-neutral-600">
                  Página <span className="font-semibold text-neutral-900">{page}</span>
                </span>
        
                <button
                  onClick={() => setPage(page + 1)}
                  className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white
                           hover:bg-neutral-800"
                >
                  Siguiente →
                </button>
              </div>
            </>
    )
}