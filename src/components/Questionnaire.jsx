import Link from "next/link"
import classes from "@/styles/questionnaire.module.css"

const Questionnaire = (props) => {
    return (
        <div>
            <Link 
                href="#"
                className={`${classes.question_box} ${props.isPriority? classes.question_primary_color: classes.question_normal_color}`}>
                <span className={classes.question_medium_text}>(2022年O月OO日まで)</span>
                <span className={classes.question_medium_text}>～～～に関するアンケート</span>
                <span className={classes.question_small_text}>富島悠介</span>
            </Link>
        </div>
    )
}

export default Questionnaire