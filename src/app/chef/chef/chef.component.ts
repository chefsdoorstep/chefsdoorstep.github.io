import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChefService } from '../../Homepage/Services/chef-service.service';
import { Chef } from '../../models/chef';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss']
})
export class ChefComponent implements OnInit {

  constructor(private route: ActivatedRoute, private chefServ: ChefService) { }
  id: string;
  data: Chef;
  images: any[];

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  ngOnInit(): void {
    //this.route.params.subscribe(s=>console.dir(s));
    this.route.params.subscribe(params => {
      this.data = this.chefServ.getChefs().find(x => x.id == params['id'])
       this.images=this.chefServ.getChefImages("");
       console.dir(this.images)
    });

  }

}
