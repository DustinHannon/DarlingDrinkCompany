import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Press from "@/components/Press";
import BookUs from "@/components/BookUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Press />
        <BookUs />
      </main>
      <Footer />
    </>
  );
}
