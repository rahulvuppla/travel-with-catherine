import { useState } from 'react'
import "./stylecontainer.css"

const ContactForm = () => {
  // The selected drink
  const [selectedDrink, setSelectedDrink] = useState<String>();

  // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDrink(event.target.value);
  };
  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
          ></input>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs mb-2"
            htmlFor="grid-password"
          >
            E-mail
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6 ">
        <div className="w-full px-3">
          <fieldset>
            <legend>Is Your Shoot For Business or Personal?</legend>
            <p>
            <input type="radio" name="drink" value="Business" id="Business" onChange={radioHandler}/>
            <label htmlFor="Business">Business</label>
            </p>
            <p>
            <input type="radio" name="drink" value="Personal" id="Personal" onChange={radioHandler}/>
            <label htmlFor="Personal">Personal</label>              </p>
            </fieldset>
            {selectedDrink && <h2>{selectedDrink}</h2>}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6 ">
        <div className="w-full px-3">
          <fieldset>
            <legend>What do you need to shoot?</legend>
            <p>
            <input type="Checkbox" name="drink" value="Business" id="Business" />
            <label htmlFor="Business">Portrait</label>
            </p>
            <p>
              <input type="Checkbox" name="drink" value="Personal" id="Personal" />
              <label htmlFor="Personal">Family</label>             
            </p>
            <p>
              <input type="Checkbox" name="drink" value="Personal" id="Personal" />
              <label htmlFor="Personal">Graduation</label>             
            </p>
            <p>
              <input type="Checkbox" name="drink" value="Personal" id="Personal" />
              <label htmlFor="Personal">Party</label>             
            </p>
            <p>
              <input type="Checkbox" name="drink" value="Personal" id="Personal" />
              <label htmlFor="Personal">Wedding</label>             
            </p>
            <p>
              <input type="Checkbox" name="drink" value="Personal" id="Personal" />
              <label htmlFor="Personal">Engagement</label>             
            </p>
            </fieldset>
        </div>
      </div>
        
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
            htmlFor="grid-password"
          >
            Message
          </label>
          <textarea
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
          ></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="shadow bg-blue-600 hover:bg-blue-400 smooth-transition focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  )
}

export default ContactForm
