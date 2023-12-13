import { createClient } from "pexels";

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

const client = createClient(API_KEY);

export const fetchCuratedPhotos = async (page, perPage) => {
  try {
    const response = await client.photos.curated({ page, per_page: perPage });
    return response;
  } catch (error) {
    console.error("Error fetching curated photos:", error);
    return { photos: [], total_results: 0 };
  }
};
