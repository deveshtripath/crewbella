import React from 'react';
import "./Sidebar.css";
import {Avatar, Button} from "@material-ui/core"
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { useSelector } from 'react-redux';
// import {selectUser} from "./features/userSlice"
import "./content.json";

function Sidebar() {

    window.onload = function () {
        if (
          document.querySelectorAll(".progress").length > 0 &&
          document.querySelectorAll(".progress [data-progress]").length > 0
        ) {
          // Get all elements with 'data-progress' attribute and run the 'AnimateProgress' funcion with each one
          document
            .querySelectorAll(".progress [data-progress]")
            .forEach((x) => AnimateProgress(x));
        }
      };
      
      function AnimateProgress(el) {
        // Get the element that came as parameter and add the class 'animated-progress' on it
        el.className = "animate-progress";
        // Set the attribute 'style' of this element with the custom attribute '--animate-progress' and the value of 'data-progress' as the width value
        el.setAttribute(
          "style",
          `--animate-progress:${el.getAttribute("data-progress")}%;`
        );
        // After this the CSS make its magic
      }
      
    // const user = useSelector(selectUser);

    const recentItem=(topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <>
        <div className="sidebar">
            <div className="sidebar__top">
            {/* <img src="https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbG9yJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""/> */}
            <Avatar size={2} width="100px" src="https://www.w3schools.com/howto/img_avatar.png" className="sidebar__avatar" >Devesh</Avatar>
            {/* <Avatar
                size={16}
                alt="Evelyn Carnahan"
                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                >
          O
        </Avatar> */}
        <div className="sidebar__stat">
            <h2 className="heade">Devesh</h2>
            <h4> AJMER</h4>
        </div>
            
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>4 followers </p>
                     <p className="sidebar__statNumber">0 quickbooks  </p>
                </div>
                <Button className="btns" variant="contained">See QuickBook</Button>
                         
                     
                <h5>No calls, only PINGS!!</h5>
                <h3>#Animator  #Vanilla JS  #Computer Student  </h3>

                <div className="progress">
            
            <p>R studio <strong></strong></p>
            <div data-progress="20"></div>
            <p>Python for Everything <strong></strong></p>
            <div data-progress="33"></div>
            <p>Product Manager <strong></strong></p>
            <div data-progress="100"></div>
            <p>R studio <strong></strong></p>
            
            <div data-progress="25.75"></div>
</div>



            </div>

            

       
            

          
 
        </div>
      
        </>
    )
}

export default Sidebar
