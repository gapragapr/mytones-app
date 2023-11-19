import { FC } from "react";
import './HeaderNavLink.sass'

type NavLinkProps = {
    navLinkText: string
}

const HeaderNavLink: FC<NavLinkProps> = ({navLinkText}) => {

    const clickHeaderNavLinkHandler = (target: HTMLElement) => {
        const activeNavLnk = document.querySelector('.active_nav_link_item')

        activeNavLnk?.classList.remove('active_nav_link_item')
        target.classList.add('active_nav_link_item')
    }

    return (
        <li onClick={(e) => clickHeaderNavLinkHandler(e.currentTarget)} className="nav_link_item_container">
            <p className="nav_link">{navLinkText}</p>
        </li>
    )
}

export default HeaderNavLink