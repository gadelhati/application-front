import { api } from "../api/api"
import { Manufacturer } from "../components/manufacturer/manufacturer.interface"

export const create = (url: string, data: Manufacturer) => {
  return api.post(`/${url}`, data)
}

export const createAll = (url: string, data: Manufacturer[]) => {
    return api.post(`/${url}/createAll`, data)
}

export const getRetrieve = (url: string) => {
  return api.get(`/${url}/retrieve`)
}

export const getAll = (url: string) => {
  return api.get(`/${url}`)
}

export const retrieve = (url: string, id: string) => {
  return api.get(`/${url}/${id}`)
}

export const update = (url: string, id: string, data: Manufacturer) => {
  return api.put(`/${url}/${id}`, data)
}

export const remove = (url: string, id: string) => {
  return api.delete(`/${url}/${id}`)
}

export const removeAll = (url: string) => {
  return api.delete(`/${url}`)
}

export const findBySource = (url: string, source:string) => {
  return api.get(`/${url}?source=${source}`)
}