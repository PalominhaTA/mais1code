import styles from './footer.module.scss';

export default function Navbar() {
    return <> 
        <div className={styles['principal']}>
          <section className={styles['sobre-nos']}>
            <h4>Sobre nós</h4>
            <a href='#' >Nossa História</a>
          </section>
          <section className={styles['redes-sociais']}>
            <h4>Nossa Redes</h4>
            <div className={styles['links']}>
              <a href='#' ><img src='./imgs/Icones/facebook.png' /></a>
              <a href='#' ><img src='./imgs/Icones/instagram.png' /></a>
              <a href='#' ><img src='./imgs/Icones/youtube.png' /></a>
              <a href='#' ><img src='./imgs/Icones/twitter.png' /></a>
              <a href='#' ><img src='./imgs/Icones/linkedin.png' /></a>
            </div>
          </section>
          <section className={styles['programas']}>
            <h4>Programas</h4>
            <a href='#' >Transforma</a>
            <a href='#' >Voluntários</a>
            <a href='#' >Talentos do Futuro</a>
            <a href='#' >Educador do amanhã</a>
          </section>
          <section className={styles['ultima']}>
            <img src='#'alt='logo algar'/>
            <h5>Copyright © 2023 | Instituto Algar - Todos os direitos reservados.</h5>
          </section>
        </div>
    </>
  }