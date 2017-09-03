export class QueryDefinition {
  count: number;
  term: string;

  constructor(count: number, term: string) {

    if (count < 1) {
      console.error(
        new Error('Illegal argument exception: QueryDefinition constructor accepts positive integer, but a value < 1 was detected.'));
    }

    this.count = Math.round(count);

    if (term.trim().length < 1) {
      console.error(
        new Error('Illegal argument exception: QueryDefinition constructor accepts nonetmpy string, but an empty one was detected.'));
    }

    this.term = term;
  }

}
