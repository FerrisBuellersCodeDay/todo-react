import React, {useState, useRef} from 'react';

const NewTask = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const refInput = useRef(null);
    

    const formSubmitHandler = event =>{
        event.preventDefault();
        if  (refInput.current.value.trim().length > 0) {
            setIsValid(true);
            setEnteredValue(refInput.current.value);
            props.addNewTaskHandler(refInput.current.value);
            return;        
        
        }
        setIsValid(false);
                      
    }

    return (      

        <form onSubmit={formSubmitHandler}> 
            <input ref={refInput} type="text"></input>
            <button type="submit"></button>
        </form>

    )

}


export default NewTask;