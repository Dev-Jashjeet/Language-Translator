import react, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './App.css'
import type React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const API_KEY: string = "AQ.Ab8RN6IZVZAx0pDgk6jk46SGkzI5epX-dFEfp_a16eeGpKJYdA";

export default function App() {
  const [text, setText] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [result, setResult] = useState<string>('Your translated result here...');
  const [loader, setLoader] = useState<boolean>(false);

  const handleSubmit = async (): Promise<void> => {
    if(text === "") {
      toast.error("Write something to translate", {
        pauseOnHover: false,
        autoClose: 700
      });
      return;
    }
    setLoader(true);
    try {
        const res = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent", {
        contents: [{
          parts: [{
            text: `Just translate this ${text} text into ${language} dont write anything else pure translation only I make language translator`
          }]
        }]
      }, {
        headers: {
          "X-goog-api-key": API_KEY
        }
      });
      setResult(res.data.candidates[0].content.parts[0].text);
    } catch(err) {
      if(err instanceof Error) {
        toast.error(err.message, {
          pauseOnHover: false,
          autoClose: 700
        });
      }
    } finally {
      setLoader(false);
    }
  }

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    return toast.success("Copied", {
      pauseOnHover: false,
      autoClose: 700
    });
  }

  return(
    <div className='h-screen flex flex-col justify-center items-center bg-gray-300'>
      <div className='grid grid-cols-2 w-screen place-items-center'>
        {/* Div1 */}
        <div className='flex flex-col gap-5 border-2 border-blue-900 p-10 rounded-[20px] w-150 bg-gray-200'>
          <h1 className='text-blue-800 text-3xl font-bold tracking-wide underline underline-offset-8'>Translator</h1>
          <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value.trim())} placeholder='Enter your language' className='placeholder:text-gray-400 border border-blue-900 focus:outline-none rounded-xl p-3' rows={5}>

          </textarea>
          <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLanguage(e.target.value)} className='border border-blue-900 outline-none text-xl text-blue-800 p-3 rounded-xl font-medium'>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="punjabi">Punjabi</option>
            <option value="marathi">Marathi</option>
            <option value="german">German</option>
          </select>
          <button disabled={loader} onClick={handleSubmit} className='text-white text-xl bg-blue-500 rounded-xl p-3 outline-none w-fit transition disabled:bg-blue-300 hover:bg-blue-600 cursor-pointer'>
            <i className="ri-translate-2 m-1"></i>
            Translate
          </button>
        </div>
        {/* Div2 */}
        <div className=' bg-gray-200 border-2 border-blue-900 rounded-[20px] h-full w-150'>
          <div className='rounded-[20px] flex justify-end pr-3 pt-2'>
            <i onClick={copyResult} className="ri-file-copy-line text-blue-800 text-2xl cursor-pointer"></i>
          </div>
          <div className='mt-5 p-2 text-xl text-blue-900'>
            {result}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
