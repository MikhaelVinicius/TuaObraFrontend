import React from 'react';
import '../style/CasaCadastro.css';


const CasaCadastro = () => {
    return (
      <div className="cadastro-container">
        <h1 className="cadastro-title">Casa Cadastro</h1>
        <form className="cadastro-form">
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" placeholder="Digite o nome" required />
          </div>
          <div className="form-group">
            <label htmlFor="descricao">Descrição:</label>
            <textarea id="descricao" placeholder="Digite a descrição" rows="3" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="horario">Horário de Funcionamento:</label>
            <input type="text" id="horario" placeholder="Ex: 8h às 18h" required />
          </div>
          <div className="form-group">
            <label htmlFor="frete">Como funciona o frete:</label>
            <textarea id="frete" placeholder="Explique como funciona o frete" rows="3" required></textarea>
          </div>
          <div className="form-group inline">
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Digite seu email" required />
            </div>
            <div>
              <label htmlFor="whatsapp">WhatsApp:</label>
              <input type="tel" id="whatsapp" placeholder="Digite seu WhatsApp" required />
            </div>
          </div>
          <div className="form-group inline">
            <div>
              <label htmlFor="cep">CEP:</label>
              <input type="text" id="cep" placeholder="Digite o CEP" required />
            </div>
            <div>
              <label htmlFor="referencia">Referência:</label>
              <input type="text" id="referencia" placeholder="Digite uma referência" required />
            </div>
          </div>
          <div className="form-group inline">
            <div>
              <label htmlFor="senha">Senha:</label>
              <input type="password" id="senha" placeholder="Crie uma senha" required />
            </div>
            <div>
              <label htmlFor="numero">Número:</label>
              <input type="text" id="numero" placeholder="Digite o número" required />
            </div>
          </div>
          <button type="submit" className="cadastro-button">Cadastrar</button>
        </form>
      </div>
    );
  };
  
  export default CasaCadastro;