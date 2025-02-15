# Wstęp

Repozytorium zawiera ćwiczenia które pozwalają mi zrozumieć o wiele lepiej działanie frameworku React.js

- Ważniejsze elementy są zapisywane w sekcji [Dokumentacja](#dokumentacja)
- Wraz z rozwojem `dokumentacji` w tym projekcie jest prowadzone laboratorium na prostych przykładach https://github.com/DominikRasinski/react-simple-practise

## React po co nam to?

- React i nie tylko ponieważ wszystkie frameworki reactopodobne powstały w jednym celu aby uprościć synchronizację elementów UI z danymi pobieranymi z serwera. Można by powiedzieć a czy JS w domyślnej formie nie potrafiłby tego samego? Ależ oczywiście, że by potrafił tylko odtworzenie funkcji takich, które oferuje react zajęłoby naprawdę dużo czas oraz stworzyłoby tak zwany "spaghetii code" - co samo w sobie wyklucza odtworzenie react'a w samym JS.
- React posługuję się abstrakcją w stosunku do DOM, dzięki czemu developer nie musi pisać kodu jak osiągnąć wygląd UI, tylko wystarczy że napisze co chce uzyskać jako wygląd UI. Bez zbędnej szamotaniny z wybieraniem poszczególnych elementów DOM, React to osiągnie samemu takie podejście nazywamy '**Declarative**' a podejście gdzie musimy opisać wszystkie kroki jak rozwiązać dany problem to '**Imperative**'

# Dokumentacja

Dokumentacja została przeniesiona do osobnego repozytorium aby utrzymać lepszy porządek

Link do nowego miejsca gzie jest przetrzymywana dokumentacja https://github.com/DominikRasinski/reactDocumentation

# Trouble shooting

Jeżeli z jakiegoś powodu nie zadziała jakakolwiek aplikacja z tego repozytorium należy sprawdzić czy została wykonana komenda w terminalu `npm install` lub `yarn install` - to spowoduje, że pojawi się folder node_modules i wszystkie zależności zostaną zaciągnie od nowa.

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

#### Aby prettier przestał robić nie potrzebne głupoty warto również rozważyć podmianę wszystkich opcji jedną:

```json
{
  "tabWidth": 2
}
```

Przydatne info na temat konfigurowania nie tylko pretiera https://dev.to/suchintan/reacttypescripteslint-prettier-full-setup-p7j

## Błąd Type '{}' is not assignable to type 'ReactNode'

Błąd występuje w dziwny sposób jeżeli chcemy się bawić w bardziej skomplikowane struktury danych jak na przykład `kolekcje obiektów` to po stworzeniu typu oraz interfejsu obsługującego typ poprzednio zapisany. Próba interakcji po kolekcji może się zakończyć błędem, że nasz typ nie jest możliwy do przypisania do ReactNode. Aby naprawić taki błąd należy tak naprawdę sprawdzić czy poprawnie przypisujemy typy danych, ponieważ gdy taki błąd występuje to bardzo możliwe, że błędem po naszej stronie jest zła próba przypisania zwracanej wartości przez kolekcję. Dobrym przykładem może być komponent tworzący dynamicznie listę:

```JSX
type skillInfo = {
  skill: string;
}

interface SkillsProps extends LiHTMLAttributes<HTMLLIElement>{
  skillList: skillInfo[];
  children?: React.ReactNode | undefined;
}

export const SkillList = (props: SkillsProps) => {
  return (
    <ul>
      {props.skillList.map((skill) => {
        return <li>{skill.skill}</li>; // Poprawna próba odczytania właściwości obiektu
      })}
    </ul>
  );
};
```

#### Przykłady błednego odwołania się do wartości

Jeżeli spróbujemy odczytać obiekt nie wskazując własności z przypisaną wartością, to zostanie mam zwrócony **błąd Type '{}' is not assignable to type 'ReactNode'**

```JSX
export const SkillList = (props: SkillsProps) => {
  return (
    <ul>
      {props.skillList.map((skill) => {
        return <li>{skill}</li>; // Nie poprawna próba odczytania właściwości obiektu
      })}
    </ul>
  );
};
```

Można taki błąd również zamaskować pod postacią typu `string` który nie będzie zwracać nam błędu parsera.</br>
Ale w takim wypadku zostanie zwrócona nam wartość tablicy `[object object]` - **Nadal program będzie źle działać**

```JSX
export const SkillList = (props: SkillsProps) => {
  return (
    <ul>
      {props.skillList.map((skill) => {
        return <li>{`${skill}`}</li>; // Nie poprawna próba odczytania właściwości obiektu za pomocą rzutowania na string
      })}
    </ul>
  );
};
```

### Pozostałe triki jak można spróbować rozwiązać taki błąd

```JSON
"@types/react": "^18.2.79",
"@types/react-dom": "^18.2.25"
```

Jeżeli posiadamy taki wpis jak powyżej, to musimy usunąć znak karetki `^` przed wersją. Jeżeli bowiem to nie zadziała należy zmienić wersję na

```JSON
"resolutions": {
  "@types/react": "17.0.2",
  "@types/react-dom": "17.0.2"
},
```

I spróbować postawić na nowo projekt za pomocą `npm install` możemy później spróbować wrócić do wersji

```JSON
"@types/react": "18.2.79",
"@types/react-dom": "18.2.25"
```
