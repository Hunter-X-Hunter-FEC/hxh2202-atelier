import React from 'react';
import Star from './Star.jsx';
var ProductCard = (props)=>{
  return (
	<div >
		<div className="">
				<div className="">
					<div className="">
						<img src="" alt="" className=""/>
						<span className="">
							Product Category
						</span>
					</div>
				</div>
				<div className = "">
						<h5 className="name">
							<a href="#">Product Name ></a>
						</h5>
						<p className="">
							<span>Product Price</span>
						</p>
						<span className=""></span>
				</div>
				<div className="">
					<div className="">
						<div className="">
							<div className="rating">Rating:
								<Star />

								{/* <label for="stars-rating-5"><i className="fa fa-star text-danger"></i></label>
								<label for="stars-rating-4"><i className="fa fa-star text-danger"></i></label>
								<label for="stars-rating-3"><i className="fa fa-star text-danger"></i></label>
								<label for="stars-rating-2"><i className="fa fa-star text-warning"></i></label>
								<label for="stars-rating-1"><i className="fa fa-star text-warning"></i></label> */}
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
  )
};
export default ProductCard;