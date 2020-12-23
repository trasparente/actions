module.exports = ({github, context}) => {
  // List pull request files
  github.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.number
  }).then((response) => {
    // Loop files and get content
    return response.data.map((file) => {
      const content = github.request("GET " + file.contents_url);
      return content.data;
    });
  }).then((array) => {
    // log contents array
    console.log("final", array);
  });
  return true;
}
