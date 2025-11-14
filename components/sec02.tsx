import Image from "next/image";
import styles from "./sec02.module.css";

export default function Sec02() {
    return (
        <div className={styles.wrapSec02}>
            <section className={styles.content}>
                <div className={styles.divLeft}>
                    <span className={styles.subTitle}><h2>Estamos conquistando o país</h2></span>
                    <h1>Xeque mate pelo brasil</h1>
                    <p>De norte a sul, Xeque Mate já virou presença garantida nas rodas de amigos, festas e momentos de descontração. Nossa bebida — feita com chá mate, rum e limão — conquistou o país com seu sabor autêntico e refrescante. Encontre Xeque Mate nos melhores bares, eventos e pontos de venda espalhados pelo Brasil e descubra por que tanta gente já entrou nesse jogo.</p>
                    <button className={styles.button}>
                            <a>
                                <span>Cupom na primeira compra</span>
                                <span className={styles.iconWrap}><img src="/medias/arrows.svg" alt="desconto" /></span>
                            </a>
                    </button>
                </div>
                <div className={styles.divRight}>
                    <img src="/medias/brazil-map.svg" alt="brazil map" />
                </div>
            </section>
        </div>
    );
}
