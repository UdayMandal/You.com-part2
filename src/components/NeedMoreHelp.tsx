import { Title } from "solid-start";
import { BiRegularMessageRoundedDots } from "solid-icons/bi";
import { FaBrandsFacebook,FaBrandsDiscord } from "solid-icons/fa";
import { AiOutlineTwitter, AiFillYoutube ,AiFillLinkedin } from "solid-icons/ai";
import { TiMessages } from "solid-icons/ti";

export default function NeedMoreHelp() {
  return (
    <div>
      <h1 class="text:center direction:ltr my:50 pt:30 color:#2E2F30">
        Need More Help?
      </h1>
      <div class="flex flex:col flex:row@md  gap:50 ">
        <div class="p:30 b:1|solid|#16167536 r:20 w:full">
          <h2 class="color:#2E2F30">Contact Support</h2>
          <p class=" mt:20 f:18 line-height:1.5 cursor:pointer  color:#54595F">
            Tell us about your problem and we’ll help you find a solution.
          </p>
          <div class="flex gap:10 align-items:center mt:90">
            <BiRegularMessageRoundedDots color="#2F5DF4" font-size="25" />
            <p class="color:#54595F font-weight:600">Email us at hey@you.com</p>
          </div>
        </div>
        <div class="p:30 b:1|solid|#16167536 r:20 w:full">
          <h2 class="color:#2E2F30">Join you.com Community</h2>
          <p class=" mt:20 f:18 line-height:1.5 cursor:pointer  color:#54595F">
            Connect with other Yousers and industry professionals to provide
            feedback, ask questions of the team, and contribute to making the
            search experience better for everyone.
          </p>
          <div class="flex gap:10 align-items:center mt:40">
            <TiMessages color="#2F5DF4" font-size="25" />
            <p class="color:#54595F font-weight:600">Join YouClub</p>
          </div>
        </div>
      </div>
      <div class="mt:50 mb:40 flex flex:col flex:row@md gap:30 align-items:center">
        <p class="ml:200@md color:#54595F font-weight:600">Follow us:</p>
        <div class="flex gap:10">
          <div class="bg:#2F5DF4 w:25 height:25 r:50 flex align-items:center justify-content:center cursor:pointer">
            <FaBrandsFacebook color="white" />
          </div>
          <div class="bg:#2F5DF4 w:25 height:25 r:50 flex align-items:center justify-content:center cursor:pointer">
            <AiOutlineTwitter color="white" />
          </div>
          <div class="bg:#2F5DF4 w:25 height:25 r:50 flex align-items:center justify-content:center cursor:pointer">
            <AiFillYoutube color="white" />
          </div>
          <div class="bg:#2F5DF4 w:25 height:25 r:50 flex align-items:center justify-content:center cursor:pointer">
            <AiFillLinkedin color="white" />
          </div>
          <div class="bg:#2F5DF4 w:25 height:25 r:50 flex align-items:center justify-content:center cursor:pointer">
            <FaBrandsDiscord color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
