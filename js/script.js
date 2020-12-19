module.exports = ({github, context}) => {
  function get_pull(response) {
    return [response.data.filename, response.data.contents_url];
  };
  const files_double = github.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.number
  }).then(get_pull);
}
