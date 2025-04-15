import { useEffect } from 'react'
import { preLoaderAnim } from './animation'
import './preloader.sass'

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim();
    },[]);    


  return (
    <div className="container">
          <div className="preloader">
              <div className="texts-container">
                  <span>Desenvolvimento,</span> &nbsp;
                  <span>Crescimento,</span> &nbsp;
                  <span>Vendas.</span>
              </div>
          </div>
    </div>
   
  )
}

export default PreLoader