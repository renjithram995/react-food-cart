import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';

const MealItemForm = (props) => {
    const [inValidCount, setCountValidity] = useState(false)
    const onSubmithandler = (eve) => {
        eve.preventDefault();
        if (amountRef.current.value > 0 && amountRef.current.value <= 5) {
            props.onAddItem(+amountRef.current.value)
            // amountRef.current.value = 1
        } else {
            setCountValidity(true)
        }

    }
    const amountRef = useRef()
    return <form className={classes.form} onSubmit={onSubmithandler}>
        <Input label="Amount" 
            ref={amountRef}
            input={{
            type: 'number',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ Add</button>
        {inValidCount && <p>Please enter a valid amount (1 - 5)</p>}
    </form>
}
export default MealItemForm;