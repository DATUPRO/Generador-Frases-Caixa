document.addEventListener('DOMContentLoaded', () => {
    const frases = [
        "Has guanyat el segon premi en un concurs de bellesa. Cobres 10 �.",
        "Vas a la pres�. V�s directament a la pres�, no passis per la casella de sortida, no cobris 200 �.",
        "V�s a la casella de sortida. Cobres 200 �.",
        "V�s al Ferrocarril Reading. Si passes per la casella de sortida, cobres 200 �.",
        "V�s al ferrocarril m�s proper. Si �s propietat d'un altre jugador, paga el doble del lloguer que li deus. Si no �s propietat de ning�, la pots comprar.",
        "Avan�a fins a l'Avinguda Illinois. Si passes per la casella de sortida, cobres 200 �.",
        "Avan�a fins a l'Avinguda St. Charles. Si passes per la casella de sortida, cobres 200 �.",
        "Avan�a fins al Passeig de Tablado (Boardwalk).",
        "V�s al ferrocarril m�s proper. Si �s propietat d'un altre jugador, paga el doble del lloguer que li deus. Si no �s propietat de ning�, la pots comprar.",
        "Avan�a fins a la Companyia de Serveis P�blics m�s propera. Si no �s propietat de ning�, la pots comprar. Si �s propietat d'un altre jugador, llen�a els daus i paga 10 vegades el nombre que surti en els daus.",
        "Retrocedeix 3 caselles.",
        "El banc et paga un dividend de 50 �.",
        "Fas reparacions a totes les teves propietats: paga 25 � per cada casa i 100 � per cada hotel.",
        "Sur de la pres� gratis. Aquesta targeta es pot conservar fins que s'utilitzi o es vengui.",
        "Paga una multa per exc�s de velocitat de 15 �.",
        "Has estat elegit president del consell d'administraci�. Paga 50 � a cada jugador."
    ];

    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('frase').innerText = fraseAleatoria;
});
