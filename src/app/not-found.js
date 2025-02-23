import styles from "./not-found.module.css"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className={`${inter.className} ${styles.div}`}>
            <h1>Not Found</h1>
            <h2>The page you requested does not exist.</h2>
            <Link href="/" className={styles.link}>Return to home</Link>
        </div>
    );
}