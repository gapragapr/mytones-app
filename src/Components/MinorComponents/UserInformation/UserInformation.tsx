import { FC } from "react";
import SvgWrapper from "../../Assets/SvgWrapper/SvgWrapper";
import DownArrowSvg from '../../../assets/svg/downArrowSvg.svg?react'
import './UserInformation.sass'

const UserInformation: FC = () => {
    return (
        <div className="user_information_wrapper">
            <div className="user_avatar_container">
                <img src="" alt="" className="user_avatar" />
            </div>
            <p className="user_name">Ryan Azhari</p>
            <SvgWrapper svg={<DownArrowSvg />} className="" onClick={() => {}}/>
        </div>
    )
}

export default UserInformation