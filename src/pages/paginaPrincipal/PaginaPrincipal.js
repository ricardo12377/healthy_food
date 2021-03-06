import React from 'react'
import style from './PaginaPrincipal.module.css'
import {BsSearch} from 'react-icons/bs'
import SegundaParte from './SegundaParte'
import {Link} from 'react-router-dom'

function PaginaPrincipal() {
    return (
        <div className={style.container}>
           <navbar>
               <div className={style.logo}>
                    Healthy Food
               </div>

               <ul className={style.lista}>
                    <li>HEALTHY RECIPES</li>
                    <li>BLOG</li>
                    <li>JOIN</li>
                    <li>
                        <Link to="/registro">
                        <button className={style.link} >REGISTRO</button>
                        </Link>
                    </li>
               </ul>
           </navbar>

           <main className={style.main}>
               <h1>
                   Ready for Trying a new recipe?
               </h1>
               <div className={style.input}>
                   <input type='text' placeholder='Search healthy recipes'/>
                   <div className={style.lupa}>
                        <BsSearch size={30} color='white' />
                   </div>
               </div>
           </main>
        </div>
    )
}

export default PaginaPrincipal
