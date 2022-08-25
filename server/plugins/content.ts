export default defineNitroPlugin((nitroApp) => {
  function insertChar(str: string, index: number, value: string) {
    return str.substring(0, index) + value + str.substring(index)
  }

  nitroApp.hooks.hook('content:file:beforeParse', (file: { _id: string; body: string }) => {
    if (file._id.endsWith('.md')) {
      // words per minute
      const wpm = 225
      // reformat body without front-matter, component and reformated white space for calculting character
      const bodyFormat = file.body
        .substring(file.body.indexOf('---', 1))
        .replace(/::[^\n]([a-z]|-)*{(?:[^}]*).*}/g, '') // remove component name with bracket
        .replace(/::[^\n]([a-z]|-)*\n/g, '') // remove component name without bracket
        .replace(/::\n/g, '') // remove :: end of component
        .trim()
        .split(/\s+/)
      const nbChar = bodyFormat.length
      // insert reading time into front-matter body. Will be accessible by doing page.readingTime
      file.body = insertChar(file.body, 4, `readingTime: ${Math.ceil(nbChar / wpm)} min read\n`)
    }
  })
})
