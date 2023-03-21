import { FaBrandsFacebook } from "solid-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "solid-icons/ai";

export default function Footer() {
  let testData = [
    {
      title: "Contact us",
      data: [
        "Send feedback",
        "Join Community",
        "Terms",
        "Privacy",
        "We are hiring",
      ],
    },
    {
      title: "Learn more",
      data: [
        "Getting started",
        "Blog",
        "Help Center",
        "FAQ",
        "iOS App",
        "Android App",
        "Developer Docs",
      ],
    },
    {
      title: "Features",
      data: [
        "Private search",
        "App Store",
        "YouCode",
        "YouStudy",
        "YouSocial",
        "Bangs",
      ],
    },
  ];
  return (
    <div class=" grid-cols:1 grid-cols:4@sm mt:50 ">
      {testData.map((item: any) => {
        return <CommonFooterBox data={item} />;
      })}
      <div class="flex flex:wrap jc:center@<=sm jc:end gap:10 ">
        <div class="w:30 h:30 bg:#CCCCCC  bg:blue:hover cursor:pointer r:10 flex justify-content:center align-items:center">
          <FaBrandsFacebook color="#fff" font-size="18" />
        </div>
        <div class="w:30 h:30 bg:#CCCCCC  bg:blue:hover cursor:pointer r:10 flex justify-content:center align-items:center">
          <AiOutlineTwitter color="#fff" font-size="18" />
        </div>
        <div class="w:30 h:30 bg:#CCCCCC  bg:blue:hover cursor:pointer r:10 flex justify-content:center align-items:center">
          <AiFillYoutube color="#fff" font-size="18" />
        </div>
      </div>
    </div>
  );
}
function CommonFooterBox({ data }: any) {
  return (
    <div key={data.title}  class="mb:50@<=md">
      <h3 class="font:14@<sm font:16@>=sm text:center@<=sm text:start ">
        {data.title}
      </h3>
      {data.data.map((item: string) => {
        return (
          <p
            class="font:12@<sm font:14@>=sm text-fill:blue-60 text:center@<=sm text:start mt:20 cursor:pointer "
            key={item}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
}
