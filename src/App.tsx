import "./App.css";
import "./Components/settingsToggle";
import LinkCube from "./Components/linkCube";

function App() {
  const Links = [
    [
      "https://maxroll.gg/poe2/resources/acolyte-of-chayula-ascendancy",
      "https://maxroll.gg/favicon.ico",
      "Maxroll Monk Acendency",
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
      <div className="w-full h-full bg-slate-600 rounded-xl p-5">
        <div className="">
          {Links.map((el) => {
            return <LinkCube icon={el[1]} link={el[0]} />;
          })}
        </div>
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
