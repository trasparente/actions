module.exports = ({github, context}) => {

  // console.log('context.actor', context.actor);

  // List pull request files
  // Return a promised array {filename: "_data/players/trasparente/profile.json", contents_url: "..."}
  const listFiles = github.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.number
  })
  
  // Loop files and get request contents
  // Return an array of promises {name: "profile.json", content: "..."}
  const request_array = listFiles => listFiles.data.map(file => github.request(`GET ${file.contents_url}`))

  // CHAIN PROMISES
  // Execute in parallel and wait all, return array of contents objects
  const chain = array => Promise.all(array)

  // LOG
  // All promises resolved, checkpoint
  const log = contents => contents.map(content => console.log(content.data.name, content.data.path, JSON.parse(Buffer.from(content.data.content, 'base64').toString('binary'))))

  // RETURN MODULE
  listFiles.then(request_array).then(chain).then(log)
  return true
}
