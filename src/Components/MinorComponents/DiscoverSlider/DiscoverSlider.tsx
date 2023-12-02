import { FC, ReactNode, useEffect, useState } from "react";
import './DiscoverSlider.sass';

type SliderProps = {
    dotsCount: number,
    children: ReactNode
}

const DiscoverSlider: FC<SliderProps> = ({ dotsCount, children }) => {
    const [activeDotIndex, setActiveDotIndex] = useState(0);
    const [sliderContentBlocks, setSliderContentBlocks] = useState<any[]>([])

    useEffect(() => {
        let sliderContentBlocksArray = Array.from(document.querySelectorAll('.slider_content_block'))
        setSliderContentBlocks(sliderContentBlocksArray)
    }, [])

    // const sliderContentBlocks = Array.from(document.querySelectorAll('.slider_content_block'))

    const clickSliderDotHandler = (index: number) => {
        sliderContentBlocks[activeDotIndex].classList.remove('active_slider_content_block')
        setActiveDotIndex(index);
        sliderContentBlocks[index].classList.add('active_slider_content_block')
    }

    return (
        <div className="slider_container">
            <div className="slider_content">
                {children}
            </div>
            <div className="slider_dots">
                {Array.from({ length: dotsCount }, (_, index) => (
                    <span
                        key={index}
                        className={`slider_dot ${index === activeDotIndex ? 'active_slider_dot' : ''}`}
                        onClick={() => clickSliderDotHandler(index)}
                    ></span>
                ))}
            </div>
        </div>
    )
}

export default DiscoverSlider;
