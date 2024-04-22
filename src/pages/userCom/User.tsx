import SinglePage from '../../components/singlePage/SinglePage'
import { singleUser } from '../../data'
import './User.scss'

const User = () => {
  //   Fetch data & send to SinglePage Component
  return (
    <div className='user'>
        <SinglePage {...singleUser}/>
    </div>
  )
}

export default User