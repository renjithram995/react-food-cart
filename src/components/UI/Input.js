import classes from './Input.module.css'

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label>
            <span>{props.label}</span>
            <input {...props.input}/>
            </label>
        </div>
    )
}
export default Input;