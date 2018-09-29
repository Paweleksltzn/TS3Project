let commands = ["1.  Komenda do szybkiego zakładania kanałów dla użytkowników wraz z dodatkowymi sub-kanałami.",
"2. Komenda która natychmiastowo przenosi danego użytkownika do Ciebie bez względu na to gdzie się znajduje.",
"3. Komenda która natychmiastowo przenosi Ciebie do danego użytkownika.",
"4. Komenda która automatycznie wyszukuje wszystkich administratorów i przenosi ich na dany kanał. (przydatna przy zebraniach administracji)",
"5. Komenda wyświetlająca wszystkich administratorów online z podziałem na ich przynależne grupy.",
"6. Komenda która wyświetla informacje na temat dostępnych poleceń bota.",
"7. Komenda informująca o aktualnym użyciu pamięci RAM przez skrypty bota.",
"8. Komenda dzięki której odnajdziesz użytkownika po części jego nicku.",
"9. Komenda która zleca systemowi wysłanie prywatnych wiadomości o ustalonej treści do wszystkich użytkowników na serwerze."];

let mFunctions = ["1. Automatyczne przenoszenie użytkowników z zdefiniowanych kanałów bądź całego serwera na określony kanał AFK. Jeżeli Użytkownik przestanie spełniać warunki nieaktywnego użytkownika aplikacja automatycznie przeniesie go na poprzedni kanał.",
"2. Wyrzucanie użytkowników których nicki nie spełniają warunków które możesz skonfigurować w pliku konfiguracyjnym. Dodatkowo filter nicków wyszukujący obraźliwe słowa.",
"3. Automatyczne wyrzucanie użytkowników z kanału gdzie nie można nagrywać, jeśli ów użytkownik rozpocznie nagrywanie zostanie całkowicie odłączony od serwera.",
"4. Wysyłanie wiadomości do administracji kiedy dany użytkownik oczekuje na kanale pomocy. Poke bądź PW.",
"5. Automatyczne sprawdzanie kanałów w danej strefie: walidacja daty, filter nazwy kanału, filter wulgaryzmów, automatyczne blokowanie/kasowanie kanałów. Występuje w formie sprawdzania daty bądź aktywności.",
"6.  Automatyczne zdejmowanie rang Użytkownikowi, który nie był na Naszym serwerze ustalony czas w konfiguracji.",
"7.  Automatyczne rejestrowanie Użytkowników po spełnieniu określonych warunków ustawionych w konfiguracji.",
"8. Automatyczne generowanie listy administratorów dostępnych na serwerze i wpisywanie ich w kanał.",
"9.  Automatyczne wysyłanie wiadomości na głównym chacie serwerowym.",
"10. Automatyczne nadawanie grup po wejściu na określony kanał w konfiguracji."];

const functionsSwap = document.querySelector(".functionSwap");
const commandsSwap = document.querySelector(".commandSwap");
commandsSwap.addEventListener("click",swapToCommands);
functionsSwap.addEventListener("click",swapTomFunctions);
function swapTomFunctions() {
    let fields = document.querySelectorAll(".mBotFunction--description-single");
    for(let i=0;i<fields.length-1;i++) {
        fields[i].textContent = mFunctions[i];
    }
    fields[9].classList.remove("displayNone");
    fields[8].classList.remove("biggerHeight");
    functionsSwap.classList.add("abtn-visibleSwap--active");
    functionsSwap.classList.remove("btn-visibleSwap--inactive");
    commandsSwap.classList.add("btn-visibleSwap--inactive");
    commandsSwap.classList.remove("btn-visibleSwap--active");
}
function swapToCommands() {
    let fields = document.querySelectorAll(".mBotFunction--description-single");
    for(let i=0;i<fields.length-1;i++) {
        fields[i].textContent = commands[i];
    }
    fields[9].classList.add("displayNone");
    fields[8].classList.add("biggerHeight");
    functionsSwap.classList.add("btn-visibleSwap--inactive");
    functionsSwap.classList.remove("btn-visibleSwap--active");
    commandsSwap.classList.add("btn-visibleSwap--active");
    commandsSwap.classList.remove("btn-visibleSwap--inactive");
}