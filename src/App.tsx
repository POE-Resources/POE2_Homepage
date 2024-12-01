import { useState } from "react";
import "./App.css";
import "./Components/settingsToggle";
import SettingsToggle from "./Components/settingsToggle";

function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <SettingsPage show={showSettings} />
      <div className="bg-slate-500 w-screen h-screen flex flex-col">
        <div className="w-full flex justify-center items-center flex-shrink">
          <iframe
            src="https://www.pathofexile.com/#countdown"
            className="w-[47%] h-64"
          />
        </div>
        <div className="w-full bg-yellow-600 flex-grow flex justify-center gap-10 p-5">
          <div className="bg-purple-100 flex-grow rounded-xl">A</div>
          <div className="bg-purple-200 flex-grow rounded-xl">B</div>
          {/* <div className="bg-purple-300 flex-grow rounded-xl">C</div> */}
          <iframe src="https://poe2db.tw/us/#news" className="w-1/4" />
        </div>
      </div>
      <SettingsToggle
        className="absolute top-5 right-5"
        toggle={{ state: showSettings, setState: setShowSettings }}
      />
    </>
  );
}

const SettingsPage = (props: { show: boolean }) => {
  return (
    <>
      <div
        className={`absolute w-screen h-screen bg-slate-600 ${
          props.show ? "block" : "hidden"
        }`}
      >
        <p className="text-white">Settings</p>
      </div>
    </>
  );
};

export default App;
