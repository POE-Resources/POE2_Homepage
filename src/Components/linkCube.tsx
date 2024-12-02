function LinkCube(props: {
  link: string;
  icon: string;
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-center items-center w-fit ${props.className}`}
    >
      <a href={props.link}>
        <img src={props.icon} className="bg-slate-700  w-24 h-24 rounded-xl" />
      </a>
      <p className="text-white text-center">{props.text}</p>
    </div>
  );
}

export default LinkCube;
