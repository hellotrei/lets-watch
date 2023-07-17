import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

type ButtonProps = {
    label: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

class Button extends React.PureComponent<ButtonProps> {
    render() {
        const { label, type, onClick } = this.props;
        return (
            <ButtonContainer type={type} onClick={onClick}>
                {label}
            </ButtonContainer>
        );
    }
}

const ButtonContainer = styled.button`
    background-color: ${Colors.primary};
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: ${Colors.secondary};
    }
`;

export { Button };
