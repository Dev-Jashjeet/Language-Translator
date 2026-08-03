import react from 'react'
import 'remixicon/fonts/remixicon.css'
import './App.css'

export default function App() {

  return(
    <div className='h-screen flex flex-col justify-center items-center bg-gray-300'>
      <div className='grid grid-cols-2 w-screen place-items-center'>
        {/* Div1 */}
        <div className='flex flex-col gap-5 border-2 border-blue-900 p-10 rounded-[20px] w-150 bg-gray-200'>
          <h1 className='text-blue-800 text-3xl font-bold tracking-wide underline underline-offset-8'>Translator</h1>
          <textarea placeholder='Enter your vichaar' className='placeholder:text-gray-400 border border-blue-900 focus:outline-none rounded-xl p-3' rows={5}>

          </textarea>
          <select className='border border-blue-900 outline-none text-xl text-blue-800 p-3 rounded-xl font-medium'>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="punjabi">Punjabi</option>
            <option value="marathi">Marathi</option>
            <option value="german">German</option>
          </select>
          <button className='text-white text-xl bg-blue-500 rounded-xl p-3 outline-none w-fit transition hover:bg-blue-600 cursor-pointer'>
            <i className="ri-translate-2 m-1"></i>
            Translate
          </button>
        </div>
        {/* Div2 */}
        <div className=' bg-gray-200 border-2 border-blue-900 rounded-[20px] h-full w-150'>
          <div className='rounded-[20px] flex justify-end pr-3 pt-2'>
            <i className="ri-file-copy-line text-blue-800 text-2xl cursor-pointer"></i>
          </div>
          <div className='mt-5 p-2 text-xl text-blue-900'>
            sjhjsh
          </div>
        </div>
      </div>
    </div>
  )
}
