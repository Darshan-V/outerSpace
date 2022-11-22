const Loader = ({ title }) => (
  <div className="loading_container">
    <h2>Loading</h2>
    <h1 className="loading">{title || 'Loading...'}</h1>
  </div>
)

export default Loader
