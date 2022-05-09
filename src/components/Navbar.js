import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <div className="bg-secondary p-3 ">
            <div className="row">
                <div className="col-4">
                <h4> <Link to={"/"} className='text-decoration-none text-light'>Ecommerce</Link></h4> 
                </div>
                <div className="col-4 text-light">
                        Hi, User!
                </div>
                <div className="col-4">
                       <button className='btn btn-danger'>Logout</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar;