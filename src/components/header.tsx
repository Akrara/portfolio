import styles from '@/styles/header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <a>
            <h1>Next.js Blog</h1>
          </a>
        </Link>
      </div>
    </header>
  );
}