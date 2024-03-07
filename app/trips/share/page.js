import ImageSelector from '@/components/trips/image-selector'
import classes from './page.module.css'
import {create} from '../../../lib/actions'
export default function ShareTripPage () {
  return (
    <>
      <header className={classes.header}>
        <p><span>share</span> your favorite memories</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={create}>
          <div className={classes.rows}>
            <p>
              <label htmlFor='name'>name</label>
              <input type='text' id='name' name='name' />
            </p>
          <p>
            <label>title</label>
            <input type='text' id='title' name='title' />
          </p>
          </div>
          <p>
            <label>summary</label>
            <input type='text' id='summary' name='summary' />
          </p>
          <p>
            <label>description</label>
            <textarea id='description' name='description' rows={10} />
          </p>
          <ImageSelector label='image' name='image' />
          <p className={classes.submit}>
            <button type="submit">submit</button>
          </p>
        </form>
      </main>
    </>
  )
}
