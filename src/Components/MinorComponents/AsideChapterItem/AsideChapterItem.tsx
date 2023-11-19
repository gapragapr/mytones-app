import { FC, ReactNode } from "react";
import SvgWrapper from "../../Assets/SvgWrapper/SvgWrapper";
import './AsideChapterItem.sass'

type AsideChapterProps = {
    svg: ReactNode,
    chapterName: string
}

const AsideChapterItem: FC<AsideChapterProps> = ({svg, chapterName}) => {

    const clickAsideChapterItemHandler: any = (target: HTMLElement) => {
        const activeChapterItem = document.querySelector('.active_chapter_item')

        activeChapterItem?.classList.remove('active_chapter_item')
        target.classList.add('active_chapter_item')

    }

    return (
        <li onClick={(e) => clickAsideChapterItemHandler(e.currentTarget)} className="chapter_item">
            <SvgWrapper svg={svg} className="chapter_item_svg" onClick={() => {}}/>
            <p className="chapter_item_name">{chapterName}</p>
        </li>
    )
}

export default AsideChapterItem