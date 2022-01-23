import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>allows iframe</title>
        <meta name="description" content="allows iframe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h6 className={styles.iconTitle}>iFrame Service</h6>
        <h1 className={styles.title}>Will it open in an iFrame?</h1>
        <article className={styles.article}>
          <p>
            Not every site can be placed in an iFrame! Web developers might indicate in their response headers the site should not render in an iFrame.
          </p>
          <p>
            All modern browsers will adhere to this request. An error message will be shown.
            Use this service to pre-check if the given url will open in an iFrame.
          </p>
          <p>
            Verify if a given site can be opened in an iFrame or if it will be blocked. Call the API with the given URL and receive JSON object in return
          </p>
        </article>

      </main>

    </div>
  )
}
