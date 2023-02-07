import { useState } from 'react'

const CustomTip = ({ handleCollapse }) => {
  const [newNotes, setNewNotes] = useState([])

  return (
    <>
      <style jsx>{`
        // .alert {
        //   position: fixed;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100vh;
        //   background-color: rgba(0, 0, 0, 0.2);
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
        //   /* border-radius: 20px; */
        // }

        // .alert-div {
        //   position: relative;
        //   padding: 30px;
        //   width: 100%;
        //   max-width: 640px;
        //   background-color: var(--color-orange);
        //   border-radius: 20px;
        //   font-size: 2.5em;
        //   font-weight: bold;
        //   text-align: center;
        //   border: solid rgb(238, 174, 77);
        //   border-width: 5px;
        // }
        // .alert-btn {
        //   position: absolute;
        //   top: 16px;
        //   right: 16px;
        //   border-radius: 5px;
        //   background-color: silver;
        //   border-style: double;
        //   border-width: 3px;
        //   font-size: 15px;
        //   cursor: pointer;
        // }
      `}</style>
      <div className='alert'>
        <form className='mb-3 alert-div'>
          <input
            type='number'
            id='addnote'
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
          />
          <input type='submit' value='set tip' />
        </form>
        {/* <button className='alert-btn' onClick={handleCollapse}>
          x
        </button> */}
      </div>
    </>
  )
}

export default CustomTip
