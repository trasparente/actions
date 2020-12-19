module.exports = ({github, context, files}) => {
  return {context.payload.number, context.payload.sender.login, github.event, files};
}
