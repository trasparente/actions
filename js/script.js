module.exports = ({github, context}) => {
  const get_pull = (response) => {
    console.log([response.data.filename, response.data.contents_url]);
    return true;
  };
  const files_double = github.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.number
  }).then(get_pull);
}
