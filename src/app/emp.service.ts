import { Injectable } from '@angular/core';
import {Employe} from './employe';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  emp=[
     new Employe ("maissa",113456,"PDG",true),
     new Employe ("wahid ",113556,"DGA",false),
     new Employe ("Abdelwahed ",1254756,"secretère",true),
     new Employe ("sarra",1152486,"PDG",true)
  ];

  constructor() { }
}
