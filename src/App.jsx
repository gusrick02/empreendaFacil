import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='body'>
        <header>
          <div className='menu-icon'>☰</div>
          <div className='settings-icon'>⚙️</div>
          <div className='cart-icon'>🛒</div>
          <div className='profile-info'>
            <div className='container'>
              <div className='profile-image'></div>
              <div className='text-container'>
                <div className='name'>Ricardão da Silva</div>
                <div className='status'>Premium pro</div>
              </div>
            </div>
          </div>
        </header>

        <section className='search-section'>
          <input type='text' className='search-bar' placeholder='Procure por empresas' />
        </section>

        <button className='botao-personalizado'>
          <span>Atualizar empresas</span>
        </button>


        <section className='carousel'>
          <button className='arrow left'>←</button>

          <div className='company-card'>
            <img src='./public/windows.png' alt='Microsoft' className='company-logo' />
            <h3>Microsoft</h3>
            <p>US$ 500.000.000.000</p>
            <p>Criada em 1981. Patrimônio de US$ 340 Bilhões</p>
            <div className='buttons'>
              <button className='btn'>Comprar</button>
              <button className='btn'>Conversar</button>
            </div>
          </div>

          <div className='company-card'>
            <img src='./public/logotipo-da-empresa_355-478255B1255D.png' alt='Company' className='company-logo' />
            <h3>Company</h3>
            <p>US$ 60.000.000</p>
            <p>Criada em 1879. Patrimônio de US$ 50 Milhões</p>
            <div className='buttons'>
              <button className='btn'>Comprar</button>
              <button className='btn'>Conversar</button>
            </div>
          </div>

          <div className='company-card'>
            <img src='./public/aurora-alimentos.png' alt='Aurora' className='company-logo' />
            <h3>Aurora</h3>
            <p>US$ 70.000</p>
            <p>Criada em 2019. Patrimônio de US$ 40 Mil</p>
            <div className='buttons'>
              <button className='btn'>Comprar</button>
              <button className='btn'>Conversar</button>
            </div>
          </div>

          <button className='arrow right'>→</button>
        </section>

        <button className='botao-personalizado2'>
          <span>Venda sua empresa clicando aqui!</span>
        </button>

        <footer className='footer'>
          <div className='footer-content'>
            <ul className='footer-links'>
              <li><a href='#'>Sobre nós</a></li>
              <li><a href='#'>Termos de Uso</a></li>
              <li><a href='#'>Política de Privacidade</a></li>
              <li><a href='#'>Contato</a></li>
              <li><a href='#'>Ajuda</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
