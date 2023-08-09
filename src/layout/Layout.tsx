type Layout = {
  children: JSX.Element[] | JSX.Element;
};

const Layout = ({ children }: Layout) => {
  return <div className="container max-w-full overflow-hidden">{children}</div>;
};

export { Layout };
