import NavBar from "@/components/NavBar/NavBar";
import HomeBanner from "@/components/Promotion/HomeBanner";
import SuggestionRow from "@/components/Products/SuggestionRow/SuggestionRow";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HomeBanner />
      <SuggestionRow />
      <SuggestionRow />
    </main>
  );
}
