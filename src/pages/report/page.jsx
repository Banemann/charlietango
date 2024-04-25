import Header from '@/components/Header';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Report() {
  const router = useRouter();
  const { url } = router.query;
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(`https://mmd-a11y-api.vercel.app/api/scan?url=${encodeURIComponent(url)}`)
        .then(res => res.json())
        .then(data => {
          setReport(data);
          setLoading(false);
        })
        .catch(err => {
          setError('Failed to fetch the report.');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Header />
      <main>
        <h1>Report for {url}</h1>
        {report ? (
          <>
            <p>Found {report.violations.length} accessibility issues.</p>
            {report.screenshot && (
              <Image
                alt={`Screenshot of ${report.url}`}
                src={report.screenshot.url}
                width={report.screenshot.width}
                height={report.screenshot.height}
                unoptimized={true} // Necessary if your image host is not configured in `next.config.js`
              />
            )}
          </>
        ) : (
          <p>No report data available.</p>
        )}
      </main>
    </div>
  );
}
