import { RiSystemArrowDownSLine } from "solid-icons/ri";
import { FiMenu } from "solid-icons/fi";
import { ImCancelCircle } from "solid-icons/im";
import { createSignal } from "solid-js";
export default function Header() {
  const [showMenu, setShowMenu] = createSignal(false);
  const [showSubMenu, setShowSubMenu] = createSignal(0);
  return (
    <>
      <div class="flex:1 align-items:center background-image:url(https://about.you.com/wp-content/uploads/2022/02/WELCOME-001-copy-scaled.jpeg) grid-cols:12 b:0|solid|red-40 ">
        <div class="grid-col-span:2 flex flex:wrap ai:center jc:start px:15px">
          <img
            width={130}
            src="https://about.you.com/wp-content/uploads/2022/08/HORIZONTAL-RGB-001-2048x985.png"
            alt="test"
          />
        </div>
        <div class="grid-col-span:8 display:flex@>=md  display:none@<md flex:wrap jc:center ">
          <nav class="font:10@<sm font:16@>=sm flex bb:0|solid|fade-88 gap:20@<sm gap:40@>=sm">
            <div class="dropdown py:35  cursor:pointer">
              <div class="flex gap:8 align-items:center ">
                <p class="font-weight:bold">Help Center</p>
                <RiSystemArrowDownSLine font-size="20" />
              </div>
              <div class=" display:none dropdown-content mt:35 position:absolute bg:white z-index:1 shadow:0|1|5|0 fade-10">
                <a href="#">FAQ</a>
                <a href="#" class="by:1|solid|fade-88">
                  Privacy and Data Protection at You.com
                </a>
                <a href="#">About YouBot</a>
              </div>
            </div>
            <div class="dropdown py:35 cursor:pointer">
              <div class="flex gap:8 align-items:center">
                <p class="font-weight:bold">Guides</p>
                <RiSystemArrowDownSLine font-size="20" />
              </div>
              <div class=" display:none dropdown-content mt:35 position:absolute bg:white z-index:1 shadow:0|1|5|0 fade-10">
                <a href="#">Make You.com Your Default Search Engine</a>
                <a href="#" class="by:1|solid|fade-88">
                  Customizing You.com
                </a>
                <a href="#">Using !Bangs Shortcuts</a>
              </div>
            </div>
            <div class="dropdown py:35 cursor:pointer">
              <div class="flex gap:8 align-items:center">
                <p class="font-weight:bold">Blog</p>
              </div>
            </div>
            <div class="dropdown py:35 cursor:pointer">
              <div class="flex gap:8 align-items:center">
                <p class="font-weight:bold">Developers</p>
                <RiSystemArrowDownSLine font-size="20" />
              </div>
              <div class=" display:none dropdown-content mt:35 position:absolute bg:white z-index:1 shadow:0|1|5|0 fade-10">
                <a href="#">Documentation</a>
                <a href="#" class="bt:1|solid|fade-88">
                  Developer Community
                </a>
              </div>
            </div>
            <div class="dropdown py:35 cursor:pointer">
              <div class="flex gap:8 align-items:center">
                <p class="font-weight:bold">App Store</p>
              </div>
            </div>
          </nav>
        </div>
        <div class="grid-col-span:8 display:flex@<md  display:none@=>md jc:center">
          {showMenu() ? (
            <ImCancelCircle
              font-size="30"
              class="cursor:pointer"
              onClick={() => setShowMenu(!showMenu())}
            />
          ) : (
            <FiMenu
              font-size="30"
              class="cursor:pointer"
              onClick={() => setShowMenu(!showMenu())}
            />
          )}
        </div>
        <div class="grid-col-span:2 flex flex:wrap ai:center jc:end px:15px">
          <button class="inline-flex center-content font:17   font:white bg:blue  min-width:105  py:8  r:20 b:0 cursor:pointer">
            Sign Up
          </button>
        </div>
      </div>
      {showMenu() && (
        <nav class="font:16 flex flex-direction:column align-items:center bb:0|solid|fade-88 px:20 ">
          <div
            class="bb:2|solid|fade-88 width:100% py:20 flex flex:col align-items:center"
            onClick={() => setShowSubMenu(1)}
          >
            <div class="flex gap:8 align-items:center justify-content:center ">
              <p class="font-weight:bold">Help Center</p>
              <RiSystemArrowDownSLine font-size="20" />
            </div>
          </div>
          {showSubMenu() === 1 && (
            <>
              <div class="bb:2|solid|fade-88 width:100% py:20 flex flex:col align-items:center">
                <p>FAQ</p>
              </div>
              <div class="bb:2|solid|fade-88 width:100% py:20 flex flex:col align-items:center">
                <p> Privacy and Data Protection at You.com</p>
              </div>
              <div class="bb:2|solid|fade-88 width:100% py:20 flex flex:col align-items:center">
                <p> About YouBot</p>
              </div>
            </>
          )}
          
          <div
            class="bb:2|solid|fade-88 width:100% py:20 flex flex:col align-items:center"
            onClick={() => setShowSubMenu(2)}
          >
            <div class="flex gap:8 align-items:center ">
              <p class="font-weight:bold">Guides</p>
              <RiSystemArrowDownSLine font-size="20" />
            </div>
          </div>
          {showSubMenu() === 2 && (
            <>
              <div class="bb:2|solid|fade-88 width:100% py:20 flex flex:col align-items:center">
                <p>Make You.com Your Default Search Engine</p>
              </div>
              <div class="bb:2|solid|fade-88 width:100% py:20 flex flex:col align-items:center">
                <p> Customizing You.com</p>
              </div>
              <div class="bb:2|solid|fade-88 width:100% py:20 flex flex:col align-items:center">
                <p> Using !Bangs Shortcuts</p>
              </div>
            </>
          )}
          <div
            class="bb:2|solid|fade-88 width:100% py:20 flex flex:col align-items:center"
          >
            <div class="flex gap:8 align-items:center ">
              <p class="font-weight:bold">Blog</p>
            </div>
          </div>
          <div
            class="bb:2|solid|fade-88 width:100% py:20 flex flex:col align-items:center"
            onClick={() => setShowSubMenu(3)}
          >
            <div class="flex gap:8 align-items:center ">
              <p class="font-weight:bold">Developers</p>
              <RiSystemArrowDownSLine font-size="20" />
            </div>
          </div>
          {showSubMenu() === 3 && (
            <>
              <div class="bb:2|solid|fade-88 width:100% py:20 flex flex:col align-items:center">
                <p>Documentation</p>
              </div>
              <div class="bb:2|solid|fade-88 width:100% py:20 flex flex:col align-items:center">
                <p> Developer Community</p>
              </div>
             
            </>
          )}
            <div
            class="bb:2|solid|fade-88 width:100% py:20 flex flex:col align-items:center"
          >
            <div class="flex gap:8 align-items:center ">
              <p class="font-weight:bold">App Store</p>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
