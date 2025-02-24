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
                        <span>Somos Responsaveis</span>
                    </h1>
                    <h2 className='banner-subtitle' aria-label='defenda o que é seu, fortaleça sua marca e proteja seu futuro hoje!'>
                       <p> pela sua <strong>inovação</strong></p>
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
