module.exports = ({github, context, files}) => {
  return {context.payload.number, context.payload.sender.login, github.event.number, github.event.pull_request.number, files};
}
