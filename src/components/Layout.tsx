import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

interface OwnProps {
  children: React.ReactNode;
}

type Props = OwnProps;
const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div className="flex flex-row max-w-screen-2xl mx-auto">
        <div className="m-w-3xl">
          <SideBar />
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </>
  );
};

export default Layout;
