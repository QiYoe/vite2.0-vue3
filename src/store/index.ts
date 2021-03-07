import { createStore } from 'vuex'

interface State {
  userName: string
  taskList: any[]
}

export default createStore({
  state: {
    author: 'Asiter',
    describe: '一个贴膜的少年',
    userName: '反对反对',
    taskList: [],
  },
  mutations: {
    createTask(state: any, newTask: string) {
      state.taskList.push(newTask)
    },
    deleteTask(state: any, index: number) {
      state.taskList.splice(index, 1)
    },
    updateStatus(state: any, payload: any) {
      const { index, status } = payload

      state.taskList[index].isfinished = status
    },
  },
})
