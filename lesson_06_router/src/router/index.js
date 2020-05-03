import RouterDemo from '../components/RouterDemo'
import HelloWorld from '../components/HelloWorld'
import Foo from '../components/Foo'
import Bar from '../components/Bar'
import Child from '../components/Child'

const routers = [
  { path: '/foo', component: Foo, name: '1' },
  { path: '/bar', component: Bar, name: '2' },
  {
    path: '/root/:id',
    component: RouterDemo,
    name: '3',
    props: true,
    children: [
      {
        path: 'child',  // 子路由中，不需要带斜杠 
        component: Child,
        name: "4"
      },
      {
        path: 'child/:name',
        component: Child,
        name: "5"
      }
    ]
  },
  { path: '*', component: HelloWorld, name: '5' }
]

export default routers