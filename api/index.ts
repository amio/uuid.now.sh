import uuid from '@lukeed/uuid'

export default (req, res) => {
  res.setHeader('cache-control', 'no-store')
  res.send(uuid())
}
