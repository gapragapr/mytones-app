import { FC } from "react";
import HeaderNavLink from "./HeaderNavLink/HeaderNavLink";
import './HeaderNavLinks.sass'

const HeaderNavLinks: FC = () => {
    return (
        <nav className="header_nav_links">
            <HeaderNavLink navLinkText="Music" />
            <HeaderNavLink navLinkText="Podcast" />
            <HeaderNavLink navLinkText="Radio" />
            <HeaderNavLink navLinkText="Live" />
        </nav>
    )
}

export default HeaderNavLinks