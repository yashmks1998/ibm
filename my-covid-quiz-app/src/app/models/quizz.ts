import { Questionss } from 'src/app/models/questionss';
export class Quizz {
    // employees: Array<Questionss> = []
    constructor(public id: number, public name: string, public quesion:Array<Questionss> ){}
}
