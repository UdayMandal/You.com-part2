import { RiSystemArrowRightSLine, RiCommunicationQuestionnaireFill } from "solid-icons/ri";
import { IoNewspaperOutline } from "solid-icons/io";
// import { RiCommunicationQuestionnaireFill } from 'solid-icons/ri'
let data = [
  "Why should I use You.com ?",
  "What You.com apps are currently available?",
  "What kind of search engine is You.com?",
  "What is You.com?",
  "What are the mission and values of You.com?",
  "How is You.com carbon neutral?",
  "How does You.com protect my privacy?",
  "How does You.com make money?",
  "How does You.com compare to other search engines?",
  "How does You.com choose what sources to display under Preferred Sources?",
];

export default function FrequentlyAskedQuestions() {
  return (
    <>
      <h1 class="text:center direction:ltr my:50 pt:30 color:#2E2F30">
        Frequently Asked Questions
      </h1>
     
      <div class=" p:30 b:1|solid|#16167536 r:20">
      <div class="flex gap:30 pb:15 mb:35 align-items:center border-bottom:2|solid|#8E0AE9">
        <RiCommunicationQuestionnaireFill  size={30}  color="blue"/>
        <h2 class="color:blue font-weight:400">FAQ</h2>
      </div>
        {data.map((text, ind) => (
          <div
            class="mb:20 flex gap:10 align-items:center "
            key={ind}
          >
            <IoNewspaperOutline  color="#54595F"/>
            <p class="f:20 cursor:pointer width:max-content color:#54595F">{text}</p>
          </div>
        ))}
        <button class="cursor:pointer mt:25 px:25 py:15 r:50  b:1|solid|#2F5DF4 f:16 f:#2F5DF4 bg:#fff flex align-items:center"> 
          <p>Explore More </p>
          <RiSystemArrowRightSLine />
        </button>
      </div>
    </>
  );
}
