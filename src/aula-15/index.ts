/*
    Generic
*/

/** Convenções
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */

function useState<T>() {
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

let newState = useState<string>();
newState.get();
newState.set('Pedro');
// newState.set(123); erro
