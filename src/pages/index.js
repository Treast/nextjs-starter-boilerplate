import Head from 'next/head';
import Img from 'react-optimized-image';

import Logo from '@/images/Logo.jpg';

import styles from '@/styles/_pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS - Starter Boilerplate</title>
        <link rel='icon' href='/nextjs-starter-boilerplate/favicon.ico' />
      </Head>
      <div className={styles.logo}>
        <Img src={Logo} sizes={[80]} alt="White geometric shapes on a black background, representing Treast's logo. Inspired by the game Journey." />
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
