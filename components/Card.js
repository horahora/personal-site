import Image from "next/image";
import Link from "next/link";
// import Tilt from "react-parallax-tilt";
import styles from "./Card.module.css";

export default function Card({
  href,
  src,
  srcset,
  alt,
  placeholder,
  isolated,
}) {
  return placeholder ? (
    <li className={styles.item}>
      <a className={styles.paper}></a>
      <div className={styles.shadow}></div>
    </li>
  ) : (
    <li className={styles.item}>
      {isolated ? (
        <a href={`${href}.html`} className={styles.paper}>
          <img src={src} srcSet={srcset} width="200" height="200" alt={alt} />
        </a>
      ) : (
        <Link href={href}>
          <a className={styles.paper}>
            <img src={src} srcSet={srcset} width="200" height="200" alt={alt} />
          </a>
        </Link>
      )}
      {/*<Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={0}
        glareEnable={true}
        scale={1.05}
        perspective={1000}
      >
      </Tilt>*/}
      <div className={styles.shadow}></div>
    </li>
  );
}
