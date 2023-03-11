import classes from "@/styles/postArea.module.css"

const PostArea = (props) => {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}

export default PostArea