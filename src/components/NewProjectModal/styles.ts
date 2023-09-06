import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
  

    input {
        width: 50%;
        padding: 0 1.5rem;
        height: 4rem;
        border: 1px solid #d7d7d7;
        background: #e7e7e7;
        border-radius: 0.25rem;
        background-color: var(--gray-50);
        color: var(--gray-500);
        font-size: 1rem;
        font-weight: 400;
        transition: border-color 0.2s ease-in-out;

        &:focus {
            border-color: var(--blue-500);

        }

        &::placeholder {
            color: var(--text-body);
        }

        h2 {
            font-size: 1.5rem;
            color: var(--gray-500);
            margin-bottom: 2rem;
        }

        button[type="submit"] {
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            background: var(--green);
        }
    }
`
