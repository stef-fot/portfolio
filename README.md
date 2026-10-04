# Stefanos Fotopoulos, portfolio

Προσωπικό portfolio και CV σε μορφή ιστοσελίδας. Η ιδέα: ένα όμορφα τυπωμένο **datasheet** ηλεκτρονικού εξαρτήματος, όπου το εξάρτημα είμαι εγώ.

Στατικό site (HTML, CSS, vanilla JavaScript). Χωρίς build, χωρίς dependencies.

![Hero, light theme](docs/hero-light.png)

## Τι θα βρει κανείς στο site

| Ενότητα | Τι περιέχει | Για ποιον είναι |
|---|---|---|
| **Hero** | Όνομα, μία πρόταση, κινούμενη κυματομορφή ταλαντωσκοπίου, κάρτα στοιχείων (ρόλος, τοποθεσία, χρόνια, διαθεσιμότητα, γλώσσες), κουμπιά email, LinkedIn και CV | HR: όλα τα βασικά σε 10 δευτερόλεπτα |
| **PIN 01 Profile** | Σύντομο προφίλ και 3 μετρήσιμα επιτεύγματα | Και οι δύο |
| **PIN 02 Experience** | Χρονολόγιο θέσεων με συγκεκριμένα αποτελέσματα | Engineering managers |
| **PIN 03 Projects** | Κάρτες έργων (REF 03.x) με MCU, RTOS, πρωτόκολλα, εργαλεία και σύνδεσμο | Τεχνικοί reviewers |
| **PIN 04 Skills** | Πίνακας σαν register map (offset, όνομα, τιμή) | Γρήγορη σάρωση δεξιοτήτων |
| **PIN 05 Education** | Σπουδές και πιστοποιήσεις | HR |
| **PIN 06 Contact** | Email και LinkedIn | Όλοι |

### Λεπτομέρειες που ανταμείβουν το δεύτερο βλέμμα
- Κάθε ενότητα είναι ένα **pin** του datasheet και χωρίζεται από την επόμενη με **PCB trace** (γραμμή με pads).
- Το hero έχει **οθόνη ταλαντωσκοπίου** με labels `CH1 1.00 V/DIV` και `1.00 MS/DIV`. Η κυματομορφή κινείται αργά και σταματά αν ο browser ζητά μειωμένη κίνηση.
- Το `STATUS: AVAILABLE` έχει μικρή ένδειξη τύπου LED.
- Οι δεξιότητες είναι γραμμένες ως καταχωρήσεις registers (`0x00 MCU_FAMILIES`).

## Εμφάνιση

Typography: **Fraunces** (χαρακτηριστικό serif) για τίτλους και κείμενο, **JetBrains Mono** για labels και τεχνικά στοιχεία. Ένα μόνο accent χρώμα, με φειδώ.

| Light (χαρτί και πράσινο solder-mask) | Dark (γραφίτης και κιτρινοπράσινο scope) |
|---|---|
| ![Hero light](docs/hero-light.png) | ![Hero dark](docs/hero-dark.png) |

Το θέμα ακολουθεί τις ρυθμίσεις του συστήματος και αλλάζει με το κουμπί `THEME` πάνω δεξιά.

### Ολόκληρη η σελίδα και mobile

| Desktop | Mobile |
|---|---|
| ![Full page](docs/full-light.png) | ![Mobile](docs/mobile.png) |

> Τα screenshots δείχνουν τα placeholders (πράσινο διακεκομμένο περίγραμμα). Θα αντικατασταθούν με το πραγματικό περιεχόμενο.

## Πώς το τρέχεις τοπικά

Δεν χρειάζεται εγκατάσταση. Δύο τρόποι:

**1. Άνοιγμα αρχείου.** Διπλό κλικ στο `index.html`.

**2. Τοπικός server (προτείνεται).** Από τον φάκελο του project:

```bash
python3 -m http.server 8000
```

και άνοιξε http://localhost:8000. Εναλλακτικά `npx serve`.

Χρειάζεσαι internet μόνο για να φορτώσουν οι γραμματοσειρές από τα Google Fonts.

## Συμπλήρωση περιεχομένου

Κάθε στοιχείο που λείπει είναι τυλιγμένο σε `<span class="todo">[...]</span>` μέσα στο `index.html`. Αντικατέστησε το κείμενο και αφαίρεσε την κλάση `todo`. Βρες τι έμεινε:

```bash
grep -n 'class="todo"' index.html
```

Πρόσθεσε και ένα `cv.pdf` δίπλα στο `index.html` (το κουμπί "Download CV" δείχνει εκεί).

## Δομή

```
index.html   περιεχόμενο
styles.css   θέματα, διάταξη, print
main.js      εναλλαγή θέματος και κυματομορφή
docs/        screenshots για αυτό το README
.nojekyll    απενεργοποιεί το Jekyll στο GitHub Pages
```

## Δημοσίευση (GitHub Pages)

Settings, Pages, Deploy from a branch, `main` και `/ (root)`. Το site βγαίνει στο `https://stef-fot.github.io/portfolio/`.
