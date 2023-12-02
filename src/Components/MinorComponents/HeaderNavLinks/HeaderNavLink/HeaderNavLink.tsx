import { FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import './HeaderNavLink.sass'

type NavLinkProps = {
    navLinkText: string
}

const HeaderNavLink: FC<NavLinkProps> = ({navLinkText}) => {

    const location = useLocation();
    const navLinkRef = useRef<HTMLLIElement>(null)

    useEffect(() => {
        location.pathname.includes(`/${navLinkText.toLowerCase()}/`) ? navLinkRef.current?.classList.add('active_nav_link_item') : null
    }, [])



    const clickHeaderNavLinkHandler = (target: HTMLElement) => {
        // const activeNavLnk = document.querySelector('.active_nav_link_item')

        // activeNavLnk?.classList.remove('active_nav_link_item')
        // target.classList.add('active_nav_link_item')
    }

    return (
        <li ref={navLinkRef} onClick={(e) => clickHeaderNavLinkHandler(e.currentTarget)} className="nav_link_item_container">
            <p className="nav_link">{navLinkText}</p>
        </li>
    )
}

export default HeaderNavLink