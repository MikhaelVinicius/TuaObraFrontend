const editarPerfil = async () => {
    try {
      const updatedData = {
        nome: 'Novo Nome',
        email: 'novo@email.com',
        // ... outros campos a serem atualizados
      };
  
      const response = await api.put('/perfil', updatedData); // Endpoint para atualizar o perfil
      setUsuario(response.data); // Atualiza o estado com os novos dados
    } catch (error) {
      console.error('Erro ao editar o perfil:', error);
    }
  };
  