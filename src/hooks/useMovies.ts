import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import e from "cors";

const useMoviesList = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/movies", fetcher);
  return {
    data,
    isLoading,
    error,
    mutate
  };
};
export default useMoviesList;
