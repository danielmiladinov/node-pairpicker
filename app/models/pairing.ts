import {Team} from '../models/team';
import {Person} from '../models/person';

export class Pairing {
  randomPairs: string[];
  intentionalPairs: string[];
  odd: string[];

  constructor () {
    this.randomPairs = [];
    this.intentionalPairs = [];
    this.odd = [];
  }

  public shuffle <T> (o: T[]): void {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  }

  private splitarray <T> (input: T[], spacing: number): T[][] {
    var output = [];
    for (var i = 0; i < input.length; i += spacing) {
      output[output.length] = input.slice(i, i + spacing);
    }
    return output;
  }

  public generatePairs (team: Team, intentionalPairs: [Person, Person][], odd: Person[]): void {
    let comparePeople = (p1: Person, p2: Person): number => {
      let nameA = p1.name.toLowerCase(), nameB = p2.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    };

    let pairToString = (pair: Person[]): string => {
      return pair.map(p => p.name).join(' :: ');
    };

    this.shuffle(team.members);

    let split = this.splitarray(team.members, 2);
    this.randomPairs = [];

    intentionalPairs.forEach(p => p.sort(comparePeople));
    this.intentionalPairs = intentionalPairs.map(pairToString);

    this.odd = odd.map(a => a.name);
    split.forEach((element: Person[]): void => {
      if (element.length === 2) {
        element.sort(comparePeople);
        this.randomPairs.push(pairToString(element));
      } else {
        this.odd.push(element[0].name)
      }
    });
  }
}
