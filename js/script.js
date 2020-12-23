module.exports = ({github, context}) => {
  const listFiles = github.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.number
  });
  listFiles.then((response) => {
    response.data.map((file) => {
      console.log(file.filename, file.contents_url);
    });
  });
  return true;
}
