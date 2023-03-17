
import classes from "@/styles/inputField.module.css"

const InputField = (props) => {

    console.log(props.value)

    return (
        <div className={classes.container}>
            <label htmlFor={props.name} className={classes.input_label}>{props.label}</label>
            <input 
                type={props.type} 
                onChange={props.onChange}
                value={props.value}
                id={props.name}
                name={props.name}
                className={classes.input_item}
            />
        </div>
    )
}

export default InputField