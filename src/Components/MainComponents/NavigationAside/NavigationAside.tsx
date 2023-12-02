import { FC } from "react";

import AsideChapterItem from "../../MinorComponents/AsideChapterItem/AsideChapterItem";

import logo from '../../../assets/img/logo.png'

import HomeSvg from '../../../assets/svg/homeSvg.svg?react'
import ExplorerSvg from '../../../assets/svg/explorerSvg.svg?react'
import SearchSvg from '../../../assets/svg/searchSvg.svg?react'
import MelodySvg from '../../../assets/svg/melodySvg.svg?react'
import AlbumsSvg from '../../../assets/svg/albumsSvg.svg?react'
import PersonSvg from '../../../assets/svg/personSvg.svg?react'
import HeadphonesSvg from '../../../assets/svg/headphonesSvg.svg?react'
import FillLikeSvg from '../../../assets/svg/fillLikeSvg.svg?react'
import ShareSvg from '../../../assets/svg/shareSvg.svg?react'
import DownloadSvg from '../../../assets/svg/downloadSvg.svg?react'
import SettingsSvg from '../../../assets/svg/settingsSvg.svg?react'
import LogoutSvg from '../../../assets/svg/logoutSvg.svg?react'
import './NavigationAside.sass'


const Aside: FC = () => {

    return(
        <div className="aside_container">
            <aside>
                <div className="logo_wrapper">
                    <img src={logo} alt="Mytones" />
                </div>
                <div className="aside_chapter">
                    <h2 className="aside_chapter_name">Menu</h2>
                    <AsideChapterItem svg={<HomeSvg />} chapterName="Discover" asideChapterPath="/music/discover"/>
                    <AsideChapterItem svg={<ExplorerSvg />} chapterName="Explorer" asideChapterPath="/music/explorer"/>
                    <AsideChapterItem svg={<SearchSvg />} chapterName="Search" asideChapterPath="/music/search"/>
                </div>
                <div className="aside_chapter">
                    <h2 className="aside_chapter_name">Library</h2>
                    <AsideChapterItem svg={<MelodySvg />} chapterName="My Music" asideChapterPath="/music/my-music"/>
                    <AsideChapterItem svg={<AlbumsSvg />} chapterName="Albums" asideChapterPath="/music/albums"/>
                    <AsideChapterItem svg={<PersonSvg />} chapterName="Artists" asideChapterPath="/music/artists"/>
                </div>
                <div className="aside_chapter">
                    <h2 className="aside_chapter_name">Playlist</h2>
                    <AsideChapterItem svg={<HeadphonesSvg />} chapterName="Cover" asideChapterPath="/music/cover"/>
                    <AsideChapterItem svg={<FillLikeSvg />} chapterName="Favorites" asideChapterPath="/music/favorites"/>
                    <AsideChapterItem svg={<ShareSvg />} chapterName="Shared" asideChapterPath="/music/shared"/>
                    <AsideChapterItem svg={<DownloadSvg />} chapterName="Downloads" asideChapterPath="/music/downloads"/>
                </div>
                <div className="aside_chapter">
                    <h2 className="aside_chapter_name">Others</h2>
                    <AsideChapterItem svg={<SettingsSvg />} chapterName="Settings" asideChapterPath="user/settings"/>
                    <AsideChapterItem svg={<LogoutSvg />} chapterName="Logout" asideChapterPath="user/logout"/>
                </div>
            </aside>
        </div>
    )
}

export default Aside