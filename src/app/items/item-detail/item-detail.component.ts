import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { IRank } from 'src/app/interfaces/IRank';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  tableLoading = false;
  public items: IRank[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.data['id']);

    this.tableLoading = true;
    //set delay only for demo purpose
    this.itemService.getDetail(this.route.snapshot.data['id']).pipe(delay(200)).subscribe(
      response => {
        this.items = response;
        if (response) {
          this.tableLoading = false;
        }
        //console.log(this.items);
      }
    )
  }

}
