import classes from "@/styles/headingLabel.module.css"


const HeadingLabel = (props) => {
    return (
        <div>
            <h2 className={classes.label}>{props.text}</h2>
        </div>
    )
}

export default HeadingLabel