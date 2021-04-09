import Head from 'next/head';

import styles from '@/styles/_pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS - Starter Boilerplate</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>NextJS Boilerplate</h1>
      <pre className={styles.code}>
        <code>
          <span>npx</span> create-next-app <span>my-project</span> --example <span>https://github.com/Treast/nextjs-starter-boilerplate.git</span>
        </code>
      </pre>
    </div>
  );
}
