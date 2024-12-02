function LinkCube(props: { link: string; icon: string }) {
  return (
    <a href={props.link}>
      <img src={props.icon} className="bg-slate-600  w-24 h-24 rounded-xl" />
    </a>
  );
}

export default LinkCube;
