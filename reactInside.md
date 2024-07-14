# Opis działania Reacta wewnątrz

## Zagadnienia

- Co się dzieje gdy dodajemy komponent do aplikacji
- Jak działa renderowanie faza Render (The Render Phase)
- Jak działa renderowanie faza Commit (The Commit Phase)
- Key Prop
- Diffing
- State Update Bathing
- Event Handler

---

### Co się dzieje gdy dodajemy komponent do drzewa aplikacji

Komponent posiada kilka faz kiedy jest dodawany do drzewa aplikacji o to jakie fazy rozpoznajemy:

1. `Komponent` - faza w której komponent istnieje jako funkcja lub klasa zwracająca React Element jako opis danego UI.
2. `Instancja komponentu` - instancja komponentu to faza w której został użyty w naszej aplikacji, posiada swój własny stan oraz przekazywany do niego obiekt props. W tej fazie komponent jest poddawany cyklowi życia jakim jest utworzenie, funkcjonowanie, usunięcie.
3. `React Element` - faza kiedy funkcja komponentu zostaje przetłumaczona z JSX na React Element. React Element jest opisem UI który zostanie przekazany do kolejnej fazy.
4. `DOM Element (HTML)` - faza DOM Element to faza w której React Element zostaje skonwertowany na HTML i wstawiony do DOM.

![](./docsImage/reactKomponent.png)

---

### Jak działa renderowanie faza Render (The Render Phase)

TODO należy opisać fazę renderowania
TODO należy dodać diagram przedstawiający fazę renderowania

---

### Jak działa renderowanie faza Commit (The Commit Phase)

TODO należy opisać fazę commitowania
TODO należy dodać diagram przedstawiający fazę commitowania

---

### Key Prop

Key prop jest bardzo przydatny do tego aby React mógł zidentyfikować konkretny element w drzewie aplikacji. Dzięki temu jak się przekaże prop key to można odświeżyć drzewo React kiedy komponent jest renderowany w liście, a jego wartości są przekazywane do innego komponentu bez odświeżania.

TODO trzeba przepisać keyProp ponieważ jest do taki sobie teraz
