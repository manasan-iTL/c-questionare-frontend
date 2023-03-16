import classes from "@/styles/headingLabel.module.css"


const HeadingLabel = (props) => {
    return (
        <div>
            <h2 className={`${classes.label} ${props.isWhite? classes.white: classes.gray}`}>{props.text}</h2>
        </div>
    )
}

export default HeadingLabel