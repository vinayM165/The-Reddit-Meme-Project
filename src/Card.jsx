import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Cards(prop) {
  return (
    <>
  <div className="m-3 card">
  <img className="card-img-top" src={prop.img} alt="Card image cap"/>
  <div className="d-inline card-body d-flex ">
    <img className='mt-2 pb-3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZnlPDjo2GNkZl-BX2KtxL2G1fEnpSM_YaZQ&usqp=CAU' height="30" widhth="40" alt=""/>
    <p className="mt-2 card-text">{prop.title}</p>
    {/* <a href="#" className="btn btn-secondary">Share</a> */}
  </div>
</div>
    </>
  );
}

export default Cards;
