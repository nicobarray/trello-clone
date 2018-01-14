module.exports = {
  info: obj => {
    console.log(
      JSON.stringify(
        Object.assign(
          {
            meta: {
              who: 'list-api',
              level: 'info',
              when: Date.now()
            }
          },
          obj
        )
      )
    )
  }
}
