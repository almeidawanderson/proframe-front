import { Container, Content } from "./styles";


interface HeaderProps {
  onOpenNewProjectModal: () => void;
}


export function Header({ onOpenNewProjectModal }: HeaderProps) {

  return (
    <Container>
    <Content>
     <h1>Proframe Engenharia e Tecnologia</h1>
     <button 
      type="button"
      onClick={onOpenNewProjectModal}>
        Cadastrar Novo Projeto
     </button>

     </Content>
    </Container>
  );
}