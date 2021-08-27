import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

interface OwnProps {
  children: React.ReactNode;
}

type Props = OwnProps;
const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="ml-4 mr-4">
      <NavBar />
      <div className="flex flex-row max-w-screen-2xl mx-auto">
        <div className="m-w-3xl ml-4">
          <SideBar />
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
