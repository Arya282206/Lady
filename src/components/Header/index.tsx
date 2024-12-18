import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const navigateTo = (path: string) => {
    navigate(path);
    setVisibility(false);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    }
  };

  const MenuItem = () => {
    return (
      <>
        {/* Gunakan kondisional rendering untuk navigasi */}
        {location.pathname === "/login" || location.pathname === "/register" ? (
          // Navigasi langsung untuk halaman login/register
          <>
            <CustomNavLinkSmall onClick={() => navigateTo("/")}>
              <Span>{t("Home")}</Span>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall onClick={() => navigateTo("")}>
              <Span>{t("Course")}</Span>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall onClick={() => navigateTo("")}>
              <Span>{t("Support")}</Span>
            </CustomNavLinkSmall>
          </>
        ) : (
          // Logika scroll untuk halaman utama
          <>
            <CustomNavLinkSmall onClick={() => scrollTo("intro")}>
              <Span>{t("Home")}</Span>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall onClick={() => scrollTo("Course")}>
              <Span>{t("Course")}</Span>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall onClick={() => scrollTo("Support")}>
              <Span>{t("Support")}</Span>
            </CustomNavLinkSmall>
          </>
        )}

        {/* Tombol Login dan Daftar */}
        

          <CustomNavLinkSmall
            onClick={() => navigateTo("/login")}
            style={{ marginLeft: "10px", width: "100px" }}
          >
            <Span>
              <Button>{t("Login")}</Button>
            </Span>
          </CustomNavLinkSmall>
        
          <CustomNavLinkSmall
            onClick={() => navigateTo("/register")}
            style={{ marginLeft: "5px", width: "100px" }}
          >
            <Span>
              <Button>{t("Daftar")}</Button>
            </Span>
          </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
