import React from "react";
import style from "./style.module.css";
import CoreSet from "../coreSet/CoreSet";
import Qast from "../Qast/Qast";

const data = ["good", "needs improvment", "poor"];
const answer =
  " Largest Contentful Paint (LCP) is an important, stable Core Web Vital metric for measuring perceived load speed because it marks the point in the page load timeline when the pages main content has likely loaded—a fast LCP helps reassure the user that the page is useful.";

export default function Lcp() {
  return (
    <div>
      <CoreSet
        data={data}
        subTitle="(Loading)"
        title="lcp"
        desciprion="Largest Contentful Paint"
        className={style.time}
      />
      <p className={style.desciprion}>
        <span>Largest Contentful Paint (LCP): </span>
        measures loading performance. To provide a good user experience, LCP
        should occur within 2.5 seconds of when the page first starts loading.
      </p>
      <Qast qast="So why LCP importent" answer={answer} />
    </div>
  );
}
