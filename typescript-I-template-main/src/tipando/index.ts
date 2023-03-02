import { frota } from "./frota"
import { Carro } from "../types/types"

//* Tipar parâmetros, tipar retorno
//* Quando colocamos ? na frente do parâmetro, dizemos que ele é opcional

function buscarCarrosPorMarca(frota: Carro[], marca?: string): Array<Carro> {
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marca
    }
  )
}

buscarCarrosPorMarca(frota);