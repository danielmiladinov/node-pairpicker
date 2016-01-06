import {Person} from './Person';
import {Injectable} from 'angular2/core';

@Injectable()
export class DevService {
  getCoreDevs() {
    return Promise.resolve(peeps);
  }
  getCloudDevs() {
    return Promise.resolve(cloudpeeps);
  }
}

var peeps: Person[] =    [
        { name: "Nilhouse", team: "Core" },
        { name: "Patrick", team: "Core" },
        { name: "Max", team: "Core" },
        { name: "Steve", team: "Core" },
        { name: "Becky", team: "Core" },
        { name: "Dave", team: "Core" },
        { name: "Boguste", team: "Core" }];

var qapeeps: Person[] =    [
        { name: "Mark", team: "QA" },
        { name: "Lindsey", team: "QA" },
        { name: "Aman", team: "QA" }];
        
var cloudpeeps: Person[] =    [
        { name: "Keith", team: "QA" }
];
