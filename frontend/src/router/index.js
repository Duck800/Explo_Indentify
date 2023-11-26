import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/explosion_identify'  // 重定向
        },
        {
            path: '/explosion_identify',//choice为右侧功能区显示的内容（如dashboard、segmentation）
            name: 'explosion_identify',  // 布局界面（包括菜单栏与功能区）
            component: () => import('@/views/layout/index.vue'),
        },
    ]
})

export default router
