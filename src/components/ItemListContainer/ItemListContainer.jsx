import './ItemListContainer.css';

export const ItemListContainer = ( { name, price } ) => {
  return (
    <div className='d-flex justify-content-center'>
      <div className="card">
        <div className="card-body text-center">
          <p className='img-temp'>*Imagen*</p>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  )
}
