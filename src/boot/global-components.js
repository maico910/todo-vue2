function camelCase (str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase()
  }).replace(/\s+/g, '')
}

function upperFirst (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default async ({ Vue }) => {
  // eslint-disable-next-line no-undef
  const globalBaseComponents = require.context(
    'components/global/Base',
    false,
    /Base[A-Z]\w+\.(vue)$/
  )

  const globalComponents = [globalBaseComponents]

  globalComponents.forEach(globalComponentsType => {
    importGlobalComponents(globalComponentsType)
  })

  function importGlobalComponents (webpackImport) {
    webpackImport.keys().forEach(fileName => {
      const componentConfig = webpackImport(fileName)
      const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\/(.*)\.w+$/, '$1'))
      ).slice(2, -4)

      Vue.component(componentName, componentConfig.default || componentConfig)
    })
  }
}
