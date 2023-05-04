import React from "react";

/**
 * Insere um botão <button> com classes bootstrap
 * @param {boolean} props hide - mostra ou oculta o botão
 * @param {string} props style - classe bootstrap à ser aplicado no botão
 * @param {function} props onClick - uma função à ser passada para o botão
 * @param {string} props icon - um ícone para estilizar o botão
 * @returns <button className={"btn btn-" + props.style} onClick={props.onClick} />\n
 *          <i className={"fa fa-" + props.icon}>
 */

const IconButton = props => {
    if (props.hide) {
        return null;
    } else {
        return (
            <button
                className={"btn btn-" + props.style}
                onClick={props.onClick}
            >
                <i className={"fa fa-" + props.icon}></i>
            </button>
        );
    }
};

export default IconButton;
