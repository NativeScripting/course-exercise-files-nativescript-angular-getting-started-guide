import { Component, OnInit } from '@angular/core';
import { Grocery } from '~/app/shared/grocery/grocery';
import { GroceryListService } from '~/app/shared/grocery/grocery-list.service';


@Component({
    selector: 'list',
    providers: [GroceryListService],
    templateUrl: 'app/pages/list/list.component.html',
    styleUrls: ['app/pages/list/list-common.css', 'app/pages/list/list.css']
})
export class ListComponent implements OnInit {

    public groceryList: Grocery[] = [];

    constructor(private groceryListService: GroceryListService) { }

    public ngOnInit() {
        this.groceryListService.load()
            .subscribe(loadedGroceries => {
                loadedGroceries.forEach((groceryObject) => {
                    this.groceryList.unshift(groceryObject);
                });
            });
    }
}
