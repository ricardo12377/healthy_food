import React from 'react'
import style from './Footer.module.css'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.primeiraParte}><AiOutlineCopyrightCircle /> Copyrights 2019 Stack. All Rights Reserved</div>

            <div className={style.segundaParte}>
                <div>
                    Privacy Policy
                </div>
                
                <div>
                    Terms and Conditions
                </div>
            </div>
        </div>
    )
}

export default Footer
