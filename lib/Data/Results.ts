import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'
import { Result } from './Types'

export default class Results {
  client?: DynamoDBClient

  constructor() {
    this.client = new DynamoDBClient({ 
      region: "us-east-1",
      credentials: {
        accessKeyId: `${process.env.ACCESS_KEY}`,
        secretAccessKey: `${process.env.SECRET_KEY}`,
      },
    })
  }

  async list(): Promise<Result[] | undefined> {
    try {
      const data = await this.client!.send(new ScanCommand({
        TableName: "enquete-bbb-results"
      }))
  
      const results = data.Items?.map((element) => {
        return {
          id: element.id.S,
          totalVotes: parseInt(element.totalVotes.N || '0'),
          status: element.status.S,
          participants: element.participants.L?.map(participant => ({
            name: participant.M?.name.S,
            votesPercentage: parseFloat(participant.M?.votesPercentage.N || '0')
          })),
        }
      }) || []
  
      results
    } catch (error) {
      return undefined
    }
  }
  
}