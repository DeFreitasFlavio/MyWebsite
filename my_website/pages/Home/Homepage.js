import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Drawer from "../Drawer/DrawerMenu";

// import styles
import WrapperContent, { Text } from "./Homepage.style";

// import utilities

const HomePage = () => {
  return (
    <WrapperContent>
      <Drawer />
      <Text>Hello World!</Text>
    </WrapperContent>
  );
};
export default HomePage;
