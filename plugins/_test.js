const roles = {
  /*
  'Role Name': <Nivel mínimo para obtener este rol>
  */
  'Bronce': 0,
  'Plata': 10,
  'Oro': 20,
  'Platino': 30,
  'Diamante': 40,
  'Maestros': 50,
  'Campeones': 60,
  'Legendario': 80
}

export = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
