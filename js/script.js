module.exports = ({github, context, files}) => {
  console.log('from inside', context.pull_request, files);
  const files_double = async () => {
     return await github.pulls.listFiles({
      owner: context.repo.owner,
      repo: context.repo.repo,
      pull_number: context.payload.number
    });
  }
  return [github, context.pull_request, files, files_double];
}
