import { FC } from "react"

import ContentBlockItem from "../../MinorComponents/ContentBlockItem/ContentBlockItem"

type ContentBlockWrapperProps = {
    contentBlockWrapperTitle: string,
    contentBlockWrapperData: Array<object>
    contentBlockDataDirection: 'column' | 'row'
}

const ContentBlockWrapper: FC<ContentBlockWrapperProps> = ({contentBlockWrapperTitle, contentBlockWrapperData, contentBlockDataDirection}, props) => {
    return(
        <div className={`content_block_wrapper ${contentBlockDataDirection}`}>
            <div className='content_block_wrapper_floor'>
                <p className="content_block_wrapper_title">{contentBlockWrapperTitle}</p>
                {props.children}
            </div>
            <div className="content_block_wrapper_floor">
                {contentBlockWrapperData.map((item, index) => {
                    return (<ContentBlockItem key={index} contentBlockData={item}/>)
                })}
            </div>
        </div>
    )
}

export default ContentBlockWrapper