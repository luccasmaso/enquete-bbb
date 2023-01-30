import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'
import { Result } from '../lib/Components/Voting/Types'
import VotingView from '../lib/Components/Voting/VotingView'

export default function Index(props: { results: Result[] }) {
  return (
    <VotingView results={props.results} />
  )
}

export async function getStaticProps() {
  const client = new DynamoDBClient({ 
    region: "us-east-1",
    credentials: {
      accessKeyId: `${process.env.ACCESS_KEY}`,
      secretAccessKey: `${process.env.SECRET_KEY}`,
    },
  })

  try {
    const data = await client.send(new ScanCommand({
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

    return {
      props: {
        results
      },
      revalidate: 60 * 15, // In seconds
    }
  } catch (error) {
    return {
      props: { results: [] }
    }
  }
}