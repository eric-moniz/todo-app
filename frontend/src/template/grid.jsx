import { Component } from "react";

/**
 * Adiciona classes do bootstrap
 * @param {string} string separados por espaços ex. (12 10 9 8)
 * @returns {string} as classes bootstrap para tamanhos de dispositivos ex. (col-xs-12 col-sm-10 col-md-9 col-lg-8)
 *
 */

export default class Grid extends Component {
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split("") : [];
        let classes = "";

        if (cols[0]) classes += `col-xs-${cols[0]}`;
        if (cols[1]) classes += `col-sm-${cols[1]}`;
        if (cols[2]) classes += `col-md-${cols[2]}`;
        if (cols[3]) classes += `col-lg-${cols[3]}`;

        return classes;
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12);

        return <div className={gridClasses}>{this.props.children}</div>;
    }
}
