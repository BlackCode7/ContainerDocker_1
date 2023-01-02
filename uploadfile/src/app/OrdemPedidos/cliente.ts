export default class Cliente{

    id: number;
    email: string;
    dataNascimento: string;

    constructor(id:number, email:string, dataNascimento:string){
        this.id = id;
        this.email = email;
        this.dataNascimento = dataNascimento;
    }

}