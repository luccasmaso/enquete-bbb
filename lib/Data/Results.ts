import { DynamoDBClient, ScanCommand, ScanOutput } from '@aws-sdk/client-dynamodb'
import { Participant, Result, Status } from './Types'

export default class Results {
  client?: DynamoDBClient

  constructor() {
    this.client = new DynamoDBClient({ 
      region: "us-east-1",
      credentials: {
        accessKeyId: `${process.env.ACCESS_KEY}`,
        secretAccessKey: `${process.env.SECRET_KEY}`
      }
    })
  }

  async list(): Promise<Result[] | undefined> {
    try {
      const data = await this.client!.send(new ScanCommand({
        TableName: "enquete-bbb-results"
      }))
  
      const results = this.mapItems(data.Items)
  
      return results
    } catch (error) {
      return undefined
    }
  }

  mapItems(items?: ScanOutput["Items"]): Result[] {
    return items?.map<Result>((element) => {
      return {
        id: parseInt(element.id.S!),
        status: element.status.S as Status,
        totalVotes: parseInt(element.totalVotes.N || '0'),
        participants: element.participants.L?.map<Participant>(participant => ({
          name: participant.M?.name.S!,
          votesPercentage: parseFloat(participant.M?.votesPercentage.N || '0')
        })) || [],
      }
    }) || []
  }
}