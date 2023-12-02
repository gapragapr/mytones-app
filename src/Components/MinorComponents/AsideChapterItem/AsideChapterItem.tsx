import { FC, ReactNode, useEffect, useState } from "react";
import SvgWrapper from "../../Assets/SvgWrapper/SvgWrapper";
import { useAppDispatch } from "../../../hook";
import { setCustomPath } from "../../../store/appPathSlice/appPathSlice";
import { useLocation, useNavigate } from "react-router-dom";
import './AsideChapterItem.sass'

type AsideChapterProps = {
    svg: ReactNode,
    chapterName: string,
    asideChapterPath: string
}

const AsideChapterItem: FC<AsideChapterProps> = ({ svg, chapterName, asideChapterPath }) => {
    const dispatch = useAppDispatch();
    const location = useLocation()
    const navigate = useNavigate()

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(location.pathname === asideChapterPath);
    }, [location.pathname, asideChapterPath]);

    const clickAsideChapterItemHandler = () => {
        setIsActive(true);

        window.sessionStorage.setItem('path', asideChapterPath);
        dispatch(setCustomPath(asideChapterPath));
        navigate(asideChapterPath);
    }

    return (
        <li
            onClick={clickAsideChapterItemHandler}
            className={`chapter_item ${isActive ? 'active_chapter_item' : ''}`}
        >
            <SvgWrapper svg={svg} className="chapter_item_svg"/>
            <p className="chapter_item_name">{chapterName}</p>
        </li>
    )
}

export default AsideChapterItem;
