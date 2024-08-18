# Funkcjonalna dokumentacja React.js

## Często używane hooki

- [`useState`](#usestate)
- [`useEffect`](#useeffect)
- useContext
- useReducer
- useRef
- useMemo
- useCallback


## Wykorzystywane techniki

- [`Prop drilling`](#prop-drilling)
- [`Component composition`](#component-composition)
- Derived state

## Problemy
- Stale State

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

### Czas życia zapisanego stanu

Hook `useState` przechowuje stan w pamięci komponentu podczas jego cyklu życia. Oznacza to, że stan jest zachowywany tak długo, jak długo komponent jest zamontowany w drzewie komponentów. Inaczej mówiąc stan jest tak długo przetrzymywany w pamięci komponentu jak jest wyrenderowany, jeżeli komponent zostanie wyrenderowany ponownie, stan zostanie przywrócony do początkowego stanu.

---

### Cykl życia stanu w useState

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

UseEffect jest uruchamiany dopiero po renderowaniu komponentu.

UseEffect załącza się po wyświetleniu DOM w przeglądarce czyli po etapie paint browser
Tablica zależności w jest bardzo ważnym elementem useEffect ponieważ dzięki niej udaje się zapanować nad momentem kiedy useEffect ma zostać odpalony, albo pozwala zaplanować kiedy dane pobranie danych ma zostać wykonane. "Kiedy" oznacza moment zaktualizowania danej zamiennej albo stanu w komponencie.

---
## Techniki

### prop-drilling

Prop driling jest to zarazem sposób na przekazywanie danych z rodzica do dziecka w react.js. I również jest to problem jakim możemy się zacząć borykać podczas tworzenia większej aplikacji, ponieważ przekazywanie z jednego komponentu do drugiego, jeżeli jest ich na przykład dwoje to jest prosty sposób. Ale jeżeli chcemy przekazać dane z rodzica do dziecka, a następnie do dziecka do dziecka i tak dalej to jest problem, ponieważ musimy śledzić wszystkie komponenty, które są "pośrednikami" przekazania propsów.

![prop drilig](./docsImage/prop-driling-light.svg)

Przykładowy kod z prop drilling:

```js
import React, { useState } from 'react';

function ParentComponent() {
  const [data, setData] = useState('');
  const handleChange = (event) => {
    setData(event.target.value);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent
        data={data}
        onChange={handleChange}
      />
    </div>
  );
}

function ChildComponent({ data, onChange }) {
  return (
    <div>
      <h2>Child Component</h2>
      <input
        type='text'
        value={data}
        onChange={onChange}
      />
    </div>
  );
}
export default ParentComponent;
```

Zalecanym sposobem na przekazywanie danych pomiędzy większą ilością komponentów jest użycie kontekstu. Kontekst pozwala na przekazywanie danych pomiędzy wszystkimi komponentami bez potrzeby śledzenia ich hierarchii. Albo tak zwanego podejścia `component composition`

---

### component-composition
---
### Derived state
Technika odnośni się do tworzenia stanu komponentu, który jest tworzony na podstawie innych stanów lub właściwości pozyskanych z props. **Stan jest dynamicznie tworzony w trakcie renderowania komponentu**, nie wykorzystujemy do jego stworzenia hooka `useState`.

Przykładowy kod wykorzystujący `Delivered State` ustawiony za pomocą dostarczonych **Props'ów**

```TSX
import React from 'react';

function ItemList({ items }) {
  // Derived state: liczba elementów
  const itemCount = items.length;

  return (
    <div>
      <p>Number of items: {itemCount}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
```

> **Delivered state** pozwala na obliczanie stanu na podstawie innych stanów lub props'ów, co pozwala nam na uproszczenie logiki komponentów i uniknięcie problemów z synchronizacją.
>
> Jednym z minusów takiego działania jest to, że takie obliczenia lub ustawianie danych stanów są kosztowne, aby zminimalizować wpływ takiego **Delivered state** na wydajność możemy wykorzystać to tego hook'a `useMemo`

---
## Problemy
### Stale state

