/* import Link from 'next/link'; */
import classes from './button.module.css'; 
import React from "react";

//Clase padre
class Button extends React.Component {
  render() {
    throw new Error("Este método solo puede ser implementado en las subclases");
  }
}

//Subclase para redireccionar
export class LinkButton extends Button {
  render() {
    const { text, link } = this.props;
    return (
      <button className={classes.btn} onClick={() => window.location.href = link}>
        {text}
      </button>
    );
  }
}

//Subclase para mostrar lista
export class ShowListButton extends Button {
  render() {
    const { text, toggleShowList, fetchData } = this.props;
    const handleClick = () => {
      toggleShowList(); // Cambia el estado showList
      fetchData(); // Realiza el fetch
    };

    return (
      <button className={classes.btn} onClick={handleClick}>
        {text}
      </button>
    );
  }
}


/* function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button; */

