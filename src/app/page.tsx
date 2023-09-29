import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Core from "@/components/core/Core";
import Resources from "@/components/resoursec/Resources";
import Ttfb from "@/components/ttfb/Ttfb";
import Cls from "@/components/cls/Cls";
import Fid from "@/components/fid/Fid";

export default function Home() {
  return (
    <>
      <Hero />
      <Core />
      <Ttfb />
      <Cls />
      <Fid />
      <Resources />
    </>
  );
}
