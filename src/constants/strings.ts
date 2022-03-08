export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Buen trabajo pana', 'Chevere', 'Klidad']
export const GAME_COPIED_MESSAGE = 'Copiado al portapapeles'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Pon mas letras naguara'
export const WORD_NOT_FOUND_MESSAGE = 'No inventes palabras vale, esa no la tenemos por aca'
export const HARD_MODE_ALERT_MESSAGE =
  'Si quieres jugar a lo arrecho es desde el principio, no hagas trampa'
export const HARD_MODE_DESCRIPTION =
  'Cualquier pista revelada debe ser utilizada en las siguientes adivinanzas'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Para que no te duelan esos hermosos ojos'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La palabra fue ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Ira usa ${guess} en la ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Debe tener ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Borrar'
export const STATISTICS_TITLE = 'Estadisticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribucion'
export const NEW_WORD_TEXT = 'Nueva palabra en'
export const SHARE_TEXT = 'Compartir'
export const TOTAL_TRIES_TEXT = 'Total intentos'
export const SUCCESS_RATE_TEXT = 'Tasa de exito'
export const CURRENT_STREAK_TEXT = 'Racha actual'
export const BEST_STREAK_TEXT = 'Mejor racha'
