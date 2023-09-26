import React from "react";
import style from "./style.module.css";
import CoreSet from "../coreSet/CoreSet";
import Qast from "../Qast/Qast";
import clsx from "clsx";
import Exempels from "./exempels/Exempels";
import Breakdown from "./breakdown/Breakdown";
import Score from "./score/Score";

const data = ["good", "needs improvment", "poor"];
const LcpEllements = [
  "<img> elements",
  "<image> elements inside an <svg> element",
  "<video> elements with a poster image (the poster image load time is used)",
  "An element with a background image loaded via the url() function (as opposed to a CSS gradient)",
  "Block-level elements containing text nodes or other inline-level text elements children.",
  "The first frame painted for autoplaying <video> elements (as of August 2023)",
  "The first frame of an animated image format, such as animated GIFs (as of August 2023)",
];
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
      <Qast qast="So why LCP importent ?" answer={answer} />
      <h3 className={style.elements__title}>What elements are considered?</h3>
      <ul className={style.ellements__list} role="list">
        {LcpEllements.map((item, index) => {
          return (
            <li className={style.ellement__item} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
      <Exempels />
      <Breakdown />
      <Score />
      <p className={style.desciprion}>
        Of the four sub-parts, two have the word (delay) in their names. That is
        a clue that you want to get these times as close to zero as possible.
        The other two parts involve network requests, which by their very nature
        take time.
      </p>
    </div>
  );
}
