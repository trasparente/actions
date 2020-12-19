module.exports = ({github, context}) => {
  return {context.payload.number, contenxt.payload.number, github.event.number, "https://api.github.com/repos/${{ github.repository }}/pulls/${{ github.event.pull_request.number }}/files"};
}
