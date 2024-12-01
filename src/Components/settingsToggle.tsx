import { CogIcon } from "./icons";

function SettingsToggle(props: {
  className?: string;
  toggle: {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
  };
}) {
  const { toggle } = props;

  const clickFN = () => {
    toggle.setState(!toggle.state);
    return;
  };
  return (
    <>
      <div className={props.className}>
        <div onClick={clickFN}>
          <CogIcon />
        </div>
      </div>
    </>
  );
}

export default SettingsToggle;
