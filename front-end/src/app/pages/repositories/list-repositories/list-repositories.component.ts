import { Component, OnInit } from '@angular/core';
import { SeoService, SeoModel } from "app/services/seo.services";
import { Repositories } from 'app/pages/repositories/models/repositories';
import { DockerService } from 'app/pages/repositories/services/docker.service';

@Component({
  selector: 'list-repositories',
  styleUrls: ['./list-repositories.scss'],
  templateUrl: './list-repositories.html',
})


export class ListRepositoriesComponent implements OnInit {    

  public repositories: Repositories[];
  errorMessage: string;

  constructor(seoService: SeoService,
              service: DockerService) {

    let seoModel: SeoModel = <SeoModel>{
      title: 'Repositrio de Imagens',
      description: 'Lista de todos os repositórios privados',
      robots: 'Index, Follow',
      keywords: 'repositório,lista,container,imagens'
    };

    seoService.setSeoData(seoModel);

    const repositorioPorPagina = 10;

  }

  ngOnInit(): void {
    
  }
}
