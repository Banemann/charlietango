import Header from './components/Header';
import styles from './styles.module.css'; // Note the updated import path

export const metadata = {
  title: "Home",
  description: "Home page",
}

export default function Home() {
  return (
    <main className={styles.fullHeight}>
      <Header/>

      <div className={styles.contentContainer}>
        

        <form action="/report" className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label className={styles.formLabel} htmlFor="url"/>
            <input className={styles.inputField} type="text" id="url" name="url" placeholder="Enter URL" required></input>
          </div>
          <button className={styles.submitButton} type="submit">
            Check it
          </button>
        </form>

        <div id={styles.scoreBox}>
        <div className={styles.scoreContainer}>
            <h2>A</h2>
          </div>
        <div className={styles.scoreContainer}>
            <h2>B</h2>
          </div>
        <div className={styles.scoreContainer}>
            <h2>C</h2>
          </div>
        <div className={styles.scoreContainer}>
            <h2>D</h2>
          </div>
        <div className={styles.scoreContainer}>
            <h2>E</h2>
          </div>
        <div className={styles.scoreContainer}>
            <h2>F</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
