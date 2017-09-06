import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Repositorio } from '../models/repositorio';
import { BaseService } from '../../../services/base.service';

@Injectable()
export class RepositorioService extends BaseService {
    
    constructor(private http: Http) { super(); }
        
    listarRepositorios(): Observable<Repositorio[]> {

        const response = this.http            
            .get(this.urlServiceV1 + '_catalog')
            .map((res: Response) => <Repositorio[]>res.json())
            .catch(super.serviceError);
            
        return response;
    }
}
