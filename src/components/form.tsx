/// <reference types="react/canary" />
/// <reference types="react-dom/canary" />
"use client"
import { useFormStatus } from 'react-dom';

const Actions = () => {
  const { pending } = useFormStatus();
  return pending ? 'Pending...' : <div className='mt-2'>
    <button type="submit" className="rounded-sm bg-black px-2 py-0.5 text-sm text-white mr-2">submit</button>
  </div>
}

const Form = ({ onSubmit }: {
  onSubmit: (formdata: FormData) => void
}) => {

  return (
    <div className='border-blue-400 rounded border border-dashed p-4' >
      <div className='not-prose'>
        <form action={onSubmit}>
          <label htmlFor="title" className='flex flex-col'>
            <span className="font-bold mb-2">Title:</span>
            <input type="text" name="title" className='border p-2 rounded mb-4' />
          </label>
          <label htmlFor="content" className='flex flex-col'>
            <span className="font-bold mb-2">Content:</span>
            <textarea name="content" className='border p-2 rounded' />
          </label>
          <Actions />
        </form>
      </div>
    </div>
  )
}

export default Form