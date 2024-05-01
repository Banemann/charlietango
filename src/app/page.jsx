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
      </div>
    </main>
  );
}
