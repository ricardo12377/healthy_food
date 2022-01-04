import React from 'react'
import style from './SegundaParte.module.css'
import Foto1 from '../images/comida_1.svg'
import Foto2 from '../images/comida_2.svg'
import Foto3 from '../images/comida_3.svg'
import Foto4 from '../images/comida_4.svg'

function SegundaParte() {
    return (
        <div className={style.segundaParte}>
            
            <header className={style.header}>
                <h1>Our Best Recipes</h1>

                <div>For away, behind the word mounstains, far from the countries</div>
                <div>Vokalia and Constatine, there the blind texts.</div>
            </header>

            <section className={style.cards}>
                <div className={style.primeiraLinha}>

                    <div className={style.card}>
                        <img src={Foto1} className={style.foto}/>
                        <div className={style.descricao}>
                        <h4>Brocolli Salad With Bacon</h4>
                        <button>SEE RECIPE</button>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img src={Foto2} className={style.foto}/>
                        <div className={style.descricao}>
                        <h4>Classic Beef Burgers</h4>
                        <button>SEE RECIPE</button>
                        </div>
                    </div>
                </div>

                <div className={style.primeiraLinha}>

                    <div className={style.card}>
                        <img src={Foto3} className={style.foto}/>
                        <div className={style.descricao}>
                        <h4>Classic Potato Salad</h4>
                        <button>SEE RECIPE</button>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img src={Foto4} className={style.foto}/>
                        <div className={style.descricao}>
                        <h4>Cherry Cobbler on the Grill</h4>
                        <button>SEE RECIPE</button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default SegundaParte
