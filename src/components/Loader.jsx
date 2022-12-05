import { DoubleOrbit } from 'react-spinner-animated'
import 'react-spinner-animated/dist/index.css'

const Loader = ({ title }) => (
  <div className="loading_container">
    <h2>Loading</h2>
    <DoubleOrbit
      text={'Loading...'}
      center={false}
      width={'150px'}
      height={'150px'}
    />
  </div>
)

export default Loader
