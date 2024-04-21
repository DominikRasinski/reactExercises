# Wstęp

Repozytorium zawiera ćwiczenia które pozwalają mi zrozumieć o wiele lepiej działanie frameworku React.js

- Każdy trudniejszy temat będzie posiadać plik readme z dodatkowymi informacjami

## React po co nam to?

- React i nie tylko ponieważ wszystkie frameworki reactopodobne powstały w jednym celu aby uprościć synchronizację elementów UI z danymi pobieranymi z serwera. Można by powiedzieć a czy JS w domyślnej formie nie potrafiłby tego samego? Ależ oczywiście, że by potrafił tylko odtworzenie funkcji takich, które oferuje react zajęłoby naprawdę dużo czas oraz stworzyłoby takzwany "spaghetii code" - co samo w sobie wyklucza odtworzenie react'a w samym JS.
- React posługuję się abstrakcją w stosunku do DOM, dzięki czemu developer nie musi pisać kodu jak osiągnąć wygląd UI, tylko wystarczy że napisze co chce uzyskać jako wygląd UI. Bez zbędnej szamotaniny z wybieraniem poszczególnych elementów DOM, React to osiągnie samemu takie podejście nazywamy '**Declarative**' a podejście gdzie musimy opisać wszystkie kroki jak rozwiązać dany problem to '**Imperative**'

# Opis projektów - co jest w nich zawarte i poruszane

## Pizza menu

- Projekt porusza podstawowe informacje na temat tworzenia porjektów w React.js takie jak:
  - Komponenty - czym są, i dlaczego z nich korzystamy, zasady działania itd.
  - Propsy - podstawowa wiedza czym są propsy.
  - State - czyli wykorzystanie hook'a useState pozwalającego na zapisywanie oraz zmienianie stanu zmiennej.
  - Obsługa podstawowych eventów i formularzy.

# Trouble shooting

Jeżeli z jakiegoś powodu nie zadziała jaka kolwiek aplikacja z tego repozytorium należy sprawdzić czy została wykonana komenda w terminalu `npm install` lub `yarn install` - to spowoduje, że pojawi się folder node_modules i wszystkie zależoności zostaną zaciągnie od nowa.

- Jeżeli posiadamy folder node_modules i nadal nam aplikacja nie wstaje to należy taki folder usunąć i uruchomić polecenie `npm install` lub `yarn install` w terminalu.

## Rzadki błąd związany z babelem - narzedzie tłumaczące JS na JSX

Może się zdażyć, że będziemy mieć problemy z metodami wbudowanych obiektów JS dlatego jeżeli napotkamy problemy podobne do takiego błędu:
_babel-preset-react-app, is importing the "@babel/plugin-proposal-private-property-in-object" package without declaring it in its dependencies_ należy zainstalować pakiet `npm install --save-dev @babel/plugin-transform-private-property-in-object` i zresetować projekt za pomocą CTRL + C a póżniej w terminalu odpalając komendę `npm start`

## Błędy związane z Pretierem - narzędzie formatujące kod

Pretier który nie posiada pliku konfiguracyjnego potrafi zrobić kilka błędów największym z nich jest chęć usuwania nawiasów w wyrażeniu jeżeli zajmuje ono jedną linijkę, co doprowadza do błędów lintera oraz React'a w szczególności jeżeli nawiasy zostały usunięte z komponentu który posiada kod JS zwracający jakąś wartość.
Aby temu zapobiec należy stworzyć plik `.prettierrc.json` i dodać do niego jsona takiego jak ten:

```json
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 80,
  "useTabs": false,
  "endOfLine": "auto"
}
```

Przydatne info na temat konfigurowania nie tylko pretiera https://dev.to/suchintan/reacttypescripteslint-prettier-full-setup-p7j
