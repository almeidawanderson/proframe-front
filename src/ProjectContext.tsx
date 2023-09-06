import { create } from 'domain'
import {createContext, useContext, useEffect, useState, ReactNode} from 'react'
import { api } from './services/api'

interface Project {
    id: string
    projectDescription: string;
    projectName: string;
    costItem: number;
    totalCost: number;
}

interface ProjectItem {
    name: string;
    cost: number;
}

interface ProjectProviderProps {
    children: ReactNode

}

interface ProjectContextData {
    projects: Project[];
    createProject: (project: ProjectInputRequest) => Promise<void>;

}

type ProjectInputRequest = Omit<Project, 'id'|'costItem'>

export const ProjectsContext = createContext<ProjectContextData>(
    {} as ProjectContextData
)


export function ProjectsProvider({children}: ProjectProviderProps) {
    const [projects, setProjects] = useState<Project[]>([])


    useEffect(() => {
        api.get('projects')
        .then(response => setProjects(response.data.projects))
    }, [])

   async function createProject(projectInput: ProjectInputRequest) {
        const response = await api.post('projects', {
            ...projectInput,
        })        
     

        setProjects([
            ...projects, response.data
        ])
        console.log('dados da response', response.data)

    }

    return (
        <ProjectsContext.Provider value={{projects, createProject}}>
            {children}
        </ProjectsContext.Provider>
    )

}


