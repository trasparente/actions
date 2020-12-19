module.exports = ({github, context, files}) => {
  return {context.payload.number, contenxt.payload.number, github.event.number, github.event.pull_request.number, files};
}
