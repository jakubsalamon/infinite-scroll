# infinite-scroll

Są dwie tabele w apce, w których obsłóżone jest infinite scroll. 

W jednej w oparciu o natywny IntersectionObserver i reactowy useRef, a w drugiej w oparciu o libkę (która pod spodem też korzysta z Intersection)
Libka jest cały czas utzymywana i ma dość sporo pobrań. Większość innych jest starsza, nie wspierana, a działa podobnie, więc to raczej jedyny wybór.

Wspomniana libka:
https://www.npmjs.com/package/react-intersection-observer
