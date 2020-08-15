import {
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  RouterEvent,
} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-first',
  templateUrl: './test-first.component.html',
  styleUrls: ['./test-first.component.css'],
})
export class TestFirstComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('ID', id);
    console.log('Router', router);
    console.log('ActivatedRoute', activatedRoute);
    console.log('ActivatedRouteSnapshot', activatedRoute.snapshot);
    console.log('RouterStateSnapshot', router.routerState.snapshot);
  }

  ngOnInit() {}
}
