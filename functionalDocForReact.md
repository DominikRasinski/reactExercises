# Funkcjonalna dokumentacja React.js

## Często używane hooki

- [`useState`](#usestate)
- [`useEffect`](#useeffect)
- [`useRef`](#useref)
- [`useReducer`](#usereducer)
- [`useContext`](#usecontext)
- useMemo
- useCallback

## Wykorzystywane techniki

- [`Prop drilling`](#prop-drilling)
- Context API
- [`Component composition`](#component-composition)
- [`Derived state`](#derived-state)

## Problemy

- [`Stale State`](#stale-state)

### useState

> Hook useState w React.js jest używany do zarządzania stanem komponentu.
>
> Jest to funkcja, która przyjmuje jako argument początkowy stan i zwraca tablicę z dwoma elementami: aktualnym stanem i funkcją do ustawiania nowego stanu.
>
> Ustawiony stan jest dostępny w komponencie tak długo jak komponent nie zostanie usunięty.

Przykład:

```js
import React, { useState } from "react";

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

### useRef

`useRef` to komponent, który jest wykorzystywany do przechowywania wartości pomiędzy renderami, ale aktualizacja wartości w `useRef` nie powoduje re-renderu całego komponentu

---

### useReducer

Hook useReducer jest bardo podobny do hooka `useState`, ale umożliwia przeniesienie logiki aktualizacji stanu do pojedynczej funkcji poza komponentem.
Dzięki temu ułatwia zarządzanie bardziej skomplikowaną logiką stanu w porównaniu do prostych zmian stanu, które można łatwiej obsłużyć za pomocą `useState`

---

### useContext

`useContext` to hook w React, który pozwala na korzystanie z kontekstu w funkcjonalnych komponentach. Kontekst w React służy do przekazywania danych przez drzewo komponentów bez konieczności ręcznego przekazywania propsów na każdym poziomie.

Jak działa `useContext`:

1. Tworzenie kontekstu: Najpierw tworzysz kontekst za pomocą React.createContext.
1. Dostarczanie kontekstu: Następnie używasz komponentu Provider, aby dostarczyć wartość kontekstu do drzewa komponentów.
1. Korzystanie z kontekstu: W końcu używasz hooka useContext, aby uzyskać dostęp do wartości kontekstu w dowolnym komponencie.

## Działanie hooka useReducer

Hook przyjmuje trzy argumenty:

1. `reducer`: funkcja, która zawiera całą logikę aktualizacji stanu. Przyjmuje bieżący stan i akcję jako argument i zwraca następny stan.
2. `initialState`: początkowa wartość stanu, może być dowolnego typu.
3. `init` (opcjonalnie): funkcja używana do leniwego inicjalizowania stanu, jeśli jest potrzebna

Zwraca tablicę składającą się z dwóch elementów:

1. `state`: reprezentuje bieżącą wartość stanu, ustawioną na wartość `initialState` podczas pierwszego renderowania
2. `dispatch`: funkcja, które aktualizuje wartość stanu i zawsze wywołuje ponowny render, podobnie jak funkcja aktulizująca w `useState`

```TSX
import React, { useReducer } from 'react';
// Definicja typów akcji
const ActionTypes = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
};

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { count: state.count + 1 };
    case ActionTypes.DECREMENT:
      return { count: state.count - 1 };
    case ActionTypes.RESET:
      return { count: 0 };
    default:
      throw new Error();
  }
}

// Komponent Counter
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Licznik: {state.count}
      <button onClick={() => dispatch({ type: ActionTypes.INCREMENT })}>Zwiększ</button>
      <button onClick={() => dispatch({ type: ActionTypes.DECREMENT })}>Zmniejsz</button>
      <button onClick={() => dispatch({ type: ActionTypes.RESET })}>Resetuj</button>
    </div>
  );
}

export default Counter;
```

---

## Techniki

### prop-drilling

Prop driling jest to zarazem sposób na przekazywanie danych z rodzica do dziecka w react.js. I również jest to problem jakim możemy się zacząć borykać podczas tworzenia większej aplikacji, ponieważ przekazywanie z jednego komponentu do drugiego, jeżeli jest ich na przykład dwoje to jest prosty sposób. Ale jeżeli chcemy przekazać dane z rodzica do dziecka, a następnie do dziecka do dziecka i tak dalej to jest problem, ponieważ musimy śledzić wszystkie komponenty, które są "pośrednikami" przekazania propsów.

![prop drilig](./docsImage/prop-driling-light.svg)

Przykładowy kod z prop drilling:

```js
import React, { useState } from "react";

function ParentComponent() {
  const [data, setData] = useState("");
  const handleChange = (event) => {
    setData(event.target.value);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent data={data} onChange={handleChange} />
    </div>
  );
}

function ChildComponent({ data, onChange }) {
  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" value={data} onChange={onChange} />
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

`Stale State` odnosi się do sytuacji w której komponent używa przestarzałej wersji stanu, ponieważ stan nie został zaktualizowany w odpowiednim momencie lub w odpowiedni sposób. Co zazwyczaj prowadzi do nie oczekiwanym zachowań oraz błędów.

Przykład problemu `stale state`

```TSX
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;
```

Kliknięcie przycisku zwiększy wartość `count` o 1 po upływie 1 sekundy. Jednakże, jeśli klikniemy w przycisk kilka razy w krótkim odstępie czasu to zmienna `count` ulegnie rozsynchronizowaniu. Dzieje się tak ponieważ funkcja `setTimeout` używa przestarzałej wartości zmiennej `count` w momencie jej wywoływania.

Rozwiązaniem problemu jest wykorzystanie funkcji aktualizującej stan, która przyjmuje poprzedni stan i na jego podstawie zwraca nowy stan.

Przed:

```TSX
  const handleClick = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };
```

Po:

```TSX
  const handleClick = () => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1); // użycie funkcji aktualizującej
    }, 1000);
  };
```
