module.exports = async ({github, context}) => {

  // console.log('context.actor', context.actor);

  // List pull request files
  // Return a promised array {filename: "_data/players/trasparente/profile.json", contents_url: "..."}
  const listFiles = await github.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.number
  })
  
  // Loop files and get request contents
  // Return an array of promises {name: "profile.json", content: "..."}
  const request_array = async (listFiles) => listFiles.data.map(file => await github.request(`GET ${file.contents_url}`))

  // CHAIN PROMISES
  // Execute in parallel and wait all, return array of contents objects
  const chain = async (array) => await Promise.all(array)

  // LOG
  // All promises resolved, checkpoint
  const log = contents => contents.map(content => [content.data.name, content.data.path, JSON.parse(Buffer.from(content.data.content, 'base64').toString('binary'))])

  // RETURN MODULE
  console.log(log());
  return log();
})
