

const Test = (props) => {
    console.log('props',props);

   

    return (
        <div id='title' className='new-expense__control'>
            <label>title</label>
            <input type='text' value={props.value} placeholder='Title' onChange={props.titleChangeHandler} />
        </div>

    )
}

export default Test