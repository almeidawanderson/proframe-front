import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%; // para ocupar todo o espaço disponível
        border-spacing: 0 0.5rem; // espaçamento entre as linhas

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem; // espaçamento interno
            text-align: left;
            line-height: 1.5rem; // altura da linha
        }

        td {
            padding: 1rem 2rem;
            border: 0; // para remover a borda padrão do html
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem; // para arredondar as bordas
            &:first-child {
                color: var(--text-title);
            }
        }
    }

`;