import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// 初始化各种设定
// 周期，事件，渲染，inject/provide以及state
// 在此期间触发beforeCreated以及created两个钩子函数
initMixin(Vue)
// 分别定义$data以及$props作为实例的_data以及_props的代理访问
// 定义原型上的$set以及$delete方法
// 定义原型链上$watch方法
stateMixin(Vue)
// 在Vue原型上定义$on,$once,$off以及$emit四个方法
eventsMixin(Vue)
// 在Vue原型上定于_update,$forceUpdate以及$destroy方法
lifecycleMixin(Vue)
// 在Vue原型上绑定各种渲染辅助函数
// 在Vue原型上定义$nextTick以及_render方法
renderMixin(Vue)

export default Vue
