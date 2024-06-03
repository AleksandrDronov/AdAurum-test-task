export function createPost(data) {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(`Error: ${response.status}`)
  })
}

export function getMediaPlan() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: new Date().getSeconds(),
        name: 'AdAurum'
      })
    }, 1000)
  })
}
