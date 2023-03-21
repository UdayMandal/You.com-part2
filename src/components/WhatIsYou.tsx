import { RiSystemArrowRightSLine } from 'solid-icons/ri'
import { IoNewspaperOutline } from 'solid-icons/io'

let data = [
    "What is You.com?",
    "What kind of search engine is You.com?",
    "Why should I use You.com ?",
    "What are the mission and values of You.com?"
  ];

export default function WhatIsYou() {
  return (
    <>
      <div class=" p:30 b:1|solid|#16167536 r:20 mt:30">
      {data.map((text, ind) => (
          <div
            class="mb:20 flex gap:10 align-items:center"
            key={ind}
          >
            <IoNewspaperOutline  color="#7B61FF" font-size="18"/>
            <p class="f:20 cursor:pointer width:max-content color:blue:hover color:#54595F">{text}</p>
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
