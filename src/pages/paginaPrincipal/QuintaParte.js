import React from 'react'
import style from './QuintaParte.module.css'
import Foto from '../images/bloco_final_image.svg'

function QuintaParte() {
    return (
        <div className={style.quintaParte}>
            <div className={style.body}>
                <h1>Join our membership to get a special offer</h1>
                <div className={style.input}>
                    <input type='text' placeholder="Enter your email address" />
                    <button>Join</button>
                </div>
            </div>

            
        </div>
    )
}

export default QuintaParte
