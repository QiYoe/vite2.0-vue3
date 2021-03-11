// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'

// export default function (app) {
//   app.use(ElementPlus)
// }

// 按需加载
import { ElButton, ElInput } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

export default function (app) {
  app.use(ElButton)
  app.use(ElInput)
}