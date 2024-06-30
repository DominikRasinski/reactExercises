# Funkcjonalna dokumentacja React.js

## Często używane hooki

- [`useState`](#usestate)
- [`useEffect`](#useeffect)
- useContext
- useReducer
- useRef
- useMemo
- useCallback

### useState

> Hook useState w React.js jest używany do zarządzania stanem komponentu.
>
> Jest to funkcja, która przyjmuje jako argument początkowy stan i zwraca tablicę z dwoma elementami: aktualnym stanem i funkcją do ustawiania nowego stanu.
>
> Ustawiony stan jest dostępny w komponencie tak długo jak komponent nie zostanie usunięty.

Przykład:

```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Counter;
```

- Montowanie: Kiedy komponent Counter jest po raz pierwszy renderowany, useState(0) inicjalizuje stan count z wartością 0.
- Aktualizacje: Kiedy użytkownik kliknie przycisk, setCount(count + 1) aktualizuje stan count, co powoduje ponowne renderowanie komponentu z nową wartością stanu.
- Odmontowanie: Kiedy komponent Counter jest usuwany z drzewa komponentów (np. przez usunięcie go z DOM), stan count jest również usuwany.

---

#### Czas życia zapisanego stanu

Hook `useState` przechowuje stan w pamięci komponentu podczas jego cyklu życia. Oznacza to, że stan jest zachowywany tak długo, jak długo komponent jest zamontowany w drzewie komponentów. Inaczej mówiąc stan jest tak długo przetrzymywany w pamięci komponentu jak jest wyrenderowany, jeżeli komponent zostanie wyrenderowany ponownie, stan zostanie przywrócony do początkowego stanu.

---

#### Cykl życia stanu w useState

1. **Montowanie komponentu - wywołanie funkcji komponentu**
   - Kiedy komponent jest po raz pierwszy montowany (renderowany) w drzewie komponentów, `useState` inicjalizuje stan z podaną wartością początkową.
   - Stan jest przechowywany w pamięci i jest dostępny dla komponentu podczas jego cyklu życia.
2. **Aktualizacja komponentu - wywołanie funkcji set w `useState`**
   - Kiedy stan jest aktualizowany za pomocą funkcji zwróconej przez `useState` (np. `setCount`), komponent jest ponownie renderowany z nową wartością stanu.
   - Nowy stan jest przechowywany w pamięci i jest dostępny dla komponentu podczas jego cyklu życia.
3. **Odmontowanie komponentu - usunięcie komponentu**
   - Kiedy komponent jest odmontowany (usuwany) z drzewa komponentów, stan przechowywany przez `useState` jest również usuwany.
   - Oznacza to, że stan nie jest już dostępny i nie jest przechowywany w pamięci.

---

Zapisany stan w hooku `useState` jest zapisywany w momencie renderowania komponentu. Jeśli chcesz, aby stan był zapisywany w innym miejscu, możesz użyć funkcji `useEffect `.

### useEffect

> useEffect pozwala zarządzać efektami ubocznymi w komponentach funkcyjnych.
>
> Efekt uruchamia się po każdym renderowaniu, chyba że podasz tablicę zależności.
>
> Możesz zwrócić funkcję czyszczącą, która uruchomi się przed kolejnym uruchomieniem efektu lub przy odmontowywaniu komponentu
