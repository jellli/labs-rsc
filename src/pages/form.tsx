"use server"
import Form from '../components/form.js'

const FormPage = () => {
  return (
    <article className='prose text-sm'>
      <h2>Form</h2>
      <Form />
    </article>
  )
}

export const getConfig = async () => {
  return {
    render: 'static',
  };
};


export default FormPage