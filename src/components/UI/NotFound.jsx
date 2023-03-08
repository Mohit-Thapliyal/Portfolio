import {IoWarning} from 'react-icons/io5'
const NotFound = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
        <p className='flex items-center gap-1 text-2xl text-tertiary'><IoWarning className='text-3xl'/>Page Not Found!</p>
    </div>
  )
}

export default NotFound