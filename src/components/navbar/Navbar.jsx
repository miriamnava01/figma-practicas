import React from "react";
import './navbar.css'

const Navbar =() =>{

    return(

         

        <div id="nave">
        <nav> 
        <ul>

        <li><img  className ='logoC'src="https://images.vexels.com/media/users/3/143087/isolated/preview/ffedee9fb92b8ff50113a0641a8aaaa8-trazo-de-icono-de-pollo.png" alt="" width='100px' /></li>
        <li><a href="#"> Comida fav</a></li>
        <li><a href="#">Gustos musicales</a></li>
        <li><a href="#"> Hobbies</a></li>
        <li><a href="#">Habilidades</a></li>
        
        <li><input type="text" placeholder="buscar" class="buscar" /></li>

        <li><button>iniciar sesion</button></li>
       <li><button>registrarse</button></li>
        </ul>
        </nav>


        </div>



    )


}


export default Navbar