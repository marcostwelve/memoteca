import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPensamentoPorId(id!).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  excluirPensamento() {

    if(this.pensamento.id) {
      this.service.excluirPensamento(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarpensamento']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarpensamento']);
  }

}
