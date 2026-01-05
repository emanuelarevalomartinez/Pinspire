import { unsplashImageInterface } from "@/interfaces/unsplashImageInterface";
import { unsplashApi } from "./api";

export async function getPhotos({
  page = 1,
  perPage = 10,
  term,
  orientation,
}: {
  page?: number;
  perPage?: number;
  term?: string;
  orientation?: "landscape" | "portrait" | "squarish";
}) {
  if (term && term.trim().length > 0) {
    return unsplashApi<{ results: unsplashImageInterface[] }>({
      endpoint: "/search/photos",
      query: {
        query: term,
        page,
        per_page: perPage,
        orientation,
      },
    }).then((res) => res.results);
  }

  return await unsplashApi<unsplashImageInterface[]>({
    endpoint: "/photos",
    query: {
      page,
      per_page: perPage,
    },
  });
}

export async function searchPhotos(query: string, page = 1) {
  return await unsplashApi<any>({
    endpoint: "/search/photos",
    query: {
      query,
      page,
      per_page: 10,
    },
  });
}
