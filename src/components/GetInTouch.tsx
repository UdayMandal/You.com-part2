import { RiSystemArrowRightSLine } from 'solid-icons/ri'
import { IoNewspaperOutline } from 'solid-icons/io'

let data = [
    "Do you have a press contact?",
    "Are you hiring? How can I join the team?",
   
  ];

export default function GetInTouch() {
  return (
    <>
      <h1 class="text:center direction:ltr my:50 pt:30 color:#2E2F30">Get In Touch</h1>
      <div class=" p:30 b:1|solid|#16167536 r:20">
      {data.map((text, ind) => (
          <div
            class="mb:20 flex gap:10 align-items:center "
            key={ind}
          >
            <IoNewspaperOutline color="#54595F" />
            <p class="f:20 cursor:pointer width:max-content color:#54595F">{text}</p>
          </div>
        ))}
     
       
        <button class="cursor:pointer mt:25 px:25 py:15 r:50  b:1|solid|#2F5DF4 f:16 f:#2F5DF4 bg:#fff flex align-items:center"> <p>Explore More </p><RiSystemArrowRightSLine />  </button>
      </div>
    </>
  );
}
