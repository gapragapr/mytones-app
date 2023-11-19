import { FC, ReactNode} from "react";
import './SvgWrapper.sass'

type SvgProps = {
    svg: ReactNode,
    className: string,
}

const SvgWrapper: FC<SvgProps> = ({svg, className}) => {

    return (
        <div className={`svg_wrapper ${className}`}>
            {svg}
        </div>
    )
}

export default SvgWrapper