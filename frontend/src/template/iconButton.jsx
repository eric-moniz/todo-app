import React from "react";
import If from "./if";

/**
 * Insere um botão <button> com classes bootstrap
 * @param {boolean} props hide - mostra ou oculta o botão
 * @param {string} props styles - classe bootstrap à ser aplicado no botão
 * @param {function} props onClick - uma função à ser passada para o botão
 * @param {string} props icon - um ícone para estilizar o botão
 * @returns <button className={"btn btn-" + props.style} onClick={props.onClick} />\n
 *          <i className={"fa fa-" + props.icon}>
 */

const IconButton = props => (
    <If test={!props.hide}>
        <button className={"btn btn-" + props.styles} onClick={props.onClick}>
            <i className={"fa fa-" + props.icon}></i>
        </button>
    </If>
);

export default IconButton;
