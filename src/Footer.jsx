import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Footers= ()=>{
    return (
        <>
<footer className="page-footer font-small cyan darken-3">
  <div className="container">
    <div className="row">
      <div class="col-md-12 py-5">
        <div Name="mb-5 flex-center">
          <a className="fb-ic">
            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="tw-ic">
            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="gplus-ic">
            <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
         
          <a className="li-ic">
            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="ins-ic">
            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="pin-ic">
            <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-copyright text-center py-3">© 2022 Copyright:
    <a href="/"> VM.com</a>
  </div>
</footer>
        </>
    )
}
export default Footers;