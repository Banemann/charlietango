import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Report() {
  const router = useRouter();
  const { url } = router.query;
  const { data, error } = useSWR(`https://mmd-a11y-api.vercel.app/api/scan?url=${encodeURIComponent(url)}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Report for {url}</h1>
      <p>Found {data.violations.length} issues</p>
    </div>
  );
}