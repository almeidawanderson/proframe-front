import { useContext} from "react";
import { Container } from "./styles";
import { ProjectsContext } from "../../ProjectContext";


export function TransactionsTables() {
    const {projects} = useContext(ProjectsContext)


    return(
        <Container>
            <table> 
                <thead>
                    <tr>
                        <th>Descrição do Projeto</th>
                        <th>Nome do Projeto</th>
                        <th>Custo Total</th>
                       
                    </tr>
                </thead>
                <tbody>
  {projects.map((project) => (
    <tr key={project.id}> 
      <td>{project.projectName}</td>
      <td>{project.projectDescription}</td>
      <td>{project.totalCost}</td>
    </tr>
  ))}
</tbody>

            </table>
        </Container>
    )
}