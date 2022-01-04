import React from 'react'
import style from './QuartaParte.module.css'
import Image1 from '../images/blog_image_1.svg'
import Image2 from '../images/bloco_image_2.svg'
import Image3 from '../images/bloco_image_3.svg'
import Image4 from '../images/bloco_image_4.svg'



function QuartaParte() {
    return (
        <div className={style.quartaParte}>
            
            <header className={style.header}>
                <h1>Read Our Blog</h1>
                <p>Far far away, behind the word mounstains, far from the countries</p>
                <p>Vokalia and Consonantia, there live the blind texts</p>
            </header>

           
            <slider className={style.items}>
                    <div className={style.card}>
                        <img src={Image1} className={style.img}/>
                        <h3>Quick-start guide to nuts seeds</h3>
                        <div>Kevin Ibrahim</div>
                    </div>
                    <div className={style.card}>
                        <img className={style.img} src={Image2} />
                        <h3>Nutrition: Tips for Improving Your Health</h3>
                        <div>Mike Jackson</div>
                    </div>
                    <div className={style.card}>
                        <img className={style.img} src={Image3} />
                        <h3>The top 10 benefits of eating healthy</h3>
                        <div>Bryan McGregor</div>
                    </div>
                    <div className={style.card}>
                        <img className={style.img} src={Image4} />
                        <h3>Nutrition: Good fruits for you healthy</h3>
                        <div>Mike Jackson</div>
                    </div>
            </slider>
           

        </div>
    )
}

export default QuartaParte
