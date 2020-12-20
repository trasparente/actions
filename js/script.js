module.exports = ({github, context}) => {
  const files = github.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.number
  });
  files.then((files) => {
    console.log('v4', files.data);
    return files.data;
  });
}
