import React from "react";

// import { useDispatch } from "react-redux";
import Food1 from '../../../src/image/3menu5.png'
import Food2 from '../../../src/image/3menu8.png'
import Food3 from '../../../src/image/3menu1.png'
import Food4 from '../../../src/image/3menu6.png'
import Food5 from '../../../src/image/3menu7.png'
import Food6 from '../../../src/image/3menu3.png';

import Food7 from '../../../src/image/4menu1.png';
import Food8 from '../../../src/image/4menu10.png';




const Item = (props) => {
 
  console.log("propswsss",props.item)
  function AddTable1(prop){
    console.log("addtable",prop)
   alert("Table Selected")
   localStorage.setItem('table',props)
   window.location.reload(false)

  }
  function selected(prop){
    console.log("addtable",prop)
   alert("Already Selected")
   //localStorage.setItem('table',props)
   window.location.reload(false)

  }

  // const dispatch = useDispatch();
  return (
    <div className="col-5 col-md-8 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
      {props.img === "3menu5.png" && (
          <img src={Food1} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu8.png" && (
          <img src={Food2} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu1.png" && (
          <img src={Food3} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu6.png" && (
          <img src={Food4} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu7.png" && (
          <img src={Food5} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu3.png" && (
          <img src={Food6} className="card-img-top img-fluid" />
        )}

        {props.img === "4menu1.png" && (
          <img src={Food7} className="card-img-top img-fluid" />
        )}
        {props.img === "4menu10.png" && (
          <img src={Food8} className="card-img-top img-fluid" />
        )}
        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text"  style={{color:"red"
      }} >PRICE ₹ {props.price}</p>
      </div>
        

      
      {props.status === "booked" && (
        <>
        <img src="" className="card-img-top img-fluid" />
      <button className="btn btn-danger sm" >{props.title} </button>
      </>
      )}
          {props.status === "active" && (
            <>
            <img src="" className="card-img-top img-fluid" />
            {/* <button className="btn btn-success sm" onClick={()=>dispatch(AddTable1({data:props.item}))} >{props.title}</button> */}
            </>
        )}
          
        </div>
      </div>
    
  );
};
export default Item;
