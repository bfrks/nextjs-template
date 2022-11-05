import type { Fetcher } from 'swr';
import useSWR from 'swr';

const defaultFetcher: Fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export const useFetch = <T>(...args: Parameters<typeof fetch>) => {
  const { data, error, mutate } = useSWR(args, defaultFetcher, {
    revalidateOnFocus: false,
  });

  return {
    isLoading: !data && !error,
    isError: error as string | undefined,
    data: data as T | undefined,
    mutate,
  };
};
