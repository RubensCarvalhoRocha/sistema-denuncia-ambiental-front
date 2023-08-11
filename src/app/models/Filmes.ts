export class Filmes {
    public id: number
    public nomeFilme: string
    public diretor: string
    public ano: string
    public nota: number
  
    constructor(filmes?: Filmes) {
      if (filmes) {
        this.id = filmes.id;
        this.nomeFilme = filmes.nomeFilme;
        this.diretor = filmes.diretor
        this.ano = filmes.ano;
        this.nota = filmes.nota;
      } else {
        this.nomeFilme = null;
        this.diretor = null;
        this.ano = null;
        this.nota = null;
      }
    }
  }
  
