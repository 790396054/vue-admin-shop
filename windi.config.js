import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
    shortcuts: {
        // 'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
        // 'btn-green': 'text-white bg-green-500 hover:bg-green-700',
    },
    plugins: [
        // require('windicss/plugin/forms'),
    ]
})