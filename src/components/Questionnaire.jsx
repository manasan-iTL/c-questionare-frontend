import Link from "next/link"
import classes from "@/styles/questionnaire.module.css"
import { useCallback, useMemo } from "react"

const Questionnaire = (props) => {

    const time = useMemo(() => {
        const time = props.closed_at.split("-")
        return time
    }, [props.closed_at])

    return (
        <div>
            <Link 
                href="#"
                className={`${classes.question_box} ${props.isPriority? classes.question_primary_color: classes.question_normal_color}`}>
                <span className={classes.question_medium_text}>({time[0]}年{time[1]}月{time[2]}日まで)</span>
                <span className={classes.question_medium_text}>{props.title}</span>
                <span className={classes.question_small_text}>{props.author}</span>
            </Link>
        </div>
    )
}

export default Questionnaire