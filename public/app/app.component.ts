import {Component, OnInit} from 'angular2/core';
import {Person} from './Person';
import {DevService} from './devs.service';

import {DevComponent} from './devs.component';
import {CloudComponent} from './cloud.component';

@Component({
  selector: 'core-members',
  template:`
  <div *ngFor="#Dev of devs" class="input-group dev">
    <span class="input-group-addon">
        <input type="checkbox" class="names" value="1" id="{{Dev.name}}" checked="checked" aria-label="..." />
    </span>
    <div type="text" class="form-control" aria-label="...">
        {{Dev.name}}
    </div>
    <span class="input-group-addon">
        <a href="#" class="btn btn-default btn-sm dev-btn-switch" id="{{Dev.name}}" role="button">--></a>
    </span>
</div>` ,
  directives: [CloudComponent],
  providers: [DevService]
})

export class AppComponent  implements OnInit {
  public selectedHero: Person;
  public devs: Person[];
  public qa: Person[];
  public cloud: Person[];
  
  getDevs() {
    this._heroService.getCoreDevs().then(devs => this.devs = devs);
  }

  ngOnInit() {
    this.getDevs();
  }
  
  onSelect(hero: Person) { this.selectedHero = hero; }
  constructor(private _heroService: DevService) { }
}

