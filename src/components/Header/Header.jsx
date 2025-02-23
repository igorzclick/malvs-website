import './header.sass'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className='header-banner'>
        <nav>
            <Navigation />
        </nav>
        <div className="banner" id='home'>
            <div className="banner-container container">
                <div className="banner-texts">
                    <h1 className="banner-title">
                        <span>Providentia Consultoria</span>
                    </h1>
                    <h2 className='banner-subtitle' aria-label='defenda o que é seu, fortaleça sua marca e proteja seu futuro hoje!'>
                        <span>Defenda&nbsp;</span>
                        <span>o que&nbsp;</span>
                        <span>é&nbsp;</span>
                        <span>seu,</span> <br />
                        <span>fortaleça&nbsp;</span>
                        <span>sua&nbsp;</span>
                        <span>marca&nbsp;</span>
                        <span>e</span> <br />
                        <span>proteja&nbsp;</span>
                        <span>seu&nbsp;</span>
                        <span>futuro&nbsp;</span>
                        <span>hoje!</span>
                    </h2>
                </div>
                <div className="button">
                    <a aria-label="chat whatsapp"  href="https://wa.me/5511948872447" className="button-link" target='_blank' rel='noreferrer'>
                            REGISTRE JÁ 
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
