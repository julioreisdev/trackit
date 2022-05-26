export default function Dia(numeroDiaSemana) {
  if (numeroDiaSemana === 0) {
    return "Domingo";
  } else if (numeroDiaSemana === 1) {
    return "Segunda-feira";
  } else if (numeroDiaSemana === 2) {
    return "Terça-feira";
  } else if (numeroDiaSemana === 3) {
    return "Quarta-feira";
  } else if (numeroDiaSemana === 4) {
    return "Quinta-feira";
  } else if (numeroDiaSemana === 5) {
    return "Sexta-feira";
  }
  return "Sábado";
}
