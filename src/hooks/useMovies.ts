import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMoviesList = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  return {
    data,
    isLoading,
    error,
    mutate
  };
};
export default useMoviesList;
