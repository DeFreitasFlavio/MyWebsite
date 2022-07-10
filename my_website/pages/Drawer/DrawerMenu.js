import { Button, Drawer } from "antd";
import { useState } from "react";
import Image from "next/image";

import WrapperContent, {
  WrapperHome,
  WrapperCV,
  WrapperProjets,
  WrapperExpPro,
  Text,
} from "./DrawerMenu.style";

import Home from "../../public/images/Home.png";
import CV from "../../public/images/cv.png";
import Projets from "../../public/images/projet.png";
import ExperienceProfesionnel from "../../public/images/formation.png";

const DrawerMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="left"
        onClose={onClose}
        visible={visible}
      >
        <WrapperContent>
          <WrapperHome
            onClick={() => {
              window.location = "/";
            }}
          >
            <Image src={Home} width="64" height="64" />
            <Text>Home</Text>
          </WrapperHome>
          <WrapperCV
            onClick={() => {
              window.location = "/";
            }}
          >
            <Image src={CV} width="64" height="64" />
            <Text>CV</Text>
          </WrapperCV>
          <WrapperProjets
            onClick={() => {
              window.location = "/";
            }}
          >
            <Image src={Projets} width="64" height="64" />
            <Text>Projets</Text>
          </WrapperProjets>
          <WrapperExpPro
            onClick={() => {
              window.location = "/";
            }}
          >
            <Image src={ExperienceProfesionnel} width="64" height="64" />
            <Text>Experience Profesionnel</Text>
          </WrapperExpPro>
        </WrapperContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
