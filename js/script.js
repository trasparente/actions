module.exports = ({github, context}) => {
  const listFiles = github.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.number
  });
  const loop = listFiles.then((response) => {
    const output = response.data.map((file) => {
      console.log(file);
      return file;
    });
    return output;
  });
  loop.then((array) => {
    console.log("final", array.length);
  });
  return true;
}
