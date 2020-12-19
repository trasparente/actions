module.exports = ({github, context, files}) => {
  console.log('from inside', files.data);
  const files_double = github.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.number
  });
  return [files.data, files_double];
}
