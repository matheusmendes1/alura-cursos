import { logarTempoDeExecucao} from '../helpers/decorators/index';

export abstract class View<T>{

    private _elemento: JQuery;
    private _escapar: boolean;
    
    //Interrogação indica parâmetro opcional -> quando você não passa o paramêtro opcional, o resultado é dado como undefined
    //Os parametros opcionais têm de ser os ultimos parametros do seu constructor
    constructor(seletor: string, escapar: boolean = false){
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    @logarTempoDeExecucao(true)
    update(model: T){
        let template = this.template(model);

        if(this._escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this._elemento.html(template);
    }

    abstract template(model: T): string;
}