
const UNSPLASH_BASE_URL = "https://api.unsplash.com";

type ApiParams = {
  endpoint: string;
  query?: Record<string, string | number | undefined>;
};

export async function unsplashApi<T>({
  endpoint,
  query = {},
}: ApiParams): Promise<T> {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) {
      searchParams.append(key, String(value));
    }
  }

  const url = `${UNSPLASH_BASE_URL}${endpoint}?${searchParams.toString()}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Unsplash API error: ${res.status}`);
  }

  return res.json();
}
