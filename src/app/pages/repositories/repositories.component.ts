import { Component, OnInit } from '@angular/core';
import { RepositorioService } from 'app/pages/repositories/services/repositorio.service';

import { Repositorio } from 'app/pages/repositories/models/repositorio';

@Component({
  selector: 'repositories',
  styleUrls: ['./repositories.scss'],
  templateUrl: './repositories.html',
})

export class RepositoriesComponent implements OnInit {
  errorMessage: string;
  repositorios: Repositorio[];
  
  constructor(private repositorioService: RepositorioService) {
    const repositorioPorPagina = 10;

  }

  ngOnInit(): void {
    this.repositorioService.listarRepositorios()
      .subscribe(repositorios => this.repositorios = repositorios,
      error => this.errorMessage);
  }  

}
