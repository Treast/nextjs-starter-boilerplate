import styles from '@/styles/_components/Image.module.scss';
import { useEffect, useRef, useState } from 'react';

const requireImage = require.context('@/images/', false, /\.(jpg|png|svg)$/);
const requireWebpImage = require.context('@/images/?webp', false, /\.(jpg|png|svg)$/);
const requireLQIPImage = require.context('@/images/?lqip', false, /\.(jpg|png|svg)$/);
const requireResizeImage = require.context(
  '@/images/?resize&sizes[]=640&sizes[]=768&sizes[]=1024&sizes[]=1366&sizes[]=1600&sizes[]=1920',
  false,
  /\.(jpg|png|svg)$/
);

export default function Image({ src, webp = false, lqip = false }) {
  const path = './' + src;

  const [isLoaded, setLoaded] = useState(false);

  const refImage = useRef();

  useEffect(() => {
    if (refImage.current) {
      if (refImage.current.complete) {
        setLoaded(true);
      }
      refImage.current.addEventListener('load', () => {
        setLoaded(true);
      });
    }
  }, [refImage]);

  return (
    <picture className={styles.container}>
      <source type='image/webp' src={requireWebpImage(path)} />
      <source srcSet={requireResizeImage(path).srcSet} />
      <img src={requireImage(`${path}`)} ref={refImage} alt='' />
      {!isLoaded && <img src={requireLQIPImage(`${path}`)} className={styles.placeholder} alt='' />}
    </picture>
  );
}
