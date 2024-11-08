/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        }
    },

   language: {
    default: 'de',
    translations: {
        de: {
            consentModal: {
                title: 'Wir verwenden Cookies',
                description: 'Beschreibung des Cookie-Modals',
                acceptAllBtn: 'Alle akzeptieren',
                acceptNecessaryBtn: 'Alle ablehnen',
                footer: "<a href=\"" + eWContext.privacyLink + "\">Datenschutz</a>\n<a href=\"" + eWContext.imprintLink + "\">Impressum</a>"
            },
            preferencesModal: {
                title: 'Cookie-Einstellungen verwalten',
                acceptAllBtn: 'Alle akzeptieren',
                acceptNecessaryBtn: 'Nur notwendige Cookies ablehnen',
                savePreferencesBtn: 'Aktuelle Auswahl akzeptieren',
                closeIconLabel: 'Modal schließen',
                sections: [
                    {
                        title: 'Hat jemand ... Cookies gesagt?',
                        description: 'Ich will eins!'
                    },
                    {
                        title: 'Unbedingt notwendige Cookies',
                        description: 'Diese Cookies sind notwendig für das einwandfreie Funktionieren der Website und können nicht deaktiviert werden.',
                        linkedCategory: 'necessary'
                    },
                    {
                        title: 'Performance und Analyse',
                        description: 'Diese Cookies sammeln Informationen darüber, wie Sie unsere Website nutzen. Alle Daten sind anonymisiert und können nicht zur Identifizierung verwendet werden.',
                        linkedCategory: 'analytics'
                    },
                    {
                        title: 'Weitere Informationen',
                        description: 'Bei Fragen zu meiner Cookie-Richtlinie und Ihren Auswahlmöglichkeiten wenden Sie sich bitte <a href="#contact-page">an uns</a>'
                    }
                ]
            }
        }
    }
}

});