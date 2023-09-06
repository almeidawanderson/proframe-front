import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal'
import { NewProjectModal } from "./components/NewProjectModal";
import { ProjectsContext, ProjectsProvider } from "./ProjectContext";

Modal.setAppElement('#root')

interface ProjectItem {
  description: string;
  cost: number;
}

interface Project {
  name: string;
  description: string;
  items: ProjectItem[];
}


export function App() {

  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false)
  


  function handleOpenNewProjectModal() {
    setIsNewProjectModalOpen(true)
  }

  function handleCloseNewProjectModal() {
    setIsNewProjectModalOpen(false)
  }  
 
  return (
    <ProjectsProvider>
      < Header 
      onOpenNewProjectModal={handleOpenNewProjectModal}
      />

      < Dashboard />

      <NewProjectModal 
        isOpen={isNewProjectModalOpen}
        onRequestClose={handleCloseNewProjectModal}
      />

    
      <GlobalStyle />   
      </ProjectsProvider>

)
  }


