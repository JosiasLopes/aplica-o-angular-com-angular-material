export class curso{
    nome:string;
    duracao:string;
    id:number;
    private constructor(nome:string,duracao:string,id:number){
        this.nome = nome;
        this.duracao = duracao;
        this.id = id;
        
    }
    public setId(id:number):void{
        this.id = id;
    }
}