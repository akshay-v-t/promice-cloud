import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex-center h-screen flex-col gap-4">
      <h1 className="h1">ClassName</h1>
      <button className="primary-btn px-5 py-2">Submit</button>
    </div>
  );
}
