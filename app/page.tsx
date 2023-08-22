
import Link from "next/link";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Music from "./components/Music";
import "./globals.css";


export default function Home() {
  return (
    <main className=" bg-[#141A1F]">
      <Link href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@300;400;500;600;700&family=Lato:wght@100;300;400;700&display=swap"/>
      <Header />
      <Menu/>
      <Music/>
      
    </main>
  );
}
