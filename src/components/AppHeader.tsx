interface AppHeaderProps {
  title: string;
}

function AppHeader({ title }: AppHeaderProps): JSX.Element {
  return (
    <>
      <button onClick={() => console.log(title.toUpperCase())}>
        capitalise title
      </button>
      <h1>{title}</h1>
    </>
  );
}

export default AppHeader;
