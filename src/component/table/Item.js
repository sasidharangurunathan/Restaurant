import React from "react";
import { useCart } from "react-use-cart";
import Table1 from '../../../src/image/4MemberTable.jpg';
import Table2 from '../../../src/image/3menu8.png';
import Table3 from '../../../src/image/3menu1.png';
import Table4 from '../../../src/image/3menu6.png';
import Table5 from '../../../src/image/3menu7.png';
import Table6 from '../../../src/image/3menu3.png';

import Table7 from '../../../src/image/4menu1.png';
import Table8 from '../../../src/image/4menu10.png';
// import { useDispatch } from "react-redux";


  

const Item=(props)=>{
  const { addItem } = useCart();
  console.log("propswsss",props.item)
  // const dispatch = useDispatch();

  function AddTable1(prop){
    console.log("addtable",prop)
   alert("order Selected")
   addItem(prop)
  
  //  localStorage.setItem('table',props)
   window.location.reload(false)

  }
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
      {props.img === "3menu5.png" && (
          <img src={Table1} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu8.png" && (
          <img src={Table2} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu1.png" && (
          <img src={Table3} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu6.png" && (
          <img src={Table4} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu7.png" && (
          <img src={Table5} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu3.png" && (
          <img src={Table6} className="card-img-top img-fluid" />
        )}

        {props.img === "4menu1.png" && (
          <img src={Table7} className="card-img-top img-fluid" />
        )}
        {props.img === "4menu10.png" && (
          <img src={Table8} className="card-img-top img-fluid" />
        )}
        
        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text"  style={{color:"red"
      }} >SAR {props.price}</p>
         <button class="btn btn-success" onClick={() =>AddTable1(props.item) }>
        
        Add to Cart
      </button>
        </div>
      </div>
    </div>
  );
};
export default Item;
