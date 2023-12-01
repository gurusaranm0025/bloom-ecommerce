import NavBar from "@/components/NavBar/NavBar";
import HomeBanner from "@/components/Promotion/HomeBanner";
import SuggestionRow from "@/components/Products/SuggestionRow/SuggestionRow";
import ReviewCarousel from "@/components/Carousel/ReviewCarousel";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HomeBanner />
      <SuggestionRow />
      <SuggestionRow />
      <ReviewCarousel />
      <Footer />
    </main>
  );
}
