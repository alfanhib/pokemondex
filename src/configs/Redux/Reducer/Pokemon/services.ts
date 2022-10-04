import axios from 'axios'

export function fetchListPokemon(limit?: number) {
  return new Promise((resolve, reject) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${limit}&limit=5`)
    .then((res) => {
      resolve(res.data)
    })
    .then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  });
}

export function getDetailPokemon(url: string) {
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then((res) => {
      resolve(res.data)
    })
    .then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  });
}

export function getEvolutionPokemon(id: string) {
  return new Promise((resolve, reject) => {
    axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
    .then((res) => {
      resolve(res.data)
    })
    .then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  })
}

export function fetchDataTypePokemon(){
  return new Promise((resolve, reject) => {
    axios.get('https://pokeapi.co/api/v2/type/')
    .then((res) => {
      resolve(res.data)
    })
    .then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  })
}