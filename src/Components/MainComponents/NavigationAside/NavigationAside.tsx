import { FC } from "react";
import AsideChapterItem from "../../MinorComponents/AsideChapterItem/AsideChapterItem";
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
                    <img src='./src/assets/img/logo.png' alt="Mytones" />
                </div>
                <div className="aside_chapter">
                    <h2 className="aside_chapter_name">Menu</h2>
                    <AsideChapterItem svg={<HomeSvg />} chapterName="Discover"/>
                    <AsideChapterItem svg={<ExplorerSvg />} chapterName="Explorer"/>
                    <AsideChapterItem svg={<SearchSvg />} chapterName="Search"/>
                </div>
                <div className="aside_chapter">
                    <h2 className="aside_chapter_name">Library</h2>
                    <AsideChapterItem svg={<MelodySvg />} chapterName="My Music"/>
                    <AsideChapterItem svg={<AlbumsSvg />} chapterName="Albums"/>
                    <AsideChapterItem svg={<PersonSvg />} chapterName="Artists"/>
                </div>
                <div className="aside_chapter">
                    <h2 className="aside_chapter_name">Playlist</h2>
                    <AsideChapterItem svg={<HeadphonesSvg />} chapterName="Cover"/>
                    <AsideChapterItem svg={<FillLikeSvg />} chapterName="Favorites"/>
                    <AsideChapterItem svg={<ShareSvg />} chapterName="Shared"/>
                    <AsideChapterItem svg={<DownloadSvg />} chapterName="Downloads"/>
                </div>
                <div className="aside_chapter">
                    <h2 className="aside_chapter_name">Others</h2>
                    <AsideChapterItem svg={<SettingsSvg />} chapterName="Settings"/>
                    <AsideChapterItem svg={<LogoutSvg />} chapterName="Logout"/>
                </div>
            </aside>
        </div>
    )
}

export default Aside