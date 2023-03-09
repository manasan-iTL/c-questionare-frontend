import Link from "next/link"
import classes from '@/styles/linkButton.module.css'


const LinkButton = (props) => {
    return (
        <div className={`${classes.link_button_outer} ${props.isAbsolute? classes.float_button: ""}`}>
            <Link href={props.link} className={classes.link_button_inner}>
                {props.text}
            </Link>
        </div>
    )
}

export default LinkButton