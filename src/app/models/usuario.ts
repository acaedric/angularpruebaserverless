export class Usuario {
    createdAt: number;
    apellidos: string;
    noteId: string;
    userId: string;
    nombres: string

    constructor(
        createdAt: number,
        apellidos: string,
        noteId: string,
        nombres: string,
        userId: string
         ){
        this.createdAt = createdAt;
        this.apellidos = apellidos;
        this.noteId = noteId;
        this.nombres = nombres;
        this.userId = userId
    }
}