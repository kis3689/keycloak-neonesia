export interface PeriodicUser {
  realm: string;
  briefRepresentation: boolean;
  email: string;
  first: number;
  firstName: string;
  lastName: string;
  max: number;
  search: string;
  username: string;
  id: string;
}

export const SAMPLE_USERS: PeriodicUser[] = [
  { realm: 'neoneisa', briefRepresentation: true, id: 'abcd-efgh-1234-5678', email: 'alice@asdf.com', first: 1, firstName: 'smith', lastName: 'alice', max: 1, search: 'alice', username: 'admin' },
  { realm: 'keppo', briefRepresentation: false, id: 'qwer-asdf-1234-5678', email: 'admin@neonesia.net', first: 1, firstName: 'insub', lastName: 'kim', max: 1, search: 'kim', username: 'insubkim' },
  { realm: 'neoneisa', briefRepresentation: true, id: 'zxcv-ghfj-0987-9999', email: 'john@fewfew.net', first: 1, firstName: 'Doe', lastName: 'John', max: 1, search: 'john', username: 'john' },
  { realm: 'google', briefRepresentation: false, id: 'gggg-qwer-1029-1000', email: 'google@neonesia.net', first: 1, firstName: 'google', lastName: 'google', max: 1, search: 'tester', username: 'tester' },
  { realm: 'developer', briefRepresentation: true, id: 'dddd-aaaa-1111-2222', email: 'dev@dev.net', first: 1, firstName: 'dev', lastName: 'apple', max: 1, search: 'dev', username: 'dev' },
];