export type Participant = {
  name: string,
  votesPercentage: number
}

export type Status = 'active'|'inactive'

export type Result = {
  id: number,
  status: Status,
  totalVotes: number,
  participants: Participant[],
}