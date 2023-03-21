import { Title } from "solid-start";
import Counter from "~/components/Counter";
import Footer from "~/components/Footer";
import FrequentlyAskedQuestions from "~/components/FrequentlyAskedQuestions";
import GetInTouch from "~/components/GetInTouch";
import Header from "~/components/Header";
import HowCanWeHelp from "~/components/HowCanWeHelp";
import NeedMoreHelp from "~/components/NeedMoreHelp";
import WhatIsYou from "~/components/WhatIsYou";

export default function Home() {
  return (
    <div>
      <Header/>
      <main class="max-width:md mx:auto my:50 px:10">
        <div class="b:1|solid|#16167536 r:20 p:15@<=sm p:30@>=sm">
          <HowCanWeHelp />
          <WhatIsYou />
          <FrequentlyAskedQuestions />
          <GetInTouch />
          <NeedMoreHelp />
        </div>
        <Footer />
      </main>
    </div>
  );
}
