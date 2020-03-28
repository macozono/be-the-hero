import React from 'react';

// parametro props -> propriedades injetadas no componente.
// {children} -> já indica qual propriedade a ser injetada.
export default function Header({children}) {
    // {props.title} -> atributos passados para o componente.
    // {props.children} -> conteúdo injetado dentro do componente.
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}