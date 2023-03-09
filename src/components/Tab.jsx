import classes from '@/styles/tab.module.css'

const Tab = (props) => {
    return (
        <div className={classes.tab} >
            <span className={classes.tab_text}>
                {props.text}
            </span>
        </div>
    )
}

export default Tab