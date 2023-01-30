export type Participant = {
  name: string,
  image: string,
  votesPercentage: number
}

export type Result = {
  id: number,
  status: 'active'|'inactive',
  totalVotes: number,
  participants: Participant[],
}