import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Works } from './components/Works'
import { Contact } from './components/Contact'
import { NavBar } from './components/NavBar'
import {Footer} from './components/Footer'
import './App.css'
import { useEffect, useState } from 'react'

export const App = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    console.log('App useEffect ejecutándose...');
    
    // Verificar localStorage
    const dismissed = localStorage.getItem('migration-dismissed');
    console.log('Migration dismissed:', dismissed);
    
    // Forzar mostrar banner para pruebas (quita esto después)
    setShowBanner(true);
    
    // Código original del scroll
    const handleScroll = () => {
      const nav = document.querySelector('.nav-bar');
      if (nav) {
        nav.classList.toggle('active', window.scrollY > 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    console.log('Dismissing banner...');
    localStorage.setItem('migration-dismissed', 'true');
    setShowBanner(false);
  };

  const handleRedirect = () => {
    console.log('Redirecting...');
    // Cambia esta URL por tu nueva URL
    window.location.href = 'https://imasolutions.netlify.app/'; // URL de prueba
  };

  console.log('Renderizando App, showBanner:', showBanner);

  return (
    <div>
      {showBanner && (
        <div style={{
          background: '#ff6b6b',
          color: 'white',
          padding: '12px 15px',
          textAlign: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          fontSize: window.innerWidth < 768 ? '14px' : '16px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          lineHeight: '1.4'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <span style={{ 
              marginRight: window.innerWidth < 768 ? '0' : '10px',
              marginBottom: window.innerWidth < 768 ? '8px' : '0',
              width: window.innerWidth < 768 ? '100%' : 'auto',
              color: 'white',
            }}>
              📢 Portfolio desactualizado
            </span>
            <div style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }}>
              <button 
                onClick={handleRedirect}
                style={{
                  background: 'white',
                  color: '#ff6b6b',
                  border: 'none',
                  padding: window.innerWidth < 768 ? '10px 16px' : '8px 15px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: window.innerWidth < 768 ? '14px' : '16px',
                  minHeight: '40px'
                }}
              >
                Ver nueva versión
              </button>
              <button 
                onClick={handleDismiss}
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  padding: window.innerWidth < 768 ? '8px 12px' : '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: window.innerWidth < 768 ? '16px' : '14px',
                  minHeight: '40px',
                  minWidth: '40px'
                }}
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Agregar margen superior si se muestra el banner */}
      <div style={{ marginTop: showBanner ? (window.innerWidth < 768 ? '90px' : '80px') : '0' }}>
        <NavBar></NavBar>
        <Routes>
          <Route path='/portfolio' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/works' element={<Works/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  )
}