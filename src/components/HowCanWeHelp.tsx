import {
  FaSolidLocationDot,
} from "solid-icons/fa";
import {
  AiOutlineSearch,
} from "solid-icons/ai";

export default function HowCanWeHelp() {
  return (
    <div>
      <h1 class="text:center direction:ltr my:50 font-size:42 font-weight:500  color:#2E2F30">
        How Can We Help?
      </h1>
      <div class="flex jc:center">
        <div class="flex gap:10 bg:#F5F5F7 mb:60 r:50 px:30 py:15 w:100%@<=xs w:80%@>xs">
          <AiOutlineSearch font-size="30" color="#2F5DF4" />
          <input
            placeholder="Search the help center"
            class="border:none width:100% f:15 f:20@xs bg:#F5F5F7"
          />
        </div>
      </div>
      <div class="flex flex:col flex:row@md  gap:50  ">
        <div class="p:30 b:1|solid|#16167536 r:20 w:full">
          <div class="flex flex:col flex:row@md justify-content:center align-items:center gap:30">
            <div class="bg:#2F5DF4 min-w:60 max-w:60  height:60 r:50 flex align-items:center justify-content:center cursor:pointer">
              <FaSolidLocationDot color="white" font-size="40" />
            </div>
            <div>
              <h2 class="color:#2E2F30 text-align:center text-align:start@md">Getting Started</h2>
              <p class=" mt:20 f:18 line-height:1.5 cursor:pointer text-align:center text-align:start@md  color:#54595F">
                Everything you need to get the most out of your search on
                you.com
              </p>
            </div>
          </div>
        </div>
        <div class="p:30 b:1|solid|#16167536 r:20 w:full">
          <a href="https://www.youtube.com/watch?v=b9HViDxn3ng" target="_blank">
            <img
              src="https://about.you.com/wp-content/uploads/2022/02/Julia-blue-cover-for-landing-page-1024x576.png"
              alt=" lady"
              width="100%"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
