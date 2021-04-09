import Head from 'next/head';
import Image from '@/components/Image';

import styles from '@/styles/_pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS - Starter Boilerplate</title>
        <link rel='icon' href='/nextjs-starter-boilerplate/favicon.ico' />
      </Head>
      <div className={styles.logo}>
        <Image src='Logo.jpg' />
      </div>
      <h1>NextJS Boilerplate</h1>
      <pre className={styles.code}>
        <code>
          <span>npx</span> create-next-app <span>my-project</span> --example <span>https://github.com/Treast/nextjs-starter-boilerplate</span>
        </code>
      </pre>
    </div>
  );
}
