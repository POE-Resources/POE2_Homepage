import "./App.css";
import "./Components/settingsToggle";
import LinkCube from "./Components/linkCube";

function App() {
  const Links = [
    [
      "https://poe2db.tw/us/",
      "https://web.poecdn.com/protected/image/favicon/poe2/favicon.ico?key=z1ntMm_mlpgr2cNrStO09g",
      "POE2 DB",
    ],
    [
      "https://marcoaaguiar.github.io/poe2-tree/",
      "https://marcoaaguiar.github.io/poe2-tree/skill-tree.png",
      "POE2 Interactive Skilltree",
    ],
    [
      "https://poe2skills.com/",
      "https://poe2skills.com/images/favicon.ico",
      "POE2 Interactive Skill Builder",
    ],
    [
      "https://www.reddit.com/r/PathOfExile2/",
      "https://www.redditstatic.com/shreddit/assets/favicon/64x64.png",
      "POE2 Reddit",
    ],
  ];

  return (
    <>
      <div className="bg-slate-500 w-screen h-screen flex flex-col">
        <div className="w-full flex justify-center items-center flex-shrink">
          <iframe
            src="https://www.pathofexile.com/#countdown"
            className="w-[47%] h-64 rounded-xl mt-5"
          />
        </div>
        <div className="w-full flex-grow flex justify-center gap-10 p-5">
          <div className="flex-grow">
            <LinkContainer Links={Links} />
          </div>
          <iframe
            src="https://poe2db.tw/us/#news"
            className="w-1/4 rounded-xl"
          />
        </div>
      </div>
    </>
  );
}

const LinkContainer = (props: { Links: string[][] }) => {
  const { Links } = props;
  return (
    <>
      <div className="w-full h-full bg-slate-600 rounded-xl p-5 grid grid-cols-7 place-items-center">
        {Links.map((el) => {
          return (
            <LinkCube
              icon={el[1]}
              link={el[0]}
              text={el[2]}
              className="self-start"
            />
          );
        })}
      </div>
    </>
  );
};

// const SettingsPage = (props: { show: boolean }) => {
//   return (
//     <>
//       <div
//         className={`absolute w-screen h-screen bg-slate-600 ${
//           props.show ? "block" : "hidden"
//         }`}
//       >
//         <p className="text-white">Settings</p>
//       </div>
//     </>
//   );
// };

export default App;
