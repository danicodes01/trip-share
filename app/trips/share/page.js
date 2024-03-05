export default function ShareTripPage () {
  return (
    <>
      <header>
        <p>Share Trip Page</p>
      </header>
      <main>
        <form>
          <div>
            <p>
              <label htmlFor='name'>name</label>
              <input type='text' id='name' name='name' />
            </p>
            <p>
              <label>email</label>
              <input type='email' id='email' name='email' />
            </p>
          </div>
          <p>
            <label>title</label>
            <input type='text' id='title' name='title' />
          </p>
          <p>
            <label>summary</label>
            <input type='text' id='summary' name='summary' />
          </p>
          <p>
            <label>description</label>
            <textarea id='description' name='description' rows={10} />
          </p>
        </form>
      </main>
    </>
  )
}
