import { useForm } from 'react-hook-form'
import './SignUpForm.css'

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const submit = (data) => {
    console.log(data)
  }

  return (
    <div className='formDiv'>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>User Name</label>
          <input
            {...register('username', { required: 'This field is required' })}
            placeholder='Add user name'
          />
        </div>
        <div>
          <label>Email</label>
          <input
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/,
                message: 'Please enter a valid email address'
              }
            })}
            placeholder='Add email'
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            {...register('password', {
              required: 'This field is required',
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                message:
                  'Your password should contain small letters, a capital letter and a number'
              }
            })}
          />
        </div>
        <button>Sign up</button>
      </form>
    </div>
  )
}

export default SignUpForm
