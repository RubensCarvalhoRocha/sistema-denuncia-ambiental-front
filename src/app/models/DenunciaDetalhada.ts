export interface denunciaDetalhada
 {
    denunciante: string;
    rua: string;
    bairro: string;
    municipio: string;
    cep: string;
    pontoReferencia: string;
    latitude: string;
    longitude: string;
    descricao: string;
    categoriaPai: string;
    categoriaFilha: string;
    data: string;
    provavelAutor: string;
    status: any; // Altere o tipo conforme necessário
    foto1: string;
    foto2: string;
    foto3: string;
    usuarioId: number;
    protocolo: any; // Altere o tipo conforme necessário
    dataAlteracao: any; // Altere o tipo conforme necessário
    parecerTecnico: any; // Altere o tipo conforme necessário
  }
