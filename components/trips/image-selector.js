
import classes from "./image-selector.module.css";
export default function ImageSelector({ label, name }) {
  
    return (
      <div className={classes.selector}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.options}>
          <input
            className={classes.input}
            type='file'
            id={name}
            accept='image/png, image/jpeg'
            name={name}
          />
          <button
            className={classes.btn}
            type='button'
          >
            Pick an Image
          </button>
        </div>
      </div>
    );
  }