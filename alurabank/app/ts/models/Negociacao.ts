import { MeuObjeto } from './MeuObjeto';

export class Negociacao implements MeuObjeto<Negociacao>{

    /* O Underline nas variáveis é uma convenção do JavaScript que indica que estas variáveis não devem ser alteradas fora dos métodos da própria classe */
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number){
    
    }
        
    get volume(){
        return this.quantidade * this.valor;
    }

    paraTexto(): void{
        console.log("Impressão");
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        );
    }

    ehIgual(negociacao: Negociacao): boolean{

        return this.data.getDate() == negociacao.data.getDate() &&
                this.data.getMonth() == negociacao.data.getMonth() &&
                this.data.getFullYear() == negociacao.data.getFullYear();
    }
}