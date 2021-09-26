export default class Utils {
  static checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    }
    const error = new Error(response.statusText)

    error.response = response
    throw error
  }

  static parseJSON = (response) => response.json()

  static fetchJSON = (url) =>
    fetch(url).then(this.checkStatus).then(this.parseJSON)

  static curiosity =
    'https://media.istockphoto.com/photos/mars-rover-robotic-space-autonomous-vehicle-on-a-deserted-planet-with-picture-id1006754478?k=6&m=1006754478&s=612x612&w=0&h=_Hi8PjNujyMRYbgQ4Dc73dKTs6kcd9UGK_nN2m-Q7QA='

  static spirit =
    'https://www.usnews.com/dims4/USNEWS/65864f1/2147483647/resize/640x/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fdbimages%2Fmaster%2F13635%2FFE_PR_091112NASArover.jpg'

  static opportynity =
    'https://solarsystem.nasa.gov/system/content_pages/main_images/1057_1057_rover2_768.jpg'
}

// 59CDafTnK5TeXMtpaRwlrBGoJJ0WoLciNEVfIe5z
