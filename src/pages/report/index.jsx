import Header from "../../app/components/Header";
import Image from "next/image";
import styles from './Report.module.css';
import Link from 'next/link';

export const revalidate = 1800;

export async function getServerSideProps(context) {
  const params = new URLSearchParams(context.query);
  params.set('tags', 'wcag21a,wcag21aa,best-practice,ACT');
  
  try {
    const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return { props: { data: null, error: 'Failed to fetch data.' } };
  }
}



function calculateGrade(violationsCount) {
  const grades = ['A', 'B', 'C', 'D', 'E', 'F'];

  const index = Math.floor(violationsCount / 2);

  
  if (index >= grades.length) {
    return 'F'; 
  }

  return grades[index];
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
            width={1200}
            height={data.screenshot.height * 1200 / data.screenshot.width}
            priority
          />
        </div>
        <div className={styles.violationsCount}>
          <p>Found {data.violations.length} violations</p>
        </div>
        <div className={styles.violationsContainer}>
          {violations.map((violation, index) => (
           <Link target="_blank" rel="noopener noreferrer" key={index} href={`/rules/${violation.id}`}> 
           <article key={index} className={styles.violationCard}>
              <p><strong>ID:</strong> {violation.id}</p>
              <p><strong>Impact:</strong> {violation.impact}</p>
              <p><strong>Description:</strong> {violation.description}</p>
            </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}


            
               
          
      
