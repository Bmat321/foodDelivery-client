import styles from "@/src/utils/styles";
import { Avatar } from "@nextui-org/react";
import React from "react";
import NavItems from "../NavItems ";
import ProfileDropDown from "../ProfileDropDown ";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full bg-[#0A0713]">
      <div className="w-[90%] m-auto h-[80px] flex items-center justify-between">
        <h1 className={`${styles.logo}`}>FooDeeMat</h1>
        <NavItems />
        <ProfileDropDown />
      </div>
    </header>
  );
};

export default Header;
