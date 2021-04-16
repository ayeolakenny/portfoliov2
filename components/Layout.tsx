import Header from "./Header";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="w-full">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
