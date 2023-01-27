import dynamic from "next/dynamic";
import Image from "next/image";
import Script from "next/script";
import { lazy, Suspense } from "react";
import { Navigator } from "../components";
import { Routes } from "../models";
import Mustachy from "../public/images/mustachy_.png";
import { mustachyBlur } from "./models";

function App() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <h1>Welcome to Rick and Morty app</h1>
        <h2>What do you want to see ?</h2>
        <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
        <Image
          src={Mustachy}
          blurDataURL={mustachyBlur}
          placeholder="blur"
          alt="Mustachy"
          priority
        />
      </div>
    </>
  );
}
export default App;
