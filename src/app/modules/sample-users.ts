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
  { realm: 'neoneisa', briefRepresentation: true, id: 'abcd-efgh-1234-5678', email: 'admin@neonesia.net', first: 1, firstName: 'john', lastName: 'alice', max: 1, search: 'john', username: 'john' },
  { realm: 'keppo', briefRepresentation: true, id: 'abcd-efgh-1234-5678', email: 'admin@neonesia.net', first: 1, firstName: 'insub', lastName: 'kim', max: 1, search: 'kim', username: 'insubkim' },
  { realm: 'neoneisa', briefRepresentation: true, id: 'abcd-efgh-1234-5678', email: 'admin@neonesia.net', first: 1, firstName: 'john', lastName: 'alice', max: 1, search: 'john', username: 'john' },
  { realm: 'neoneisa', briefRepresentation: true, id: 'abcd-efgh-1234-5678', email: 'admin@neonesia.net', first: 1, firstName: 'john', lastName: 'alice', max: 1, search: 'john', username: 'john' },
  { realm: 'neoneisa', briefRepresentation: true, id: 'abcd-efgh-1234-5678', email: 'admin@neonesia.net', first: 1, firstName: 'john', lastName: 'alice', max: 1, search: 'john', username: 'john' },
  { realm: 'neoneisa', briefRepresentation: true, id: 'abcd-efgh-1234-5678', email: 'admin@neonesia.net', first: 1, firstName: 'john', lastName: 'alice', max: 1, search: 'john', username: 'john' },
  { realm: 'neoneisa', briefRepresentation: true, id: 'abcd-efgh-1234-5678', email: 'admin@neonesia.net', first: 1, firstName: 'john', lastName: 'alice', max: 1, search: 'john', username: 'john' },
  { realm: 'neoneisa', briefRepresentation: true, id: 'abcd-efgh-1234-5678', email: 'admin@neonesia.net', first: 1, firstName: 'john', lastName: 'alice', max: 1, search: 'john', username: 'john' }
];