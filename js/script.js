module.exports = ({github, context}) => {
  const files = github.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.number
  });
  files.then((files) => {
    files.map((file) => {
      console.log(file.filename, file.contents_url);
    });
  });
  return true;
}
