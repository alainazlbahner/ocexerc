
const {GameServerConfigsServiceClient} = require('@google-cloud/game-servers');

const client = new GameServerConfigsServiceClient();

async function callLoadLeaderboard() {
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'Your Google Cloud Project ID';
  // const location = 'A Compute Engine region, e.g. "us-central1"';
  // const realmId = 'The ID of the realm to be created';
  // const network = 'The network for the gameserver config, e.g. "global" or "projects/{project}/global/networks/{network}"';
  // const leaderboardAddress = 'The address of the leaderboard to be loaded';
  const request = {
    parent: client.realmPath(projectId, location, realmId),
    network,
    leaderboardAddress,
  };

  const [operation] = await client.loadLeaderboard(request);
  const results = await operation.promise();
  console.log(results);
}

callLoadLeaderboard();


