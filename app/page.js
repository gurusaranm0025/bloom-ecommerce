import NavBar from "@/components/NavBar/NavBar";
import HomeBanner from "@/components/Promotion/HomeBanner";
import SuggestionRow from "@/components/Products/SuggestionRow/SuggestionRow";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HomeBanner />
      <SuggestionRow />
      <SuggestionRow />
      <Carousel />
    </main>
  );
}
