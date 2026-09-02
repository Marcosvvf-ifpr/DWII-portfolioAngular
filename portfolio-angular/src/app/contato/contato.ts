import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContatoService } from '../contato.service';
@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contato.html'
})
export class Contato {
  private fb = inject(FormBuilder);
  private service = inject(ContatoService);
  enviado = false; suesso = ''; erro = '';

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit() {
    this.sucesso = ''; this.erro = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.enviado = true;
      this.service.enviar(this.form.getRawValue()).subscribe({
        next: (resp) => {
          this.sucesso = resp.mensagem;
          this.form.reset();
          this.enviado = false;
        },
        erro: () => {
          this.erro = 'Não foi possivel enviar. Tente novamente.';
          this.enviado = false;
        },
      });
  }
}
