import styled from "styled-components";

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

function Icons() {
  const urlImagens = ["/imagens/sacola.svg", "/imagens/perfil.svg"];
  return (
    <Icones>
      {urlImagens.map((url) => (
        <Icone>
          <img src={url} alt="Logo"></img>
        </Icone>
      ))}
    </Icones>
  );
}

export default Icons;
