import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

// Interfaces
import { Filters } from 'src/app/interfaces/frontend';

// Services
import { DishesService } from '../../services/dishes/dishes/dishes.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit, OnDestroy {

  private destroy = new Subject<void>();

  dataDishDetail!: Filters;


  constructor(private route: ActivatedRoute, private dishesService: DishesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.getDishById(params.id);
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getDishById(id: string): void {
    this.dishesService.getDishById(id).pipe(takeUntil(this.destroy)).subscribe((resp) => {
      this.dataDishDetail = resp;
    })
  }
}
