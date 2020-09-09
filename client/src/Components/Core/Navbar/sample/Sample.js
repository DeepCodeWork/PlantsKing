import React, { useRef } from 'react';
import './Sample.module.css';
import Classes from './Sample.module.css';
import login from '../../../../assets/images/login.jpg'

const Navb = () => {

    const toggle = useRef(null);
    return(
    <div className={Classes.body}>

        <input className={Classes.toggleBtn} type="checkbox" id="check"/>
        <header>
            <label className={Classes.label} for="check">
                <i className={"fas fa-bars "+Classes.sidebarBtn} style={{color:"white"}} id="sidebarBtn"></i>
            </label>
            <div className={Classes.leftArea}>
                <h3>Plants <span>King</span></h3>
            </div>
            <div className={Classes.rightArea}>
                <a href="#" className={Classes.logoutBtn}>Logout</a>
            </div>


            <div className={Classes.sidebar}>
                <center>
                    {/* <img src={login}/> */}
                    <p>Deep</p>
                </center>

                <a href="#"><i class="fab fa-cuttlefish"></i><span>Category</span></a>
                <a href="#"><i class="fas fa-rupee-sign"></i><span>Price</span></a>
                <a href="#"><i class="fab fa-cuttlefish"></i><span>Category</span></a>
                <a href="#"><i class="fab fa-cuttlefish"></i><span>Category</span></a>
                <a href="#"><i class="fab fa-cuttlefish"></i><span>Category</span></a>
                <a href="#"><i class="fab fa-cuttlefish"></i><span>Category</span></a>
                <a href="#"><i class="fab fa-cuttlefish"></i><span>Category</span></a>

            </div>
        </header>
    </div>
    )
}

export default Navb;