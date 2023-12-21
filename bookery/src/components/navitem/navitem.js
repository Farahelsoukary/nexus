import React from "react";
function NavItem(props) {
    console.log('props')
    return (

        <>
            <li>
                <a className="active" href={props.path}>
                    {props.name}

                </a>
            </li>
        </>
    );
}
export default NavItem;

// const NavItem = () => { };
// const NavItem = function () { }
