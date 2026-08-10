import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Projeto {
    id: number;
    nome: string;
    descricao: string;
    tecnologias: string;
    link_github: string;
    ano: number;
}

@Injectable({ providedIN: 'root' })
export class ProjetoService {
    private http = inject(HttpClient);
    private url = 'http://https://miniature-space-doodle-5g699gq9j55gfvp7v.github.dev/api/projetos.php'

    listar(): Observable<Projeto[]> {
        return this.http.get<Projeto[]>(this.url);
    }
}