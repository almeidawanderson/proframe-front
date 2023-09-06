import Modal from 'react-modal';
import { Container } from './styles';
import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';
import { ProjectsContext } from '../../ProjectContext';

interface NewProjectModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface ProjectItem {
    name: string;
    cost: number;
}

export function NewProjectModal({isOpen, onRequestClose}: NewProjectModalProps) {
    const {createProject} = useContext(ProjectsContext)

    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [itemName, setItemName] = useState('');
    const [costItem, setCostItem] = useState(0);
    const [projectItems, setProjectItems] = useState<ProjectItem[]>([]);
    const [totalCost, setTotalCost] = useState<number>(0);
    const [showNewItemFields, setShowNewItemFields] = useState(false); 

    function handleAddNewItem() {
        const newItem: ProjectItem = {
          
            name: itemName,
            cost: costItem

        }
        
        if(itemName === '' || costItem === 0) {
            alert('Preencha os campos de novo item');
            return;            
        }

        setProjectItems([...projectItems, newItem]);
        setItemName('');
        setCostItem(0);
        setTotalCost(totalCost + costItem);
        setShowNewItemFields(false);
    }
    
    async function handleCreateNewProject(event: FormEvent) {
        event.preventDefault();

        await createProject({

            projectName,
            projectDescription,
            totalCost
        })

        setProjectName('');
        setProjectDescription('');
        setItemName('');
        setCostItem(0);
        setProjectItems([]);
        setTotalCost(0);
        setShowNewItemFields(false);
        onRequestClose();

    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Cadastrar Novo Projeto"
            overlayClassName="react-modal-overlay"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            />

            <Container onSubmit={handleCreateNewProject}>
                <h2>Cadastrar Novo Projeto</h2>
                <input
                    placeholder="Descrição do Projeto"
                    value={projectDescription}
                    onChange={event => setProjectDescription(event.target.value)}
                />

                <input
                    placeholder="Nome do Projeto"
                    value={projectName}
                    onChange={event => setProjectName(event.target.value)}
                />


                <input
                    placeholder="Nome do Item"
                    value={itemName}
                    onChange={event => setItemName(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor do Item"
                    value={costItem}
                    onChange={event => setCostItem(Number(event.target.value))}
                />

                {showNewItemFields && (
                    <>
                        <input
                            placeholder="Nome do Novo Item"
                            value={itemName}
                            onChange={event => setItemName(event.target.value)}
                        />

                        <input
                            type="number"
                            placeholder="Valor do Novo Item"
                            value={costItem}
                            onChange={event => setCostItem(Number(event.target.value))}
                        />
                    </>
                )}

                <button 
                    type='button'
                    onClick={handleAddNewItem}
                >
                    Adicionar Item
                </button>

                {projectItems.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}: R$ {item.cost.toFixed(2)}</p>
                    </div>
                ))}

                <p style={{fontSize: '25px'}}>Custo Total: R$ {totalCost.toFixed(2)}</p>

                <button 
                type="submit"
                >
                    Cadastrar Projeto
                </button>
            </Container>
        </Modal>
    )
}
