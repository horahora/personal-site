import { ParallaxProvider } from "react-scroll-parallax";
import HeadlineScrollShimmer from "../components/HeadlineScrollShimmer.js";
import TextSpread from "../components/TextSpread.js";
// import MediaCover from "../components/MediaCover.js";
// import TextScale from "../components/TextScale.js";
import styles from "./scroll-parallax.module.css";

export default function ScrollParallax() {
  return (
    <ParallaxProvider>
      <div className={styles.pageRoot}>
        {/*<div style={{ height: "500px" }}></div>*/}
        {/*<TextScale />*/}
        <div style={{ height: "50vh" }}></div>
        <div style={{ height: "90vh" }}>
          <TextSpread text="Spread" />
        </div>

        <HeadlineScrollShimmer>
          滚动，
          <br />
          闪烁文字。
        </HeadlineScrollShimmer>
        <div style={{ height: "90vh" }}></div>

        {/*<MediaCover />*/}
      </div>
    </ParallaxProvider>
  );
}
