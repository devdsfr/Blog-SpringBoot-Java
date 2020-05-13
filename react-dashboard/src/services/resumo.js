import { URL_API } from "./base";

export function consultarResumo(callback){
    fetch(`${URL_API}/resumo`)
    .then(resultado => resultado.json().then(callback));
}