import React from 'react';
import './ListaDeTarefas.css'

function Tarefa({ tarefa, usuario, completa }) {
  return (
    <div className="tarefa">
      <h3 style={{ textDecoration: completa ? 'line-through' : 'none' }}>
        {tarefa.title}
      </h3>
      <p>Usuário: {usuario}</p>
    </div>
  );
}

export default Tarefa;
