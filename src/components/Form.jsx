
import classes from "@/styles/form.module.css"

const Form = (props) => {
    return (
    <form className={classes.container}>
        {props.children}
    </form>
    )
}

export default Form