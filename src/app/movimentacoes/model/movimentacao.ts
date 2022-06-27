import { Usuario } from './../../usuarios/model/usuario';
import { Caixa } from './../../caixas/model/caixa';

export interface Movimentacao {
  id: number;
  caixa: Caixa;
  usuario: Usuario;
  descricao: string;
  valor: number;
  tipoMovimento: string;
  dataMovimento: Date;
}
