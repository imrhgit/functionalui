import { useState, } from 'react'

const useForm = (submitHandler: ((a: any) => Promise<any>)) => {
  // const [input, setInput] = useState<{ [key: string]: any }>({})
  const [input, setInput] = useState<any>({})

  const handleChange = (e: any) => {
    e.persist();

    setInput((state: any) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await submitHandler(input);
  }

  return [input, handleChange, handleSubmit, setInput]
}

export default useForm
