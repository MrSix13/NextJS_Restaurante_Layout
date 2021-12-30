import React from 'react'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'


function Footer() {
    return (
        <div className={styles.container}>
           <div className={styles.item}>
                <Image src="/img/bg.png" layout='fill' objectFit='cover' alt=""/>
           </div>
           <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>OH YES, WE DID, THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA</h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>ENCUENTRA NUESTROS RESTAURANTES</h1>
                    <p className={styles.text}>
                    1534 R.Don Road #304
                    <br/>Concepcion,Chile
                    <br/> 2312 12312 12312
                    </p>
                    <p className={styles.text}>
                    1534 R.Don Road #304
                    <br/>Concepcion,Chile
                    <br/> 2312 12312 12312
                    </p>
                    <p className={styles.text}>
                    1534 R.Don Road #304
                    <br/>Concepcion,Chile
                    <br/> 2312 12312 12312
                    </p>
                    <p className={styles.text}>
                    1534 R.Don Road #304
                    <br/>Concepcion,Chile
                    <br/> 2312 12312 12312
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>HORARIO DISPONIBLE</h1>
                    <p className={styles.text}>
                        LUNES A VIERNES
                        <br/> 9:00 - 21:00
                    </p>
                    <p className={styles.text}>
                        SABADO - DOMINGO
                        <br/> 12:00 - 18:00
                    </p>
                    
                </div>
           </div>
        </div>
    )
}

export default Footer
