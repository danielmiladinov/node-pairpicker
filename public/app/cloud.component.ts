import {Component} from 'angular2/core';
import {Person} from './Person';

@Component({
  selector: 'cloud-members',
  template:`
  <div *ngFor="#hero of devs" class="input-group dev">
    <span class="input-group-addon">
        <input type="checkbox" class="names" value="1" id="{{hero.name}}" checked="checked" aria-label="..." />
    </span>
    <div type="text" class="form-control" aria-label="...">
        {{hero.name}}
    </div>
    <span class="input-group-addon">
        <a href="#" class="btn btn-default btn-sm dev-btn-switch" id="{{hero.name}}" role="button">--></a>
    </span>
</div>`,
  inputs: ['devs']
})
export class CloudComponent {
  public devs: Person[];
}
