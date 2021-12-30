// Interface to define our object of response functions
export interface ResponseFuncs {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
  PATCH?: Function
}

// Interface to define our Todo model on the frontend
export interface Todo {
  _id?: number
  title: string
  description: string
  completed: boolean
}