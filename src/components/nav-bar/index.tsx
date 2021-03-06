import { useEffect, useState } from "react";
import { Nav, NavAvatar, NavContent, NavLogo } from "./styles";
import AvatarPic from "../../icons/avatar.png";

export default function NavBar() {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
  const handleOnClickAvatar = () => {
    window.open("https://github.com/ShaBax/netflix-clone", "_blank");
  };
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setIsBackgroundVisible(true);
    } else {
      setIsBackgroundVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav isBackgroundVisible={isBackgroundVisible}>
      <NavContent>
        <NavLogo to={"/"} />
        <NavAvatar src={AvatarPic} onClick={handleOnClickAvatar} />
      </NavContent>
    </Nav>
  );
}
