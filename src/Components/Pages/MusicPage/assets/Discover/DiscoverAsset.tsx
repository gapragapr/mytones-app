import { FC } from "react";

import DiscoverSlider from "../../../../MinorComponents/DiscoverSlider/DiscoverSlider";
import ContentBlockWrapper from "../../../../Assets/ContentBlockWrapper/ContentBlockWrapper";

import './DiscoverAsset.sass'

const DiscoverAsset: FC = () => {

    return (
        <>
            <DiscoverSlider dotsCount={3}>
                <div className="slider_content_block active_slider_content_block">
                    <div className="slider_content_block_floor">
                        <p className="slider_content_block_name">pet-project</p>
                    </div>
                    <div className="slider_content_block_floor">
                        <p className="slider_content_block_text">Mytones - pet-project showcasing most of my skills</p>
                    </div>
                    <div className="slider_content_block_floor">
                        <div className="slider_content_block_buttons">
                            <button className="slider_button">check readme.md</button>
                        </div>
                    </div>
                </div>
                <div className="slider_content_block">
                    <div className="slider_content_block_floor">
                        <p className="slider_content_block_name">Mytones</p>
                    </div>
                    <div className="slider_content_block_floor">
                        <p className="slider_content_block_text">The Mytones layout was taken for free from the Figma Community</p>
                    </div>
                    <div className="slider_content_block_floor">
                        <div className="slider_content_block_buttons">
                            <button className="slider_button">go to Figma</button>
                        </div>
                    </div>
                </div>
                <div className="slider_content_block">
                    <div className="slider_content_block_floor">
                        <p className="slider_content_block_name">Aboute project</p>
                    </div>
                    <div className="slider_content_block_floor">
                        <p className="slider_content_block_text">The project presented me with many difficult tasks, but I tried to implement everything at the highest level I can.</p>
                    </div>
                    <div className="slider_content_block_floor">
                        <div className="slider_content_block_buttons">
                            <button className="slider_button">my Telegram</button>
                        </div>
                    </div>
                </div>
            </DiscoverSlider>

            <ContentBlockWrapper contentBlockWrapperData={[{}]} contentBlockWrapperTitle={'hello'} contentBlockDataDirection="row"/>
        </>
    )
}

export default DiscoverAsset