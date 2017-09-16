import { Component } from '@angular/core';
import { SeoService, SeoModel } from "app/services/seo.services";

@Component({
  selector: 'repositories',
  styleUrls: ['./repositories.scss'],
  templateUrl: './repositories.html',
})


export class RepositoriesComponent {


  constructor(seoService: SeoService) {

    let seoModel: SeoModel = <SeoModel>{
      title: 'Repositrio de Imagens',
      description: 'Lista de todos os repositórios privados',
      robots: 'Index, Follow',
      keywords: 'repositório,lista,container,imagens'
    };

    seoService.setSeoData(seoModel);

    const repositorioPorPagina = 10;

  }
}
