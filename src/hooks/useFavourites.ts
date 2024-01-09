import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useFavourites = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/favourites",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  return {
    data,
    isLoading,
    error,
    mutate
  };
};
export default useFavourites;
