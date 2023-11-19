import { FC } from "react";
import SvgWrapper from "../../Assets/SvgWrapper/SvgWrapper";
import SearchSvg from '../../../assets/svg/searchSvg.svg?react'
import './SearchInput.sass'


const SearchInput: FC = () => {

    const clickSearchInputSvgHandler: any = () => {
        console.log('hello')
        return
    }
    
    return (
        <div className="search_input_wrapper">
            <input type="text" className="search_input" placeholder="Search..."/>
            <SvgWrapper svg={<SearchSvg />} className="search_input_svg" onClick={clickSearchInputSvgHandler} />
        </div>
    )
}

export default SearchInput