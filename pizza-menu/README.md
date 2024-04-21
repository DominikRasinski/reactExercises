# Komponenty

Komponenty w react.js to tak naprawdę bloki kodu z których możemy tworzyć UI.

- Komponenty cechują się tym, że są reużywalne (conajmniej powinny być tak tworzone)
- Zawartość komponentu powinna być zagnieżdżona w jednym znaczniku
- **Nazwa komponentu** musi zaczynać się z dużej litery
- Komponenty muszą coś zwracać, może to być po prostu null albo nawet pusty znak reacta `<></>`
- Komponenty nie powinny być zagnieżdżane w innych (chodzi o ich implementację)

## Zawartość komponentu

Jeżeli chcemy aby zawartość komponentu wyświtlała więcej elementów niż jeden to oba elementy musimy zagnieździć w jakim kolwiek parencie.
Najczęściej wykorzystywanymi elementami wykorzystywanymi do parentów są znaczniki takie jak `<div></div>`, `<p></p>` oraz specjalne znaczniki dostarczane w przez **React.js** puste nawiasy strzałkowe `<></>` ich specjalność polega na tym, że nie są wyświetlane w kodzie strony po stronie przeglądarki.

Puste znaczniki są bardzo przydatne jeżeli chcemy wyrenderować dwa komponenty obok siebie, a nie chcemy aby były zamykane w jednym z znaczników HTML.

## Stylizacja komponentu inline

Stylizacja komponentu inline w react.js jest trochę nie intuicyjna na samym początku ponieważ wykorzystujemy atrybut `style` w znaczniku html, ale zapis CSS został zmieniony na obiekt zbliżony do JS lub JSON czyli stylizacja inline wygląda mniej więcej tak:

```JSX
<h2 style={{ color: "red", fontSize: '50px' }}>Our menu</h2>
```

Dłuższe nazwy zostały zmienione, na przykład **font-size** został przemieniony na nazwę wykorzystującą camelCase **fontSize** i to się tyczy każdej nazwy która wcześniej była oddzielana za pomocą myślnika

# Props

## Przekazywanie właściwości do props

Jeżeli przekazujemy wartośc do props za pomocą cudzysłowia to automatycznie taki zapis staje się stringiem, jeżeli chcemy przekazać inny typ danych jak na przykład number lub obiekt to musimy skorzystać z zapisu JS który wywołujemy za pomocą nawiasów klamrowych {}

```JSX
<Pizza name="Carbonara" photoPath="pizzas/carbonara.jpg" price={10}/>
```

Props jest tak naprawdę sktórem od słowa properties czyli właściwości obiektu aby przekazywać props'y możemy to wykonać na kilka sposobów:

## JSX

Pierwszy i najczęściej spotykany sposób przekazywania props'ów w projekcie stojącym na samym JSX jest
po prostu dopisanie nowej nazwy właściwości wraz z wartością jaką chcemy obsłużyć w komponencie.

```JSX
<Pizza name="Carbonara" photoPath="pizzas/carbonara.jpg"/>
// Name oraz photoPath - to są właśnie nowe nazwy właściwości czyli nowe props'y jakie będziemy obsługiwać w komponencie
```

A aby nowe props'y zostały obsłużone wewnątrz komponentu należy dodać do funkcji parametr `props` do właściwości obiektu `props` możemy się dostać za pomocą notacji wykorzystującej kropkę czyli `props.name`

```JSX
function Pizza(props) {
    return (
        <div>
            <img src={props.photoPath} alt={props.name}>
            <h3>{props.name}</h3>
        </div>
    )
}
// właściwość props.photoPath zwróci nam pizzas/carbonara.jpg
// a właściwość props.name zwróci nam Carbonara
```

## TSX - rozszerzenie dla typescript

Kolejny i bardziej preferowany sposób ze względu na utrzymanie oraz bezpieczeństwo jest tworzenie `interfejsu` lub wymaganego `type'a` - to jest bardziej dobra praktyka w pisaniu aplikacji React.js z wykorzystaniem Typescipt'u bo nic nie stoi na przeszkodzie aby wykorzystać do obsługi props'u notacji z JSX - to też zadziała.

Ale wracając na tory to komponent wykorzystujący `props'y` za pomocą `interfejsu` lub `type` należy zacząć przygotowywać od środka komponentu czyli zastanowić się nad tym jakie wartości będą nam piotrzebne do poprawnego wyświetlania komponentu ma przykładzie komponentu `<Pizza>` przedstawię jak można tego dokonać:

### Interface

```TSX
interface PizzaProps {
    photoPath: string;
    name: string;
    price?: number;
}
// wskazanie w interfejsie jakich elementów wymagamy, nazwy zakończone znakiem zapytania są opcjonalne

function Pizza(props: PizzaProps) {
    return (
        <div>
            <img src={props.photoPath} alt={props.name}>
            <h3>{props.name}</h3>
        </div>
    )
}
```

### Type

```TSX
type PizzaProps {
    photoPath: string;
    name: string;
    price?: number;
}
// wskazanie za pomocą Type jakich elementów wymagamy, nazwy zakończone znakiem zapytania są opcjonalne

function Pizza(props: PizzaProps) {
    return (
        <div>
            <img src={props.photoPath} alt={props.name}>
            <h3>{props.name}</h3>
        </div>
    )
}
```

```TSX
<Pizza name="Carbonara" photoPath="pizzas/carbonara.jpg"/>
// Przekazanie wartości jest bardzo podobne to JSX ale tutaj jeżeli jesteśmy zabezpieczeni mechanizmem interfejsu lub type to jeżeli nie przekażemy wymaganych elementów zostaniemy o tym poinformowani
```
