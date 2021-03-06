import { useEffect, useRef } from "react";
import styles from "./AboutMe.module.css";
import utilStyles from "../styles/utils.module.css";
import { Briefcase, Envelope, Placemark } from "framework7-icons/react";

export default function AboutMe() {
  const handRef = useRef();

  useEffect(() => {
    // console.log(handRef.current);
    // handRef.current.classList.add(styles.transparent);
    // window.addEventListener(
    //   "scroll",
    //   function () {
    //     if (
    //       handRef.current &&
    //       handRef.current.getBoundingClientRect().top +
    //         handRef.current.offsetHeight / 4 <
    //         window.innerHeight
    //     ) {
    //       handRef.current.classList.add(styles.handAnimation);
    //     }
    //   },
    //   { passive: true }
    // );
    if (!!window.IntersectionObserver) {
      handRef.current.classList.add(styles.transparent);
      const observer = new IntersectionObserver(
        (entrys, observer) => {
          entrys.forEach((entry) => {
            if (entry.isIntersecting) {
              const elem = entry.target;
              elem.classList.add(styles.handAnimation);
              observer.unobserve(elem);
            }
          });
        },
        {
          threshold: 0.25,
        }
      );
      observer.observe(handRef.current);
    }
  }, []);

  return (
    <section className={styles.aboutMe}>
      <div className={styles.inner} ref={handRef}>
        <div className={`${styles.content} ${utilStyles.allowSelect}`}>
          <picture>
            <source
              srcSet="/images/avatar-landscape.jpg, /images/avatar-landscape@2x.jpg 2x, /images/avatar-landscape@3x.jpg 3x"
              media="(max-width: 440px)"
              width="150"
              height="100"
            />
            <img
              className={styles.avatar}
              src="/images/avatar-portrait.jpg"
              srcSet="/images/avatar-portrait@2x.jpg 2x, /images/avatar-portrait@3x.jpg"
              width="100"
              height="150"
              alt="??????"
            />
          </picture>
          <div className={styles.textWrapper}>
            <h1>?????????</h1>
            <ul>
              <li>
                <Briefcase aria-labelledby="??????" className={styles.icon} />
                Web??????/?????????
              </li>
              <li>
                <Placemark aria-label="??????" className={styles.icon} />
                ?????? ??????
              </li>
              <li>
                <Envelope className={styles.icon} />
                <a href="mailto:contact@horahora.com">contact@horahora.com</a>
              </li>
              {/*<li>
              ?????????????????????Web??????
            </li>*/}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
