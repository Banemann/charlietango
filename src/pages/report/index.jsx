import Header from "../../app/components/Header";
import Image from "next/image";
import styles from './Report.module.css'; // Assuming you are using CSS modules

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
    <main>
      <Header />
      <div className={styles.mainContainer}>
      <h1>{data.url}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={data.screenshot.url}
          alt="Screenshot of the page"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className={styles.violationsCount}>
        <p>Found {data.violations.length} issues</p>
      </div>
      <div className={styles.violationsContainer}>
        <h3>Violations:</h3>
        {violations.map((violation, index) => (
          <article key={index}>
            <p><strong>ID:</strong> {violation.id}</p>
            <p><strong>Impact:</strong> {violation.impact}</p>
            <p><strong>Description:</strong> {violation.description}</p>
          </article>
        ))}
      </div>
      
      </div>
    </main>
  );
}
