import { FC } from "react";
import TopWeekly from "../../MinorComponents/TopWeekly/TopWeekly";
import Player from "../Player/Player";


const MusicInfoAside: FC = () => {


    return (
        <aside className="music_info_aside">
            <TopWeekly/>
            <Player />
        </aside>
    )
}

export default MusicInfoAside