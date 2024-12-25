export interface Hero {
  id: number;
  name: string;
  power: string;
  alterEgo?: string; // Optional property
}


export const HEROES: Hero[] = [
  { id: 1, name: 'Spider-Man', power: 'Wall-crawling', alterEgo: 'Peter Parker' },
  { id: 2, name: 'Iron Man', power: 'Powered Armor Suit', alterEgo: 'Tony Stark' },
  { id: 3, name: 'Hulk', power: 'Super Strength', alterEgo: 'Bruce Banner' },
  { id: 4, name: 'Thor', power: 'God of Thunder' },
  { id: 5, name: 'Black Widow', power: 'Expert Spy', alterEgo: 'Natasha Romanoff' },
  { id: 6, name: 'Captain America', power: 'Enhanced Strength', alterEgo: 'Steve Rogers' },
  { id: 7, name: 'Doctor Strange', power: 'Magic', alterEgo: 'Stephen Strange' },
  { id: 8, name: 'Scarlet Witch', power: 'Reality Manipulation', alterEgo: 'Wanda Maximoff' },
  { id: 9, name: 'Black Panther', power: 'Enhanced Senses', alterEgo: 'T’Challa' },
  { id: 10, name: 'Ant-Man', power: 'Size Manipulation', alterEgo: 'Scott Lang' },
];
