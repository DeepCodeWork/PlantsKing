import React from 'react';
import Classes from './SideBar.module.css'

const SideBar = () => {
    return (
<div className={Classes.Open}>
    <div className={Classes.SideBar}>
        <div className={"d-flex flex-column"}>
            {/* //LOGO */}
            <div>
                <p>Category</p>
            </div>
            <div>
                Price
            </div>
        </div>
    </div>
</div>
    )
}

export default SideBar;