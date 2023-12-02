import { FC } from "react";
import Aside from "../../MainComponents/NavigationAside/NavigationAside";
import Header from "../../MainComponents/Header/Header";

import DiscoverAsset from "./assets/Discover/DiscoverAsset";
import ExplorerAsset from "./assets/Explorer/ExplorerAsset";
import SearchAsset from "./assets/Search/SearchAsset";
import MyMusicAsset from "./assets/MyMusic/MyMusicAsset";
import AlbumsAsset from "./assets/Albums/AlbumsAsset";
import ArtistAsset from "./assets/Artists/ArtistsAsset";
import CoverAsset from "./assets/Cover/CoverAsset";
import FavoritesAsset from "./assets/Favorites/FavoritesAsset";
import ShareAsset from "./assets/Share/ShareAsset";
import DownloadsAsset from "./assets/Downloads/DownloadsAsset";

import { Routes, Route } from "react-router-dom";


const MusicPage: FC = () => {
    return(
        <div className="page_container">
            <div className="page">
                <Aside />
                <div className="page_content">
                    <Header />
                    <Routes>
                        <Route path="discover" element={<DiscoverAsset />}/>
                        <Route path="explorer" element={<ExplorerAsset />}/>
                        <Route path="search" element={<SearchAsset />}/>
                        <Route path="my-music" element={<MyMusicAsset />}/>
                        <Route path="albums" element={<AlbumsAsset />}/>
                        <Route path="artists" element={<ArtistAsset />}/>
                        <Route path="cover" element={<CoverAsset />}/>
                        <Route path="favorites" element={<FavoritesAsset />}/>
                        <Route path="shared" element={<ShareAsset />}/>
                        <Route path="downloads" element={<DownloadsAsset />}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default MusicPage