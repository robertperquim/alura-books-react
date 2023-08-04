import "./Icons.css";

function Icons() {
  const urlImagens = ["/imagens/sacola.svg", "/imagens/perfil.svg"];
  return (
    <ul className="icons">
      {urlImagens.map((url) => (
        <li className="icon">
          <img src={url} alt="Logo"></img>
        </li>
      ))}
    </ul>
  );
}

export default Icons;
