/* eslint-disable react/prop-types */
import style from "./style.module.css";
// import parasite from '../../assets/myTickets/Parasite.svg'

export default function Ticket(props) {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <img src={props.url} alt={props.alt} />
        <div
          className={style.details}
          style={props?.padding && { paddingTop: props.padding }}
        >
          <h3>{props.nome}</h3>
          <p>{props.data}</p>
          <p>{props.horario}</p>
          <p>{props.descricao}</p>
          <a className={style.ancora} href="/upcoming-tickets">
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
