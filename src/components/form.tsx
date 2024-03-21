"use server"
import { getData, publish, saveDraft } from "../libs/article.js"

const Form = () => {
  const data = getData();

  return (
    <div className='border-red-400 rounded border border-dashed p-4' >
      <div>
        <h3>Draft</h3>
        <pre>
          {JSON.stringify(data.draft, null, 2)}
        </pre>
      </div>
      <div>
        <h3>Publish</h3>
        <pre>
          {JSON.stringify(data.article, null, 2)}
        </pre>
      </div>
      <div className=' className="not-prose"'>
        <form action={publish}>
          <label htmlFor="title" className='flex flex-col'>
            <span className="font-bold mb-2">Title:</span>
            <input type="text" name="title" className='border p-2 rounded mb-4' />
          </label>
          <label htmlFor="content" className='flex flex-col'>
            <span className="font-bold mb-2">Content:</span>
            <textarea name="content" className='border p-2' />
          </label>
          <div className='mt-2'>
            <button type="submit" className="rounded-sm bg-black px-2 py-0.5 text-sm text-white mr-2">publish</button>
            <button formAction={saveDraft} className="rounded-sm bg-black px-2 py-0.5 text-sm text-white">save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form