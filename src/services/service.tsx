import { api } from "../assets/api/api"

export const create = <T extends {}>(url: string, data: T) => {
  return api.post<T>(`/${url}`, data)
}

export const createAll = <T extends {}>(url: string, data: T[]) => {
    return api.post<T[]>(`/${url}/createAll`, data)
}

export const getRetrieve = <T extends {}>(url: string) => {
  return api.get<T[]>(`/${url}/retrieve`)
}

export const getAllPage = <T extends {}>(url: string) => {
  return api.get(`/${url}/0/20/name`)
}

export const getAll = <T extends {}>(url: string) => {
  return api.get<T[]>(`/${url}`)
}

export const retrieve = <T extends {}>(url: string, id: string) => {
  return api.get<T>(`/${url}/${id}`)
}

export const update = <T extends {}>(url: string, id: string, data: T) => {
  return api.put<T>(`/${url}/${id}`, data)
}

export const updatePKComposite = <T extends {}>(url: string, dateObservation: Date, ddddddd: string, ii: string, iii: string, data: T) => {
  return api.put<T>(`/${url}`, data)
}

export const deletePKComposite = <T extends {}>(url: string, dateObservation: Date, ddddddd: string, ii: string, iii: string) => {
  if (ddddddd == null) {
    return api.delete<T>(`/${url}/${dateObservation}/${ii}/${iii}`)
  } else {
    return api.delete<T>(`/${url}/${dateObservation}/${ddddddd}`)
  }
}

export const remove = <T extends {}>(url: string, id: string) => {
  return api.delete<T>(`/${url}/${id}`)
}

export const removeAll = <T extends {}>(url: string) => {
  return api.delete<T[]>(`/${url}`)
}

export const findBySource = <T extends {}>(url: string, source:string) => {
  return api.get<T[]>(`/${url}?source=${source}`)
}