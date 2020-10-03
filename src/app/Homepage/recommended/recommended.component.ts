import { Component, OnInit } from '@angular/core';
import { ChefService } from '../Services/chef-service.service';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Chef } from '../../../app/models/chef';
@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {
  foods = [
    { name: 'Jollof Rice', rating: 4 },
    { name: 'Jollof Rice', rating: 4 },
    { name: 'Jollof Rice', rating: 4 },
    { name: 'Jollof Rice', rating: 4 }
  ];
  sortOptions: SelectItem[];
  chefs: Chef[];
  sortOrder: number;

  sortField: string;

  constructor(private chefService:ChefService,private primengConfig: PrimeNGConfig) {}

  ngOnInit() {

    this.chefs=this.chefService.getChefs();

    this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];

    this.primengConfig.ripple = true;
  }
}
