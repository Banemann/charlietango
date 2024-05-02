import Header from "../../app/components/Header";
import Image from "next/image";
import styles from './Report.module.css';
import Link from "next/link";

export const revalidate = 1800;

export async function getServerSideProps(context) {
  // Create URLSearchParams from the existing query
  const params = new URLSearchParams(context.query);

  // Add default parameters or modify existing ones
  // This ensures certain parameters are always set
  params.set('tags', 'wcag21a,wcag21aa,best-practice,ACT'); // This sets the 'tags' to always include these values

  // Fetch data from the API using the modified parameters
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();

  // Return the fetched data as props
  return {
    props: { data },
  };
}


function calculateGrade(violationsCount) {
  // Define the grades from best to worst
  const grades = ['A', 'B', 'C', 'D', 'E', 'F'];

  // Calculate index based on every two violations
  const index = Math.floor(violationsCount / 2);

  // Ensure the index does not exceed the last available grade
  if (index >= grades.length) {
    return 'F'; // Return the lowest grade if violations exceed the grades array
  }

  return grades[index]; // Return the grade corresponding to the calculated index
}



export default function Report({ data }) {
  const violations = data.violations.slice(0, 10);
  const totalViolations = data.violations.length;
  const grade = calculateGrade(totalViolations);

  let scoreClass = '';
  if (totalViolations >= 8) {
    scoreClass = 'critical';
  } else if (totalViolations >= 4) {
    scoreClass = 'low'; 
  }

  return (
    <main>
      <Header />
      <Link className={styles.backArrow} prefetch={false} href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 7.5H14.5A.5.5 0 0 1 15 8z"/>
        </svg>
      </Link>
      <div className={styles.mainContainer}>
        <div className={styles.infoContainer}>
          <h1>{data.url}</h1>
          <div className={`${styles.scoreContainer} ${scoreClass}`}>
            <h2>{grade}</h2>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.screenshot.url}
            alt="Screenshot of the page"
            width="720"
            height="405"
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
