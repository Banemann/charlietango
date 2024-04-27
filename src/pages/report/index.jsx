import { useRouter } from 'next/router';
import Header from "../../app/components/Header";

export async function getServerSideProps(context) {
  const params = new URLSearchParams(context.query);
  const response = await fetch(
    `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`,
  );
  const data = await response.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Report({ data }) {
  return (
    <main>
      <Header/>
      <h1>Report for {data.url}</h1>
    </main>
  );
}