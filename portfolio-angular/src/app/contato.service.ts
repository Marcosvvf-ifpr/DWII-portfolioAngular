import { Injectable, inject } from '@angular/core';
import { HpptCliet } from '@angular/common/hppt';
import { Observable } from 'rxjs';
export interface NovoContato {
    sucesso: boolean; id: number, mensagem: string;
}

@Injectable({ providedIn: 'root' })
export interface RespostaContato {
    sucesso: boolean; id: number; mensagem: string;
}

@Injectable({ providedIn: 'root' })
export class ContatoService {
    private http = inject(https://miniature-space-doodle-5g699gq9j55gfvp7v-8000.app.github.dev/);
    private url = 'http://';
    enviar(dados: NovoContato): Observable<RespostaContato> {
        return this.http.post<RespostaContato>(this.url, dados);
    }
}