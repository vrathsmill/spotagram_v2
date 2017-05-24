class FlickrImage {
  constructor(id, src, alt) {
    this.id = id
    this.alt = alt
    this.src = src
    this.html = $("<img/>").attr({"src": src, "alt": alt, "id": id})
  }
}
