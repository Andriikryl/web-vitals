import React from "react";
import style from "./style.module.css";
import CoreSet from "../coreSet/CoreSet";

const data = ["good", "needs improvment", "poor"];

export default function Lcp() {
  return (
    <div>
      <CoreSet
        data={data}
        subTitle="(Loading)"
        title="lcp"
        desciprion="Largest Contentful Paint"
        className={style.test}
      />
    </div>
  );
}
