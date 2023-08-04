import styled from "styled-components";

const Opcao = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  padding: 0 5px;
  cursor: pointer;
`;

const OpcoesHeader = styled.ul`
  display: flex;
`;

function Opcoes() {
  const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];
  return (
    <OpcoesHeader>
      {textoOpcoes.map((texto) => (
        <Opcao>
          <p>{texto}</p>
        </Opcao>
      ))}
    </OpcoesHeader>
  );
}

export default Opcoes;
