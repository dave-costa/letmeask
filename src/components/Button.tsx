import React from "react";
import {ButtonHTMLAttributes} from 'react'
// isso é do react nos da todos os atributos que um 
// botao pode ter
// tambem tem para inputs
import '../styles/button.scss'
type btn = ButtonHTMLAttributes<HTMLButtonElement>
//passa ele dessa forma

export default function Button(props: btn) {
    return (
        <button className="btn" {...props} />
    )
}

// no typescipt, parametros e variaveis precisam de um tipo
// a gente criou um tipo para nossa props lá acima

// no botao a gente da distribuido as propriedades da props 
//como atributo


// <Button /> quando a gente chamar o component
//ele vai dar todas as informaçoes que um botao tem


//nao precisamos expecificar o chindreen, que é 
//automatico o conteudo dentro