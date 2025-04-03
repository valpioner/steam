import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import useSWR from 'swr';

const queryClient = new QueryClient();

const getData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(
        fetch('https://api.github.com/repos/TanStack/query').then((res) =>
          res.json(),
        ),
      );
    }, 1000),
  );

const QueryComponent = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['data'],
    queryFn: getData,
  });

  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  if (!data) return <p>No data</p>;

  return (
    <>
      <strong>Query Component (1 sec delay)</strong>
      <br />
      <br />
      <h1>name: {data.name}</h1>
      <p>description: {data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>
      <strong>✨ {data.stargazers_count}</strong>
      <strong>🍴 {data.forks_count}</strong>
    </>
  );
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const SWRComponent = () => {
  const { data, error, isLoading } = useSWR(
    'https://api.github.com/repos/TanStack/query',
    async (url) =>
      new Promise((resolve) => setTimeout(() => resolve(fetcher(url)), 1500)),
  );

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  if (!data) return <p>No data</p>;

  return (
    <>
      <strong>SWR Component (1.5 sec delay)</strong>
      <br />
      <br />
      <h1>name: {data.name}</h1>
      <p>description: {data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>
      <strong>✨ {data.stargazers_count}</strong>
      <strong>🍴 {data.forks_count}</strong>
    </>
  );
};

const ReqPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-[940px] mx-auto py-[50px]">
        <QueryComponent />
        <br />
        <br />
        <hr />
        <br />
        <SWRComponent />
      </div>
    </QueryClientProvider>
  );
};

export default ReqPage;
