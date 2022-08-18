import "./Seller.css";
import {Link} from 'react-router-dom';
export default function Seller(props){
    const data = ['product 1','product 2','product 3','product 4']
    return (
        <div>
            <div className="container d-flex justify-content-center mt-5">

                <div className="card1">
                    
                    <div className="top-container">
                        
                        <img src="https://www.fakepersongenerator.com/Face/male/male1085275986175.jpg" class="img-fluid profile-image" width="70"/>
                        
                        <div className="ml-3">
                            <h5 className="name">Clarke Jeffery</h5>
                            <p className="mail">clark@zmail.com</p>
                        </div>
                        <Link to = '/AddProduct'><button className='addbtn'>Add Products</button></Link>
                    </div>


                    <div className="recent-border mt-4">
                        <h5 className="phone-number">Phone Number</h5>
                    </div>
                    <div className="wishlist-border pt-2">
                        <h6>9678364826</h6>
                    </div>
                    <div className="fashion-studio-border pt-2">
                        <h5 className="adress">Store Name</h5>
                    </div>

                    <div className="fashion-studio-border pt-2">
                        <h6>Gitanjali</h6>
                    </div>
                    <div className="fashion-studio-border pt-2">
                        <h5 className="adress">Store Address</h5>
                    </div>

                    <div className="fashion-studio-border pt-2">
                        <h6> BTM layout , Koramangala , Hosur road , PIN 560095</h6>
                    </div>
                    
                    <div className="wishlist-border pt-2">
                        <h5 className="gender">Your Products</h5>
                    </div>
                    
                    <div>
                        {data.map(element=>{

                            return(
                                <div className="products">
                                    <div className="wishlist-border pt-2">
                                        <h6>{element}</h6>
                                    </div>
                                    <div >
                                        <button className="edit-product"> Edit </button>
                                    </div>
                                    <div >
                                        <button className="delete-product"> Delete </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    
                    
                </div>

            </div>

        </div>
    );
}