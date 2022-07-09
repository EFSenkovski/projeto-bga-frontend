import { TipoPessoa } from './tipoPessoa';
export interface Pessoa {
  id: number;
  nomeRazaoSocial: string;
  nomeFantasia: string;
  pessoaFisicaJuridica: string;
  cpfCnpj: string;
  rgIe: string;
  email: string;
  dataNascimentoFundacao: Date;
  endereco: string;
  cidade: string;
  cep: string;
  uf: string;
  telefone: string;
  celular: string;
  tipoPessoa: TipoPessoa;
  observacao: string;
  dataHoraCriacao: Date;
  dataHoraAtualizacao: Date;
  ativo: number;
}
