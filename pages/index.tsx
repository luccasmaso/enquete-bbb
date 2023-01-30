
import { Result } from '../lib/Data/Types'
import VotingView from '../lib/Components/Voting/VotingView'
import Results from '../lib/Data/Results'

export default function Index(props: { results: Result[] }) {
  return <VotingView results={props.results} />
}

export async function getStaticProps() {
  const results = await new Results().list()

  if (results) {
    return { props: { results }, revalidate: 60 * 15 }
  } else {
    return { props: { results: [] } }
  }
}