/// <reference types="vite/client" />

// 声明虚拟模块类型（关键）
declare module 'virtual:svg-icons-register' {
    const content: () => void;
    export default content;
}
