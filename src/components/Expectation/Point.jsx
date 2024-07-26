/* eslint-disable react/prop-types */

import { useMemo } from "react"

import ProblemIcon from "../../assets/problem-icon.svg"
import SolutionIcon from "../../assets/solution-icon.svg"

import "./Point.css"

const Point = ({ _item_type, _text }) => {
    const icon_source = useMemo(() => {
        if (_item_type === "problem") {
            return ProblemIcon
        } else if (_item_type === "solution") {
            return SolutionIcon
        }
    }, [_item_type])

    return (
        <div className="point">
            <img width={"20px"} height={"20px"} src={icon_source} alt={`${_item_type}-icon`} />
            <p className="text">{_text}</p>
        </div>
    )
}

export default Point
