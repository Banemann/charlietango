import Back from "../../app/components/Back";
import { useRouter } from 'next/router';
import styles from "./Rules.module.css";

const RuleSingles = {
  'area-alt': {
    id: 'Area-alt',
    description: 'Ensures <area> elements of image maps have alternate text',
    impact: 'Critical',
    issueType: 'Failure, needs review'
  },
  'aria-allowed-attr': {
    id: 'Aria-allowed-attr',
    description: "Ensures an element's role supports its ARIA attributes",
    impact: 'Critical',
    issueType: 'Failure, needs review'
  },
  'aria-braille-equivalent': {
    id: 'Aria-braille-equivalent',
    description: 'Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent',
    impact: 'Serious',
    issueType: 'Needs review'
  }
};

const RuleSingle = () => {
  const router = useRouter();
  const { rule } = router.query;
  const detail = RuleSingles[rule] || { id: 'Not Found'};

  return (
    <main>
        <Back/>
      <div className={styles.singleContainer}>
      <h2>{detail.id}</h2>
      <h3>Description</h3>
      <p>{detail.description}</p>
        <h3>Impact</h3>
      <p>{detail.impact}</p>
        <h3>Issue Type</h3>
      <p>{detail.issueType}</p>
      </div>
    </main>
  );
};

export default RuleSingle;
