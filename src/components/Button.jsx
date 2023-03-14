
import classes from "@/styles/button.module.css"

const Button = (props) => {
    return (
        <div className={classes.container}>
            <button
                type={props.type}
                onClick={props.onClick}
                onSubmit={props.onSubmit}
                className={`${classes.button} ${props.primary? classes.primary: classes.dark}`}
            >
                {props.text}
            </button>
        </div>
    )
}

export default Button