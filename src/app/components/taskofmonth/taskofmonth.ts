/*export interface Taskofmonth {
  id: number,
  content: string,
  isDone: boolean,
  category: {
    id: number
  },
  interval: {
    id: number
  },
  importance: {
    id: number
  }
}*/

export interface Taskofmonth {
  id: number,
  name: string,
  content: string,
  isDone: boolean,
  iname: string
}
