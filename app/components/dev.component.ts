import {Component, EventEmitter, Output, ElementRef} from 'angular2/core';
import {Person} from '../models/person'
import {Team} from '../models/team'
import {State} from "../models/person";

// So TypeScript will let me use jqLite / jquery
declare var $: any;

@Component({
    styles: [],
    selector: 'developer',
    template: `
    <div class="input-group dev" *ngFor="#peep of peeps">
        <span class="input-group-addon" *ngIf="peep.shouldPair">
            <div class="cbx cbx-md cbx-active" tabindex="1000">
                <span class="cbx-icon">
                    <div [ngSwitch]="peep.state">
                        <template ngSwitchDefault><i class="glyphicon glyphicon-ok" (click)="onToggleCheckbox(peep,1)"></i></template>
                        <template [ngSwitchWhen]="1"><i class="glyphicon glyphicon-user" (click)="onToggleCheckbox(peep,2)"></i></template>
                        <template [ngSwitchWhen]="2"><i class="glyphicon glyphicon-stop" (click)="onToggleCheckbox(peep,3)"></i></template>
                        <template [ngSwitchWhen]="3"><i class="glyphicon glyphicon-remove" (click)="onToggleCheckbox(peep,0)"></i></template>
                    </div>
                </span>
            </div>
        </span>
        <div type="text" class="form-control" aria-label="...">{{peep.name}}</div>
        <span class="input-group-addon">
            <button class="btn btn-default btn-sm dev-btn-switch glyphicon glyphicon-resize-horizontal" id="{{peep.name}}" (^click)="onSelect(peep)" role="button"></button>
        </span>
    </div>
    `,
    inputs: ['peeps', 'teamname']
})
export class Dev {
    public onSwitchPair = new EventEmitter();

    public peeps: Person[];
    public teamname: string;
    constructor( private el: ElementRef) { }


    onToggleCheckbox(person: Person, change) {
        person.state = change;
    }
}
