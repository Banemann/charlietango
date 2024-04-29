import Header from "../../app/components/Header";
import Image from "next/image";


export const revalidate = 1800;

export async function getServerSideProps(context) {
  const params = new URLSearchParams(context.query);
  const response = await fetch(
    `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`,
  );
  const data = await response.json();

  return {
    props: { data },
  };
}

export default function Report({ data }) {
  const violations = data.violations.slice(0, 3);

  return (
    <div>
      <Header />
      <h1>Report for {data.url}</h1>
      <Image src={data.screenshot.url} alt="Screenshot of the page" width={data.screenshot.width} height={data.screenshot.height} priority />
      <p>Found {data.violations.length} issues</p>
      <div>
        <h3>Violations:</h3>
        {violations.map((violation, index) => (
          <div key={index}>
            <p><strong>ID:</strong> {violation.id}</p>
            <p><strong>Impact:</strong> {violation.impact}</p>
            <p><strong>Description:</strong> {violation.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
