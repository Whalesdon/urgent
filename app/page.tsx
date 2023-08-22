
import Header from "./components/Header";
import Menu from "./components/Menu";
import Music from "./components/Music";
import "./globals.css";


export default function Home() {
  return (
    <main className=" bg-[#141A1F]">
      <Header />
      <Menu/>
      <Music/>
      
    </main>
  );
}
