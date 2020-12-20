module.exports = ({github, context}) => {
  const files = await github.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.number
  });
  console.log('v1', files.data);
  return files.data;
}
