import React, { useEffect, useState } from 'react';
import Tarefa from './componentes/ListaDeTarefas';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTarefas(data));

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsuarios(data));
  }, []);

  const getNomeUsuario = (userId) => {
    const usuario = usuarios.find(user => user.id === userId);
    return usuario ? usuario.name : 'Usuário não encontrado';
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      {/* Tarefas Completas */}
      <div className="tarefas-completas">
        <h2>Tarefas Completas</h2>
        {tarefas
          .filter(tarefa => tarefa.completed)
          .map(tarefa => (
            <Tarefa 
              key={tarefa.id} 
              tarefa={tarefa} 
              usuario={getNomeUsuario(tarefa.userId)} 
              completa={true} 
            />
          ))}
      </div>

      {/* Tarefas Pendentes */}
      <div className="tarefas-pendentes">
        <h2>Tarefas Pendentes</h2>
        {tarefas
          .filter(tarefa => !tarefa.completed)
          .map(tarefa => (
            <Tarefa 
              key={tarefa.id} 
              tarefa={tarefa} 
              usuario={getNomeUsuario(tarefa.userId)} 
              completa={false} 
            />
          ))}
      </div>
    </div>
  );
}

export default App;
