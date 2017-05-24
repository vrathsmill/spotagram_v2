class Store {
  constructor() {
    this.state = {}
  }

  add(resource, object) {
    this.state[resource] || = {}
    this.state[resource][object.id] = object
  }

  find(resource, id) {
    return this.state[resource][id]
  }
}

// store.find("photos", id) // {} || undefined
// store.add("photos", {})
//
//
// store.find("songs", id) // {} || undefined
// store.add("songs", {})
