import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMoviesList = (id?: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `/api/movies/${id}` : null,
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
export default useMoviesList;
