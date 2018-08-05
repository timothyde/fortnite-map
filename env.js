const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.TILESERVER_URL': prod ? '' : 'http://localhost:8080/data/season5/{z}/{x}/{y}.png',
  'process.env.SPRITE_URL': prod ? '' : 'http://localhost:3000/static/sprites/sprites',
}