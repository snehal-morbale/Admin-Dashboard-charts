import SinglePage from '../../components/singlePage/SinglePage'
import { singleProduct } from '../../data'
import './Product.scss'

const Product = () => {

//   Fetch data & send to SinglePage Component
  return (
    <div className='product'>
        <SinglePage {...singleProduct}/>
    </div>
  )
}

export default Product