import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Core from "@/components/core/Core";

export default function Home() {
  return (
    <>
      <Hero />
      <Core />
    </>
  );
}
