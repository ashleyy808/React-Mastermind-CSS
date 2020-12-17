import styles from './ColorPicker.module.css';

/*
function handleClick() {
  alert('clicked')            *** another way to envoke an 'onClick' event listener by breaking the logic out in separate functions
}
*/


const ColorPicker = (props) => (
  <div className={styles.ColorPicker}>
    {props.colors.map((color, idx)=> 
      <button 
        className={styles.button}
        style={{
          backgroundColor: idx === props.selColorIdx ? 'white' : color,
          borderColor: color
        }} 
        key={color} 
        onClick={() => props.setColorIdx(idx)}
       // onClick={(event) => console.log(event)}    we've updated the event clicker because of the update we made in colorPicker in App.js
        //onClick={() => alert('Clicked')}
        //onClick={handleClick}    *** another way to envoke an 'onClick' event listener
      />
    )}
  </div>
);

export default ColorPicker;
