import React, { useState } from 'react';
import api from '../Api'; // Importa o Axios configurado com a baseURL
import '../style/CasaCadastro.css';

const CasaCadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    horario: '',
    frete: '',
    email: '',
    contatoWhatsApp: '',
    endereco: {}, 
    senha: '',
    urlImagemPerfil: '' 
  });

  const [error, setError] = useState('');

  // Função para lidar com mudanças nos inputs
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (['cep', 'nomeLugar', 'numero'].includes(id)) {
      setFormData((prevState) => ({
        ...prevState,
        endereco: {
          ...prevState.endereco,
          [id]: value
        }
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id]: value
      }));
    }
  };

  // Função para submeter o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação simples para garantir que os campos obrigatórios estejam preenchidos
    if (!formData.nome || !formData.descricao || !formData.horario || !formData.email || !formData.contatoWhatsApp || !formData.senha) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    try {
      // Enviar o endereço como null se não houver dados preenchidos
      const dataToSubmit = {
        ...formData,
        endereco: formData.endereco && (formData.endereco.cep || formData.endereco.nomeLugar || formData.endereco.numero) ? formData.endereco : null
      };

      const response = await api.post('/casaconstrucao', dataToSubmit);
      alert('Cadastro realizado com sucesso!');
      console.log('Resposta do servidor:', response.data);
      setError('');  // Limpar qualquer erro anterior
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setError('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <div className="cadastro-container">
      <h1 className="cadastro-title">Cadastro da Casa de Construção</h1>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" value={formData.nome} onChange={handleInputChange} placeholder="Digite o nome" required />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <textarea id="descricao" value={formData.descricao} onChange={handleInputChange} placeholder="Digite a descrição" rows="3" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="horario">Horário de Funcionamento:</label>
          <input type="text" id="horario" value={formData.horario} onChange={handleInputChange} placeholder="Ex: 8h às 18h" required />
        </div>
        <div className="form-group">
          <label htmlFor="frete">Como funciona o frete:</label>
          <textarea id="frete" value={formData.frete} onChange={handleInputChange} placeholder="Explique como funciona o frete" rows="3" required></textarea>
        </div>
        <div className="form-group inline">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="Digite seu email" required />
          </div>
          <div>
            <label htmlFor="contatoWhatsApp">WhatsApp:</label>
            <input type="tel" id="contatoWhatsApp" value={formData.contatoWhatsApp} onChange={handleInputChange} placeholder="Digite seu WhatsApp" required />
          </div>
        </div>

        {/* Campos de endereço só são exibidos se algum dado for preenchido */}
        {formData.endereco && (
          <div className="form-group inline">
            <div>
              <label htmlFor="cep">CEP:</label>
              <input type="text" id="cep" value={formData.endereco.cep} onChange={handleInputChange} placeholder="Digite o CEP" />
            </div>
            <div>
              <label htmlFor="nomeLugar">Referência:</label>
              <input type="text" id="nomeLugar" value={formData.endereco.nomeLugar} onChange={handleInputChange} placeholder="Digite uma referência" />
            </div>
            <div>
              <label htmlFor="numero">Número:</label>
              <input type="text" id="numero" value={formData.endereco.numero} onChange={handleInputChange} placeholder="Digite o número" />
            </div>
          </div>
        )}

        {/* Novo campo para URL da imagem de perfil */}
        <div className="form-group">
          <label htmlFor="urlImagemPerfil">URL da Imagem de Perfil:</label>
          <input type="text" id="urlImagemPerfil" value={formData.urlImagemPerfil} onChange={handleInputChange} placeholder="Cole a URL da imagem de perfil" />
        </div>

        <div className="form-group inline">
          <div>
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" value={formData.senha} onChange={handleInputChange} placeholder="Crie uma senha" required />
          </div>
        </div>

        {error && <p className="error-message">{error}</p>} {/* Exibe erros de validação */}

        <button type="submit" className="cadastro-button">Cadastrar</button>
      </form>
    </div>
  );
};

export default CasaCadastro;
