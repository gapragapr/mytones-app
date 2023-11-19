import { FC } from "react";
import HeaderNavLinks from "../../MinorComponents/HeaderNavLinks/HeaderNavLinks";
import SearchInput from "../../MinorComponents/SearchInput/SearchInput";
import SvgWrapper from "../../Assets/SvgWrapper/SvgWrapper";
import NotificationSvg from '../../../assets/svg/notificationSvg.svg?react'
import UnFillLikeSvg from '../../../assets/svg/unFillLike.svg?react'
import UserInformation from "../../MinorComponents/UserInformation/UserInformation";
import './Header.sass'


const Header: FC = () => {
    return(
        <header>
            <HeaderNavLinks />
            <SearchInput />
            <div className="header_svg_container">
                <SvgWrapper svg={<UnFillLikeSvg />} className="like_svg header_svg"/>
                <SvgWrapper svg={<NotificationSvg />} className="notification_svg header_svg"/>
            </div>
            <UserInformation />
        </header>
    )
}

export default Header