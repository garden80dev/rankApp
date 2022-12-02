import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRank } from 'src/app/interfaces/IRank';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  public items: IRank[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.data['id']);

    this.itemService.getDetail().subscribe(
      response => {
        this.items = response;
        console.log(this.items);
      }
    )
  }

}
