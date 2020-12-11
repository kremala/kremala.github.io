var tainies = [
    "ANNA",
    "AΝΘΡΩΠΟΣ ΧΩΡΙΣ ΠΑΡΕΛΘΟΝ",
    "OI ΔΑΙΜΟΝΕΣ ΕΣΤΗΣΑΝ ΧΟΡΟ",
    "ΑΓΓΕΛΟΙ ΤΟΥ ΣΚΟΤΟΥΣ",
    "ΠΡΟΕΤΟΙΜΑΣΙΑ ΓΙΑ ΕΝΑ ΕΓΚΛΗΜΑ",
    "ΠΡΟΣΕΧΕ ΤΙ ΕΥΧΕΣΑΙ",
    "ΠΡΟΣΩΠΙΚΑ ΜΥΣΤΙΚΑ",
    "ΡΙΨΟΚΙΝΔΥΝΟΙ ΔΕΣΜΟΙ ",
    "ΣΑΜΠΟΤΑΖ",
    "ΣΑΝΓΚΑΗ",
    "ΣΑΡΚΑ ΚΑΙ ΑΙΜΑ",
    "ΣΕ ΑΚΟΛΟΥΘΕΙ",
    "ΣΕ ΑΠΟΣΤΑΣΗ ΒΟΛΗΣ",
    "ΣΕ ΒΛΕΠΩ",
    "ΣΕ ΡΗΧΑ ΝΕΡΑ",
    "ΣΕ ΤΕΝΤΩΜΕΝΟ ΣΧΟΙΝΙ",
    "ΣΗΜΑ ΚΙΝΔΥΝΟΥ",
    "ΣΗΜΑ ΚΙΝΔΥΝΟΥ ",
    "ΣΗΜΑΔΙΑ ΤΗΣ ΝΥΧΤΑΣ",
    "ΣΙΑΜΑΙΕΣ",
    "ΣΙΩΠΗΛΟ ΣΠΙΤΙ",
    "ΣΙΩΠΗΛΟΙ ΕΝΟΙΚΟΙ",
    "ΣΙΩΠΗΛΟΣ ΔΟΛΟΦΟΝΟΣ",
    "ΣΙΩΠΗΛΟΣ ΕΦΙΑΛΤΗΣ",
    "ΣΚΛΗΡΟΙ ΑΝΤΡΕΣ",
    "ΣΚΛΗΡΟΙ ΣΑΝ ΜΕΤΑΛΛΟ",
    "ΣΚΟΤΕΙΝΗ ΑΝΑΜΝΗΣΗ",
    "ΣΚΟΤΕΙΝΗ ΔΥΝΑΜΗ",
    "ΣΚΟΤΕΙΝΗ ΚΑΡΔΙΑ",
    "ΑΓΕΝΝΗΤΟΣ",
    "ΑΓΝΩΣΤΗ ΔΥΝΑΜΗ",
    "ΑΓΡΙΑ ΝΥΧΤΑ",
    "ΑΓΡΙΑ ΟΝΕΙΡΑ",
    "ΑΓΡΙΕΣ ΜΕΛΙΣΣΕΣ",
    "ΑΓΡΙΟΣ ΩΚΕΑΝΟΣ",
    "ΑΓΩΝΙΑ",
    "ΑΝΑΜΕΣΑ ΣΤΑ ΠΟΔΙΑ",
    "ΑΝΑΡΧΙΑ",
    "ΑΝΑΤΕΛΛΩΝ ΗΛΙΟΣ",
    "ΑΝΑΤΡΙΧΙΛΑ ΣΤΟΝ ΕΞΩΣΤΗ",
    "ΑΝΑΤΡΙΧΙΛΕΣ",
    "ΑΝΗΣΥΧΑ ΠΝΕΥΜΑΤΑ",
    "ΑΝΘΡΩΠΙΝΟ ΚΤΗΝΟΣ",
    "ΑΝΘΡΩΠΙΝΟΣ ΣΤΟΧΟΣ",
    "ΑΝΘΡΩΠΟΚΥΝΗΓΗΤΟ ΣΤΟ ΑΜΣΤΕΡΝΤΑΜ",
    "ΑΝΟΙΞΕ ΤΑ ΜΑΤΙΑ",
    "ΑΝΤΙΔΟΤΟ ΣΤΗΝ ΕΥΕΞΙΑ",
    "ΑΝΤΙΠΑΛΟΙ ΤΗΣ ΑΣΦΑΛΤΟΥ",
    "ΑΝΤΙΣΤΡΟΦΗ ΜΕΤΡΗΣΗ",
    "ΑΝΤΙΧΡΙΣΤΟΣ Ο ΒΑΣΙΛΙΑΣ ΤΟΥ ΣΚΟΤΟΥΣ",
    "ΑΟΡΑΤΟΣ ΕΠΙΣΚΕΠΤΗΣ",
    "ΑΟΡΑΤΟΣ ΕΧΘΡΟΣ",
    "ΑΟΡΑΤΟΣ ΣΥΓΓΡΑΦΕΑΣ",
    "ΑΠΑΓΟΡΕΥΜΕΝΑ ΜΥΣΤΙΚΑ",
    "ΑΠΑΓΟΡΕΥΜΕΝΗ ΕΛΞΗ",
    "ΑΠΑΓΩΓΗ",
    "ΑΠΑΤΗ ΣΕ ΜΑΥΡΟ ΦΟΝΤΟ",
    "ΑΠΕΙΛΗ ΣΤΟΝ ΑΕΡΑ",
    "ΑΠΛΗΣΤΟΙ ΓΕΙΤΟΝΕΣ",
    "ΑΠΟΔΕΙΞΗ ΕΝΟΧΗΣ",
    "ΑΠΟΔΡΑΣΗ ΑΠΟ ΤΗΝ ΠΥΛΗ ΤΗΣ ΚΟΛΑΣΕΩΣ",
    "ΑΠΟΚΑΛΥΨΕΙΣ",
    "ΑΠΟΚΑΛΥΨΗ",
    "ΑΠΟΛΥΤΗ ΕΥΦΥΙΑ",
    "ΑΠΟΛΥΤΟ ΣΚΟΤΑΔΙ",
    "ΑΠΟΛΥΤΟΣ ΤΡΟΜΟΣ",
    "ΑΠΟΠΛΑΝΗΣΗ",
    "ΑΠΟΡΡΗΤΟΙ ΦΑΚΕΛΟΙ",
    "ΑΠΡΟΣΔΟΚΗΤΕΣ ΙΣΤΟΡΙΕΣ",
    "ΑΠΩΛΕΙΑ ΜΝΗΜΗΣ",
    "ΑΡΑΧΝΕΣ ΔΟΛΟΦΟΝΟΙ",
    "ΑΡΑΧΝΟΦΟΒΙΑ",
    "ΑΡΚΕΤΑ",
    "ΑΣΑΝΣΕΡ ΓΙΑ ΔΟΛΟΦΟΝΟΥΣ",
    "ΑΣΕ ΤΟ ΚΑΚΟ ΝΑ ΜΠΕΙ",
    "ΑΥΤΟΚΡΑΤΟΡΙΑ",
    "ΑΥΤΟΠΤΗΣ ΜΑΡΤΥΣ",
    "ΒΑΘΥ ΚΟΚΚΙΝΟ",
    "ΒΑΣΙΚΟ ΕΝΣΤΙΚΤΟ ",
    "ΒΑΣΙΚΟΣ ΥΠΟΠΤΟΣ",
    "ΒΑΣΙΜΕΣ ΥΠΟΨΙΕΣ",
    "ΒΓΕΣ ΕΞΩ ΚΑΙ ΠΑΙΞΕ",
    "ΒΙΑ ΣΤΗ ΣΤΟΙΧΕΙΩΜΕΝΗ ΒΙΛΑ",
    "ΒΛΕΠΩ ΤΟ ΘΑΝΑΤΟ ΣΟΥ ",
    "ΒΟΥΝΤΟΥ",
    "ΒΡΟΜΙΚΟ ΣΑΒΒΑΤΟΚΥΡΙΑΚΟ",
    "ΓΕΝΕΘΛΙΑ ΘΑΝΑΤΟΥ",
    "ΓΛΥΚΑ ΣΚΟΤΩΣΕ ΜΕ",
    "ΓΡΑΜΜΗ ΑΙΜΑΤΟΣ",
    "Η ΠΟΛΗ ΤΩΝ ΜΥΣΤΙΚΩΝ",
    "Η ΠΟΛΙΟΡΚΙΑ",
    "Η ΠΡΟΦΗΤΕΙΑ",
    "Η ΠΡΩΤΗ ΦΟΡΑ ΠΟΥ ΠΕΘΑΝΑ",
    "Η ΠΥΛΗ ΤΗΣ ΚΟΛΑΣΕΩΣ",
    "Η ΠΥΛΗ ΤΩΝ ΤΕΡΑΤΩΝ",
    "Η ΣΙΩΠΗ ΤΩΝ ΑΜΝΩΝ",
    "Η ΣΚΟΤΕΙΝΗ ΠΛΕΥΡΑ ΤΟΥ ΠΑΘΟΥΣ",
    "Η ΣΠΗΛΙΑ",
    "Η ΣΤΟΡΓΙΚΗ ΜΗΤΕΡΑ",
    "Η ΣΥΓΚΑΤΟΙΚΟΣ",
    "Η ΣΥΜΜΟΡΙΑ ΤΗΣ ΕΝΔΕΚΑΤΗΣ ΛΕΩΦΟΡΟΥ",
    "Η ΣΥΝΕΧΕΙΑ ΤΗΣ ΠΑΡΑΝΟΙΑΣ",
    "Η ΣΥΝΟΜΙΛΙΑ",
    "Η ΣΥΝΩΜΟΣΙΑ ΤΗΣ ΣΚΙΑΣ",
    "Η ΣΧΙΖΟΦΡΕΝΗΣ ΟΙΚΟΓΕΝΕΙΑ ΜΕ ΤΟ ΠΡΙΟΝΙ",
    "Η ΤΕΛΕΤΗ",
    "Η ΤΕΛΕΥΤΑΙΑ ΣΦΑΙΡΑ",
    "Η ΤΕΛΙΚΗ ΑΝΑΜΕΤΡΗΣΗ",
    "Η ΤΡΙΤΗ ΝΥΧΤΑ",
    "ΓΥΡΩ ΓΥΡΩ ΟΛΟΙ",
    "ΔΑΙΜΟΝΑΣ ΤΟΥ ΟΝΕΙΡΟΥ",
    "ΔΕΚΑ ΛΕΠΤΑ ΠΡΙΝ ΤΑ ΜΕΣΑΝΥΧΤΑ",
    "ΔΕΚΑ ΥΠΟΠΤΟΙ ΓΙΑ ΦΟΝΟ",
    "ΔΕΚΑΤΡΕΙΣ ΑΜΑΡΤΙΕΣ",
    "ΔΕΚΑΤΡΕΙΣ ΗΜΕΡΕΣ",
    "ΔΕΚΑΤΡΙΑ",
    "ΔΕΝ ΕΧΩ ΞΕΧΑΣΕΙ ΤΟ ΠΕΡΣΙΝΟ ΚΑΛΟΚΑΙΡΙ",
    "ΔΕΝ ΗΣΟΥΝ ΠΟΤΕ ΕΔΩ",
    "ΔΕΝ ΜΠΟΡΩ ΝΑ ΣΕ ΞΕΧΑΣΩ",
    "ΔΕΣΜΟΙ ΑΙΜΑΤΟΣ",
    "ΔΕΣΜΟΙ ΔΙΑΣΤΡΟΦΗΣ",
    "ΔΕΣΜΩΤΗΣ ΤΟΥ ΙΛΙΓΓΟΥ",
    "ΔΙΑΒΟΛΙΚΗ ΧΗΡΑ",
    "ΔΙΑΒΟΛΙΚΟΣ ΕΠΙΣΚΕΠΤΗΣ",
    "ΔΙΑΖΥΓΙΟ ΘΑΝΑΤΟΥ",
    "ΔΙΑΤΡΙΒΗ ΓΙΑ ΕΝΑ ΦΟΝΟ ",
    "ΔΙΑΦΥΓΗ",
    "ΔΙΚΤΥΟ ΚΑΤΑΣΚΟΠΩΝ ",
    "ΔΙΠΛΗ ΟΡΑΣΗ",
    "ΔΙΠΛΟ ΠΑΙΧΝΙΔΙ",
    "ΔΙΧΑΣΜΕΝΗ",
    "ΔΙΧΑΣΜΕΝΟ ΚΟΡΜΙ",
    "ΔΙΧΑΣΜΕΝΟΣ",
    "ΔΙΧΑΣΜΕΝΟΣ ΔΟΛΟΦΟΝΟΣ",
    "ΔΙΧΩΣ ΙΧΝΗ",
    "ΔΙΨΑ",
    "ΔΟΛΟΦΟΝΟΣ ΜΕ ΠΑΡΑΙΣΘΗΣΕΙΣ",
    "ΔΡΑΚΟΥΛΑΣ",
    "ΔΥΝΑΜΗ ΨΥΧΗΣ",
    "ΔΩΜΑΤΙΟ ΠΑΝΙΚΟΥ",
    "ΕΒΔΟΜΗΝΤΑ ΠΕΝΤΑΚΟΣΑΡΙΚΑ",
    "ΕΓΚΕΦΑΛΙΚΗ ΒΛΑΒΗ",
    "ΕΓΚΛΗΜΑ ΣΤΟ ΟΡΙΑΝ ΕΞΠΡΕΣ",
    "ΕΓΚΛΗΜΑ ΤΗΝ ΠΡΩΤΑΠΡΙΛΙΑ",
    "ΕΓΚΛΗΜΑ ΨΑΧΝΕΙ ΑΛΛΟΘΙ",
    "ΕΓΚΛΗΜΑΤΑ ΣΤΟ ΧΡΟΝΟ",
    "ΕΓΚΛΩΒΙΣΜΕΝΗ",
    "ΕΓΚΛΩΒΙΣΜΕΝΟΙ",
    "ΕΙΚΟΣΙΠΕΝΤΕ ΚΑΡΑΤΙΑ",
    "ΕΙΚΟΣΙΤΕΣΣΕΡΙΣ ΩΡΕΣ ΠΡΟΘΕΣΜΙΑ",
    "ΕΙΣΑΙ ΕΤΟΙΜΟΣ",
    "ΕΙΣΑΙ Ο ΕΠΟΜΕΝΟΣ",
    "ΕΙΣΒΟΛΗ",
    "ΕΚΒΙΑΣΜΟΣ",
    "ΕΚΔΙΚΗΣΗ",
    "ΕΚΔΙΚΗΤΗΣ",
    "ΕΚΔΙΚΗΤΗΣ ΧΩΡΙΣ ΠΡΟΣΩΠΟ",
    "ΕΚΔΟΣΗ ΚΡΑΤΟΥΜΕΝΟΥ",
    "ΕΚΕΙΝΟΙ",
    "ΕΚΛΕΙΨΗ",
    "ΕΚΡΗΞΗ ΑΔΡΕΝΑΛΙΝΗΣ ",
    "ΕΚΤΕΘΕΙΜΕΝΗ",
    "ΕΚΤΟΣ ΕΑΥΤΟΥ",
    "ΕΚΤΟΣ ΕΛΕΓΧΟΥ",
    "ΕΚΤΟΣ ΟΡΙΩΝ",
    "ΕΚΤΟΣ ΤΡΟΧΙΑΣ",
    "ΕΜΕΙΣ",
    "ΕΜΜΟΝΗ",
    "ΕΝΑ ΗΣΥΧΟ ΜΕΡΟΣ ",
    "ΕΝΑ ΦΙΛΙ ΠΡΙΝ ΠΕΘΑΝΕΙΣ",
    "ΕΝΑΣ ΑΓΝΩΣΤΟΣ ΑΝΑΜΕΣΑ ΜΑΣ",
    "ΕΝΑΣ ΑΚΟΜΑ",
    "ΕΝΑΣ ΛΥΚΑΝΘΡΩΠΟΣ ΣΤΟ ΛΟΝΔΙΝΟ",
    "ΕΝΑΣ ΠΡΟΔΟΤΗΣ ΑΝΑΜΕΣΑ ΜΑΣ",
    "ΕΝΑΣ ΤΕΛΕΙΟΣ ΦΟΝΟΣ",
    "ΕΝΗΛΙΚΟΙ ΣΤΗΝ ΑΙΘΟΥΣΑ",
    "ΕΝΟΧΗ ΣΙΩΠΗ",
    "ΕΝΟΧΟ ΜΥΣΤΙΚΟ",
    "ΕΞΑΨΗ",
    "ΕΞΑΨΗ ΒΙΑΣ ",
    "ΕΞΟΜΟΛΟΓΗΣΗ ΦΟΝΟΥ",
    "ΕΞΟΡΚΙΣΤΗΣ",
    "ΕΠΑΦΗ ΜΕ ΤΟΥΣ ΝΕΚΡΟΥΣ ",
    "ΕΠΑΦΗ ΤΕΤΑΡΤΟΥ ΤΥΠΟΥ",
    "ΕΠΙΖΩΝΤΑΣ ΑΠΟ ΤΟΥΣ ΑΠΕΘΑΝΤΟΥΣ",
    "ΕΠΙΘΕΣΗ ΣΤΗ ΒΟΜΒΑΗ",
    "ΕΠΙΚΙΝΔΥΝΕΣ ΓΝΩΡΙΜΙΕΣ",
    "ΕΠΙΚΙΝΔΥΝΕΣ ΥΠΟΣΧΕΣΕΙΣ",
    "ΕΠΙΚΙΝΔΥΝΗ ΣΙΩΠΗ",
    "ΕΠΙΚΙΝΔΥΝΟ ΚΥΚΛΩΜΑ",
    "ΕΠΙΛΟΓΗ ΘΑΝΑΤΟΥ",
    "ΕΠΙΣΚΕΠΤΗΣ ΑΠΟ ΤΗΝ ΚΟΛΑΣΗ",
    "ΕΠΤΑ",
    "ΕΡΧΕΤΑΙ ΤΗ ΝΥΧΤΑ",
    "ΕΡΩΤΑΣ ΣΤΗ ΣΙΒΗΡΙΑ",
    "ΕΡΩΤΕΥΤΗΚΑ ΕΝΑ ΔΟΛΟΦΟΝΟ",
    "ΕΡΩΤΙΚΑ ΓΡΑΜΜΑΤΑ ΑΠΟ ΤΟ ΔΟΛΟΦΟΝΟ",
    "ΕΡΩΤΙΚΑ ΕΓΚΛΗΜΑΤΑ",
    "ΕΡΩΤΙΚΑ ΠΑΙΧΝΙΔΙΑ ",
    "ΕΡΩΤΙΚΗ ΔΙΑΣΤΡΟΦΗ",
    "ΕΡΩΤΙΚΗ ΚΑΤΑΙΓΙΔΑ",
    "ΕΡΩΤΙΚΗ ΠΛΕΚΤΑΝΗ",
    "ΕΡΩΤΙΚΗ ΨΥΧΩΣΗ",
    "ΕΤΕΡΟΣ ΕΓΩ",
    "ΕΤΟΣ ΕΚΛΟΓΩΝ",
    "ΕΦΙΑΛΤΕΣ ΑΠΟ ΤΟ ΠΑΡΕΛΘΟΝ",
    "ΕΦΙΑΛΤΗΣ ΣΤΟ ΔΡΟΜΟ ΜΕ ΤΙΣ ΛΕΥΚΕΣ",
    "ΕΦΙΑΛΤΗΣ ΣΤΟ ΤΡΕΝΟ",
    "ΕΦΙΑΛΤΙΚΕΣ ΩΡΕΣ",
    "ΕΦΙΑΛΤΙΚΟΣ ΕΡΩΤΑΣ",
    "ΖΩΝΤΑΝΗ ΚΟΛΑΣΗ",
    "Η ΑΓΑΠΗ ΔΑΓΚΩΝΕΙ",
    "Η ΑΓΡΙΟΓΑΤΑ",
    "Η ΑΔΕΛΦΟΤΗΤΑ ΤΟΥ ΣΚΟΤΟΥΣ",
    "Η ΑΙΣΘΗΣΗ ΤΟΥ ΦΟΒΟΥ",
    "Η ΑΙΧΜΑΛΩΤΗ",
    "Η ΑΚΡΗ ΤΟΥ ΝΗΜΑΤΟΣ",
    "Η ΑΝΑΖΗΤΗΣΗ",
    "Η ΑΝΤΑΝΑΚΛΑΣΗ ΤΟΥ ΕΦΙΑΛΤΗ",
    "Η ΑΝΤΙΖΗΛΟΣ",
    "Η ΑΠΑΓΩΓΗ",
    "Η ΑΠΕΙΛΗ",
    "Η ΑΠΟΠΛΑΝΗΣΗ",
    "Η ΑΠΟΠΛΑΝΗΣΗ ΕΝΟΣ ΞΕΝΟΥ",
    "Η ΑΠΡΟΣΚΛΗΤΗ",
    "Η ΑΡΧΗ",
    "Η ΑΥΤΟΚΡΑΤΟΡΙΑ ΤΩΝ ΛΥΚΩΝ",
    "Η ΒΑΣΙΛΙΣΣΑ ΤΩΝ ΚΑΤΑΡΑΜΕΝΩΝ",
    "Η ΒΕΛΟΥΔΙΝΗ ΠΛΕΥΡΑ ΤΗΣ ΚΟΛΑΣΗΣ",
    "ΑΔΕΛΦΟΤΗΤΑ",
    "ΑΔΕΡΦΕΣ",
    "ΑΔΕΣΠΟΤΑ ΣΚΥΛΙΑ",
    "ΑΔΙΑΝΟΗΤΕΣ ΠΡΑΞΕΙΣ",
    "ΑΔΙΕΞΟΔΟ",
    "ΑΔΙΣΤΑΚΤΗ ΜΗΤΕΡΑ",
    "ΑΘΩΟΣ ΜΕΧΡΙ ΑΠΟΔΕΙΞΕΩΣ ΤΟΥ ΕΝΑΝΤΙΟΥ",
    "ΑΙΜΑ ΚΑΙ ΣΟΚΟΛΑΤΑ",
    "ΑΙΜΑ ΣΤΗ ΜΑΥΡΗ ΔΑΝΤΕΛΑ",
    "ΑΙΜΑ ΣΤΟΥΣ ΛΟΦΟΥΣ",
    "ΑΙΜΑΤΗΡΗ ΑΔΕΛΦΟΤΗΤΑ",
    "ΑΙΜΑΤΗΡΗ ΕΚΔΙΚΗΣΗ",
    "ΑΙΜΟΡΡΑΓΙΑ",
    "ΑΙΩΝΙΟΤΗΤΑ",
    "ΑΚΕΦΑΛΟΣ ΚΑΒΑΛΑΡΗΣ",
    "ΑΚΡΑΙΕΣ ΚΑΤΑΣΤΑΣΕΙΣ",
    "ΑΛΛΟΘΙ",
    "ΑΜΕΙΛΙΚΤΗ ΚΑΤΑΔΙΩΞΗ",
    "ΑΜΝΗΣΙΑ",
    "ΑΝΑΖΗΤΩΝΤΑΣ ΤΗ ΔΙΚΑΙΟΣΥΝΗ",
    "Η ΒΙΛΑ ΤΩΝ ΚΑΤΑΡΑΜΕΝΩΝ",
    "Η ΓΑΤΑ ΚΑΙ ΤΟ ΚΑΝΑΡΙΝΙ",
    "Η ΓΕΥΣΗ ΤΗΣ ΕΚΔΙΚΗΣΗΣ",
    "Η ΓΕΦΥΡΑ ΤΩΝ ΚΑΤΑΣΚΟΠΩΝ",
    "Η ΓΗ ΤΩΝ ΖΩΝΤΑΝΩΝ ΝΕΚΡΩΝ",
    "Η ΓΚΟΥΒΕΡΝΑΝΤΑ",
    "Η ΓΥΝΑΙΚΑ ΛΥΚΑΝΘΡΩΠΟΣ",
    "Η ΓΥΝΑΙΚΑ ΜΕ ΤΑ ΜΑΥΡΑ",
    "Η ΓΥΝΑΙΚΑ ΤΟΥ ΠΕΜΠΤΟΥ",
    "Η ΔΑΙΜΟΝΙΣΜΕΝΗ",
    "Η ΔΑΙΜΟΝΙΣΜΕΝΗ ΜΕ ΤΑ ΠΡΑΣΙΝΑ ΜΑΤΙΑ",
    "Η ΔΕΥΤΕΡΗ ΕΥΚΑΙΡΙΑ",
    "Η ΔΙΑΔΟΧΗ",
    "Η ΔΙΕΡΜΗΝΕΑΣ",
    "Η ΔΙΠΛΑΝΗ ΠΟΡΤΑ",
    "Η ΔΟΛΟΦΟΝΙΑ ΕΝΟΣ ΠΡΟΕΔΡΟΥ",
    "Η ΕΒΔΟΜΗ ΠΥΛΗ ΤΗΣ ΚΟΛΑΣΕΩΣ",
    "Η ΕΙΣΒΟΛΗ",
    "Η ΕΚΔΙΚΗΣΗ ΤΩΝ ΔΑΙΜΟΝΩΝ",
    "Η ΕΚΤΗ ΑΙΣΘΗΣΗ",
    "Η ΕΜΜΟΝΗ",
    "Η ΕΝΑΤΗ ΠΥΛΗ",
    "Η ΕΝΔΕΚΑΤΗ ΕΝΤΟΛΗ",
    "Η ΕΝΟΡΚΟΣ",
    "Η ΕΝΟΧΗ ΤΟΥ ΚΕΝΕΝΤΙ",
    "Η ΕΠΙΣΤΡΟΦΗ ΤΟΥ ΤΖΑΚ",
    "Η ΕΠΙΣΤΡΟΦΗ ΤΩΝ ΝΕΚΡΩΝ",
    "Η ΘΗΛΙΑ",
    "Η ΚΑΘΟΔΟΣ",
    "Η ΚΑΛΟΓΡΙΑ",
    "Η ΚΑΡΔΙΑ ΤΟΥ ΚΕΡΑΥΝΟΥ",
    "Η ΚΑΤΑΡΑ",
    "Η ΚΑΤΑΡΑ ΤΗΣ ΜΟΥΜΙΑΣ",
    "Η ΚΑΤΑΡΑ ΤΗΣ ΣΦΙΓΓΑΣ",
    "Η ΚΑΤΑΡΑ ΤΩΝ ΖΩΝΤΑΝΩΝ ΝΕΚΡΩΝ",
    "Η ΚΑΤΑΣΤΑΣΗ ΤΩΝ ΠΡΑΓΜΑΤΩΝ",
    "Η ΚΑΤΗΓΟΡΟΥΜΕΝΗ",
    "Η ΚΙΝΗΣΗ ΤΟΥ ΙΠΠΟΤΗ",
    "Η ΚΟΙΛΑΔΑ ΤΩΝ ΣΚΙΩΝ",
    "Η ΚΟΡΗ ΤΟΥ ΣΤΡΑΤΗΓΟΥ",
    "Η ΚΟΥΚΛΑ ΤΟΥ ΣΑΤΑΝΑ",
    "Η ΚΟΥΚΛΑ ΤΟΥ ΣΑΤΑΝΑ ",
    "Η ΚΡΑΥΓΗ ΤΩΝ ΖΟΜΠΙ",
    "Η ΚΥΡΙΑ ΕΞΑΦΑΝΙΖΕΤΑΙ",
    "Η ΛΑΜΨΗ",
    "Η ΛΗΣΤΕΙΑ",
    "Η ΜΕΡΑ ΤΩΝ ΖΩΝΤΑΝΩΝ ΝΕΚΡΩΝ",
    "Η ΜΕΤΑΜΟΡΦΩΣΗ",
    "Η ΜΟΥΜΙΑ ΒΓΗΚΕ ΑΠΟ ΤΟΝ ΤΑΦΟ ΤΗΣ",
    "Η ΜΥΓΑ",
    "Η ΜΥΣΤΙΚΗ ΦΟΡΜΟΥΛΑ",
    "Η ΝΥΦΗ ΦΟΡΟΥΣΕ ΜΑΥΡΑ ",
    "Η ΝΥΧΤΑ ΜΕ ΤΙΣ ΜΑΣΚΕΣ ",
    "Η ΝΥΧΤΑ ΤΩΝ ΑΠΟΦΟΙΤΩΝ ",
    "Η ΝΥΧΤΑ ΤΩΝ ΔΙΚΑΣΤΩΝ",
    "Η ΝΥΧΤΑ ΤΩΝ ΖΩΝΤΑΝΩΝ ΝΕΚΡΩΝ",
    "Η ΝΥΧΤΑ ΤΩΝ ΗΛΙΟΤΡΟΠΙΩΝ",
    "Η ΟΜΙΧΛΗ",
    "Η ΟΡΓΗ ΕΝΟΣ ΥΠΟΜΟΝΕΤΙΚΟΥ ΑΝΘΡΩΠΟΥ",
    "Η ΠΑΓΙΔΑ",
    "Η ΠΗΓΗ ΤΟΥ ΚΑΚΟΥ",
    "Η ΠΙΣΙΝΑ",
    "Η ΠΟΛΗ ΤΟΥ ΦΟΒΟΥ",
    "Η ΤΡΥΠΑ",
    "Η ΥΠΗΡΕΤΡΙΑ",
    "Η ΥΠΟΠΤΗ",
    "Η ΦΙΡΜΑ",
    "Η ΧΗΡΑ",
    "Η ΨΥΧΗ ΤΟΥ ΠΑΡΤΥ ΜΟΛΙΣ ΠΕΘΑΝΕ",
    "ΗΜΕΡΟΛΟΓΙΑ ΤΟΥ ΤΣΕΡΝΟΜΠΙΛ",
    "ΗΜΕΡΟΛΟΓΙΟ ΦΟΝΩΝ",
    "ΗΤΑΝ ΔΥΟ ΦΥΓΑΔΕΣ",
    "ΘΑ ΣΟΥ ΚΟΨΩ ΤΟ ΚΕΦΑΛΙ",
    "ΘΑΝΑΣΙΜΗ ΕΚΔΙΚΗΣΗ",
    "ΘΑΝΑΣΙΜΗ ΕΛΞΗ",
    "ΘΑΝΑΣΙΜΗ ΜΗΤΕΡΑ",
    "ΘΑΝΑΣΙΜΗ ΣΚΕΥΩΡΙΑ",
    "ΘΑΝΑΣΙΜΟ ΕΙΔΟΣ",
    "ΘΑΝΑΣΙΜΟΣ ΕΠΙΣΚΕΠΤΗΣ",
    "ΘΑΡΡΟΣ Η ΑΛΗΘΕΙΑ",
    "ΘΕΛΩ ΝΑ ΠΙΣΤΕΨΩ",
    "ΘΕΟΣΤΑΛΤΟΣ",
    "ΘΕΩΡΙΕΣ ΣΥΝΩΜΟΣΙΑΣ",
    "ΙΣΤΟΡΙΕΣ ΤΡΟΜΟΥ",
    "ΙΣΤΟΡΙΕΣ ΦΑΝΤΑΣΜΑΤΩΝ",
    "ΚΑΘΑΡΣΗ",
    "ΚΑΙ ΜΟΝΟ ΤΗΝ ΑΛΗΘΕΙΑ",
    "ΚΑΙ ΞΑΦΝΙΚΑ ΣΚΟΤΑΔΙ",
    "ΚΑΙΡΟ ΕΜΠΙΣΤΕΥΤΙΚΟ",
    "ΚΑΛΙΦΟΡΝΙΑ",
    "ΚΑΜΙΑ ΕΞΟΔΟΣ",
    "ΚΑΝΕΙΣ ΔΕΝ ΜΠΟΡΕΙ ΝΑ ΜΑΣ ΣΩΣΕΙ",
    "ΚΑΝΙΒΑΛΟΙ",
    "ΚΑΠΟΙΟΣ ΝΑ ΜΕ ΠΡΟΣΕΧΕΙ",
    "ΚΑΡΔΙΕΣ ΤΗΣ ΝΥΧΤΑΣ",
    "ΚΑΤΑ ΣΥΡΡΟΗ ΔΟΛΟΦΟΝΟΣ",
    "ΚΑΤΑΣΤΑΣΗ ΤΡΟΜΟΥ",
    "ΚΑΤΩ ΑΠΟ ΤΟΝ ΗΛΙΟ",
    "ΚΑΥΤΕΣ ΜΑΡΤΥΡΙΕΣ",
    "ΚΑΥΤΗ ΒΡΟΧΗ",
    "ΚΑΥΤΟΙ ΨΙΘΥΡΟΙ",
    "ΚΙΝΔΥΝΟΣ ΥΨΗΛΗΣ ΤΑΣΗΣ",
    "ΚΛΕΙΔΩΣΕΣ",
    "ΚΛΕΜΜΕΝΕΣ ΖΩΕΣ",
    "ΚΛΕΦΤΕΣ ΣΑΝ ΚΙ ΕΜΑΣ",
    "ΚΛΕΦΤΗΣ ΨΥΧΩΝ",
    "ΚΟΚΚΙΝΗ ΕΚΛΕΙΨΗ",
    "ΚΟΚΚΙΝΟΣ ΔΡΑΚΟΣ",
    "ΚΟΝΤΡΑ ΜΕ ΤΟ ΘΑΝΑΤΟ",
    "ΚΟΝΤΡΑ ΞΥΡΙΣΜΑ",
    "ΚΟΦΤΕΡΟ ΛΕΠΙΔΙ",
    "ΚΡΑΥΓΕΣ ΑΓΩΝΙΑΣ",
    "ΚΡΑΥΓΕΣ ΤΡΟΜΟΥ",
    "ΚΡΑΥΓΗ ΑΓΩΝΙΑΣ",
    "ΚΡΟΥΑΖΙΕΡΑ ΣΤΗΝ ΑΚΡΗ ΤΟΥ ΤΡΟΜΟΥ",
    "ΚΤΗΝΑΝΘΡΩΠΟΙ",
    "ΚΥΝΗΓΗΤΟ ΜΕΣΑ ΣΤΗ ΝΥΧΤΑ",
    "ΚΥΝΗΓΟΙ ΚΕΦΑΛΩΝ",
    "ΚΥΝΗΓΩΝΤΑΣ ΤΟ ΔΟΛΟΦΟΝΟ ΜΟΥ",
    "ΚΩΔΙΚΟΣ ΑΣΦΑΛΕΙΑΣ",
    "ΚΩΔΙΚΟΣ ΚΟΛΙΜΠΡΙ",
    "ΛΑΘΟΣ ΣΤΡΟΦΗ",
    "ΛΕΥΚΟΣ ΘΟΡΥΒΟΣ",
    "ΛΟΥΤΡΟ ΑΙΜΑΤΟΣ",
    "ΛΥΚΟΦΩΣ",
    "ΛΥΣΣΑΣΜΕΝΕΣ ΣΤΑ ΝΥΧΙΑ ΤΟΥ ΤΡΟΜΟΥ",
    "ΜΑΘΗΜΑΤΑ ΦΟΒΟΥ",
    "ΜΑΜΑ",
    "ΜΑΝΙΑ",
    "ΜΑΝΙΑΚΟΣ ΔΟΛΟΦΟΝΟΣ",
    "ΜΑΝΙΑΚΟΣ ΜΠΑΤΣΟΣ ",
    "ΜΑΡΙΟΝΕΤΕΣ",
    "ΜΑΡΤΥΡΑΣ ΕΓΚΛΗΜΑΤΟΣ",
    "ΜΑΡΤΥΡΑΣ ΚΑΤΗΓΟΡΙΑΣ",
    "ΜΑΡΤΥΡΙΑΡΑ ΚΑΡΔΙΑ",
    "ΜΑΤΙΑ ΜΕΣΑ ΣΤΗ ΝΥΧΤΑ",
    "ΜΑΤΙΑ ΤΡΟΜΟΥ",
    "ΜΑΤΩΜΕΝΗ ΝΥΧΤΑ",
    "ΜΑΤΩΜΕΝΟ ΣΠΙΤΙ",
    "ΜΑΥΡΑ ΧΡΙΣΤΟΥΓΕΝΝΑ",
    "ΜΑΥΡΗ ΜΑΓΕΙΑ",
    "ΜΑΥΡΟ ΠΡΟΒΑΤΟ",
    "ΜΑΥΡΟΣ ΚΥΚΝΟΣ",
    "ΜΑΥΣΩΛΕΙΟ",
    "ΜΕ ΑΠΟΚΡΥΨΗ",
    "ΜΕ ΔΙΠΛΗ ΤΑΥΤΟΤΗΤΑ",
    "ΜΕ ΣΕΙΡΑ ΕΞΑΦΑΝΙΣΗΣ",
    "ΜΕΔΟΥΣΑ",
    "ΜΕΣΑ ΑΠΟ ΤΑ ΜΑΤΙΑ ΤΟΥΣ",
    "ΜΕΣΑ ΑΠΟ ΤΟΝ ΚΑΘΡΕΦΤΗ",
    "ΜΕΣΑ ΜΟΥ",
    "ΜΕΣΑΝΥΧΤΑ ΣΤΗ ΝΕΑ ΥΟΡΚΗ",
    "ΜΕΣΟΚΑΛΟΚΑΙΡΟ",
    "ΜΕΤΑ ΤΑ ΜΕΣΑΝΥΧΤΑ",
    "ΜΕΤΑΜΟΡΦΩΣΗ",
    "ΜΕΤΑΦΥΣΙΚΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑ ",
    "ΜΕΧΡΙ ΤΗΝ ΚΟΛΑΣΗ",
    "ΜΗ ΠΕΙΣ ΛΕΞΗ",
    "ΜΗ ΣΒΗΣΕΙΣ ΤΟ ΦΩΣ",
    "ΜΗ ΦΟΒΑΣΑΙ ΤΟ ΣΚΟΤΑΔΙ",
    "ΜΗΝ ΑΝΑΣΑΙΝΕΙΣ",
    "ΜΗΝ ΑΝΟΙΞΕΙΣ",
    "ΜΗΝ ΚΟΙΤΑΞΕΙΣ ΠΙΣΩ",
    "ΜΗΝ ΠΕΙΣ ΛΕΞΗ",
    "ΜΗΝ ΤΟ ΠΕΙΣ ΣΕ ΚΑΝΕΝΑΝ",
    "ΜΗΝΥΜΑ ΑΠΟ ΤΗΝ ΚΟΛΑΣΗ",
    "ΜΗΤΕΡΑ",
    "ΜΗΤΡΙΚΟ ΕΝΣΤΙΚΤΟ",
    "ΜΙΑ ΑΛΗΘΙΝΗ ΙΣΤΟΡΙΑ",
    "ΜΙΑ ΑΜΕΡΙΚΑΝΙΚΗ ΙΣΤΟΡΙΑ",
    "ΜΙΑ ΑΤΕΛΕΙΩΤΗ ΝΥΧΤΑ ΤΡΟΜΟΥ",
    "ΜΙΑ ΓΕΝΝΑΙΑ ΚΑΡΔΙΑ",
    "ΜΙΑ ΙΣΤΟΡΙΑ ΕΚΔΙΚΗΣΗΣ",
    "ΜΙΑ ΚΡΑΥΓΗ ΣΤΗΝ ΟΜΙΧΛΗ",
    "ΜΙΑ ΜΙΚΡΗ ΧΑΡΗ",
    "ΜΙΑ ΠΑΡΘΕΝΑ ΓΙΑ ΤΟ ΔΙΑΒΟΛΟ",
    "ΜΙΚΡΑ ΕΓΚΛΗΜΑΤΑ ΜΕΤΑΞΥ ΦΙΛΩΝ",
    "ΜΟΙΡΑΙΑ ΣΧΕΣΗ",
    "ΜΟΙΡΑΙΟ ΛΑΘΟΣ",
    "ΜΟΝΑΔΙΚΟΣ ΕΠΙΖΩΝ",
    "ΜΟΝΑΧΟ",
    "ΜΟΝΟ ΑΙΜΑ",
    "ΜΟΝΟ ΕΣΕΝΑ ΒΛΕΠΩ",
    "ΜΟΝΟ Ο ΘΕΟΣ ΣΥΓΧΩΡΕΙ",
    "ΜΟΝΟΣ ΑΠΕΝΑΝΤΙ ΣΤΟ ΝΟΜΟ",
    "ΜΟΝΟΣ ΜΑΖΙ ΤΗΣ",
    "ΜΟΥΣΑ",
    "ΜΠΡΟΣΤΑ ΣΤΑ ΜΑΤΙΑ ΤΗΣ",
    "ΜΥΣΤΗΡΙΩΔΗΣ ΕΞΑΦΑΝΙΣΗ",
    "ΜΥΣΤΙΚΟ ΠΑΡΑΘΥΡΟ",
    "ΜΥΣΤΙΚΟΣ ΠΡΑΚΤΟΡΑΣ",
    "ΜΥΣΤΙΚΟΣ ΠΡΑΚΤΟΡΑΣ ΣΕ ΠΑΓΙΔΑ",
    "ΝΑΥΑΓΙΟ ΣΤΗΝ ΠΑΡΑΝΟΙΑ",
    "ΝΕΑ ΓΥΝΑΙΚΑ ΜΟΝΗ ΨΑΧΝΕΙ ",
    "ΝΕΑ ΚΑΙ ΑΘΩΑ",
    "ΝΕΑ ΣΕΛΗΝΗ",
    "ΝΕΚΡΑ ΠΟΥΛΙΑ",
    "ΝΕΚΡΙΚΗ ΣΙΓΗ",
    "ΝΕΚΡΟΙ ΞΑΝΑ",
    "ΝΕΚΡΟΜΑΝΤΕΙΑ",
    "ΝΕΚΡΟΤΑΦΕΙΟ ΖΩΝΤΑΝΩΝ",
    "ΝΕΚΡΟΤΑΦΕΙΟ ΖΩΝΤΑΝΩΝ ΝΕΚΡΩΝ",
    "ΝΕΚΡΩΤΑΦΙΟ ΖΩΩΝ",
    "ΝΕΟΣ ΚΑΙ ΑΘΩΟΣ",
    "ΝΟΜΟΤΑΓΗΣ ΠΟΛΙΤΗΣ",
    "ΝΟΣΦΕΡΑΤΟΥ Ο ΔΡΑΚΟΥΛΑΣ ΤΗΣ ΝΥΧΤΑΣ",
    "ΝΤΙΒΑ",
    "ΝΥΚΤΟΒΑΤΕΣ",
    "ΝΥΧΤΑ ΑΓΩΝΙΑΣ",
    "ΝΥΧΤΑ ΘΑΝΑΤΟΥ",
    "ΝΥΧΤΑ ΤΡΟΜΟΥ ",
    "ΝΥΧΤΕΡΙΔΕΣ ΒΑΜΠΙΡ",
    "ΝΥΧΤΕΡΙΝΗ ΠΤΗΣΗ",
    "ΝΥΧΤΕΡΙΝΟΣ ΑΝΤΑΠΟΚΡΙΤΗΣ",
    "ΝΥΧΤΕΣ ΜΕ ΤΟΝ ΕΧΘΡΟ ΜΟΥ",
    "ΝΥΧΤΕΣ ΣΤΟ ΜΑΝΧΑΤΑΝ",
    "ΞΕΝΟΣ ΑΝΤΑΠΟΚΡΙΤΗΣ",
    "ΞΕΡΩ ΤΙ ΚΑΝΑΤΕ ΠΕΡΣΙ ΤΟ ΚΑΛΟΚΑΙΡΙ",
    "ΞΟΡΚΙΣΕ ΤΟ ΚΑΚΟ",
    "ΞΥΠΝΗΜΑ ΣΤΟΝ ΕΦΙΑΛΤΗ",
    "Ο ΑΓΓΕΛΙΟΦΟΡΟΣ ΠΡΕΠΕΙ ΝΑ ΠΕΘΑΝΕΙ",
    "Ο ΑΓΓΕΛΟΣ ΤΗΣ ΒΙΑΣ",
    "Ο ΑΓΝΩΣΤΟΣ ΤΟΥ ΕΞΠΡΕΣ",
    "Ο ΑΔΙΣΤΑΚΤΟΣ",
    "Ο ΑΔΥΝΑΤΟΣ",
    "Ο ΑΚΑΤΑΜΑΧΗΤΟΣ",
    "Ο ΑΜΕΡΙΚΑΝΟΣ",
    "Ο ΑΝΘΡΩΠΟΚΥΝΗΓΟΣ",
    "Ο ΑΝΘΡΩΠΟΣ ΑΝΤΙΓΡΑΦΟ",
    "Ο ΑΝΘΡΩΠΟΣ ΑΠΟ ΤΗ ΣΙΓΚΑΠΟΥΡΗ",
    "Ο ΑΝΘΡΩΠΟΣ ΠΟΥ ΓΝΩΡΙΖΕ ΠΟΛΛΑ",
    "Ο ΑΝΘΡΩΠΟΣ ΠΟΥ ΔΕΝ ΥΠΕΚΥΨΕ ΠΟΤΕ",
    "Ο ΑΝΘΡΩΠΟΣ ΤΗΣ ΜΑΝΤΖΟΥΡΙΑΣ",
    "Ο ΑΝΘΡΩΠΟΣ ΤΗΣ ΝΥΧΤΑΣ",
    "Ο ΑΝΤΕΡΟΒΓΑΛΤΗΣ ΤΗΣ ΝΕΑΣ ΥΟΡΚΗΣ",
    "Ο ΑΝΤΙΧΡΙΣΤΟΣ ",
    "Ο ΑΝΤΙΧΡΙΣΤΟΣ ΜΕΣΑ ΤΗΣ",
    "Ο ΑΟΡΑΤΟΣ",
    "Ο ΑΟΡΑΤΟΣ ΑΝΘΡΩΠΟΣ",
    "Ο ΑΟΡΑΤΟΣ ΒΙΑΣΤΗΣ",
    "Ο ΑΡΙΘΜΟΣ ΕΙΚΟΣΙΤΡΙΑ",
    "Ο ΒΑΛΤΟΣ ΤΟΥ ΤΡΟΜΟΥ",
    "Ο ΒΡΥΚΟΛΑΚΑΣ ΤΟΥ ΜΕΣΟΝΥΚΤΙΟΥ",
    "Ο ΒΡΥΚΟΛΑΚΑΣ ΤΩΝ ΚΑΡΠΑΘΙΩΝ",
    "Ο ΒΥΘΟΣ",
    "Ο ΓΙΟΣ ΜΟΥ",
    "Ο ΔΑΙΜΟΝΙΣΜΕΝΟΣ ΑΓΓΕΛΟΣ",
    "Ο ΔΙΑΒΟΛΟΣ ΔΕΝ ΚΑΝΕΙ ΠΙΣΤΩΣΗ",
    "Ο ΔΙΑΒΟΛΟΣ ΜΕΣΑ ΤΗΣ",
    "Ο ΔΙΚΗΓΟΡΟΣ ΤΟΥ ΔΙΑΒΟΛΟΥ",
    "Ο ΔΙΠΛΟΣ ΕΡΑΣΤΗΣ",
    "Ο ΔΟΚΤΩΡ ΤΖΕΚΙΛ ΚΑΙ ΟΙ ΓΥΝΑΙΚΕΣ",
    "Ο ΔΟΛΟΦΟΝΟΣ ΕΡΧΕΤΑΙ ΚΑΘΕ ΒΡΑΔΥ",
    "Ο ΔΟΛΟΦΟΝΟΣ ΜΕ ΤΟ ΔΡΕΠΑΝΙ",
    "Ο ΔΟΛΟΦΟΝΟΣ ΜΕ ΤΟ ΠΡΙΟΝΙ",
    "Ο ΔΟΛΟΦΟΝΟΣ ΜΕ ΤΟ ΣΤΙΛΕΤΟ",
    "Ο ΔΟΛΟΦΟΝΟΣ ΜΕΣΑ ΜΟΥ",
    "Ο ΔΟΛΟΦΟΝΟΣ ΞΕΡΕΙ ΟΤΙ ΕΙΣΑΙ ΜΟΝΗ",
    "Ο ΔΟΛΟΦΟΝΟΣ ΤΗΣ ΚΥΡΙΑΚΗΣ",
    "Ο ΔΟΛΟΦΟΝΟΣ ΤΟΥ ΜΑΝΧΑΤΑΝ",
    "Ο ΔΟΛΟΦΟΝΟΣ ΤΟΥ ΜΕΣΟΝΥΧΤΙΟΥ",
    "Ο ΔΡΑΚΟΥΛΑΣ ΔΙΨΑΕΙ ΓΙΑ ΦΡΕΣΚΟ ΑΙΜΑ",
    "Ο ΔΡΟΜΟΣ ΓΙΑ ΤΗΝ ΚΟΛΑΣΗ",
    "Ο ΕΚΔΙΚΗΤΗΣ",
    "Ο ΕΚΠΤΩΤΟΣ",
    "Ο ΕΚΤΕΛΕΣΤΗΣ",
    "Ο ΕΚΤΕΛΕΣΤΗΣ ΤΟΥ ΜΕΣΟΝΥΚΤΙΟΥ",
    "Ο ΕΝΟΙΚΟΣ",
    "Ο ΕΝΟΙΚΟΣ ΤΟΥ ΠΕΜΠΤΟΥ ΟΡΟΦΟΥ",
    "Ο ΕΝΟΧΟΣ",
    "Ο ΕΞΟΡΚΙΣΜΟΣ",
    "Ο ΕΞΟΡΚΙΣΜΟΣ ΤΗΣ ΕΜΙΛΙ ΡΟΟΥΖ",
    "Ο ΕΞΟΥΣΙΑΣΤΗΣ",
    "Ο ΕΠΑΝΑΣΤΑΤΗΣ ΤΟΥ ΑΛΚΑΤΡΑΖ",
    "Ο ΕΠΙΒΑΤΗΣ",
    "Ο ΕΠΙΣΚΕΠΤΗΣ",
    "Ο ΕΠΙΦΑΝΗΣ ΑΓΝΩΣΤΟΣ",
    "Ο ΕΡΩΤΑΣ ΕΙΝΑΙ ΤΟ ΤΕΛΕΙΟ ΕΓΚΛΗΜΑ",
    "Ο ΗΧΟΣ ΤΟΥ ΘΑΝΑΤΟΥ",
    "Ο ΘΑΛΑΜΟΣ ΤΟΥ ΤΡΟΜΟΥ",
    "Ο ΘΑΝΑΤΟΣ ΠΟΥ ΟΝΕΙΡΕΥΤΗΚΑ",
    "Ο ΘΑΝΑΤΟΣ ΣΟΥ Η ΖΩΗ ΜΟΥ",
    "Ο ΘΥΡΩΡΟΣ",
    "Ο ΚΑΘΡΕΦΤΗΣ ΤΗΣ ΚΟΛΑΣΕΩΣ",
    "Ο ΚΑΛΟΣ ΓΕΡΜΑΝΟΣ",
    "Ο ΚΑΛΟΣ ΓΙΟΣ",
    "Ο ΚΑΛΥΤΕΡΟΣ ΦΙΛΟΣ ΤΟΥ ΑΝΘΡΩΠΟΥ",
    "Ο ΚΑΝΙΒΑΛΟΣ",
    "Ο ΚΑΝΟΝΑΣ ΤΗΣ ΣΙΩΠΗΣ",
    "Ο ΚΥΑΝΟΠΩΓΩΝ",
    "Ο ΚΥΚΛΟΣ",
    "Ο ΚΥΝΗΓΟΣ",
    "Ο ΛΟΓΙΣΤΗΣ",
    "Ο ΛΥΚΑΝΘΡΩΠΟΣ",
    "Ο ΜΑΝΙΑΚΟΣ ΜΕ ΤΗΝ ΨΑΛΙΔΑ",
    "Ο ΜΑΝΙΑΚΟΣ ΜΠΑΤΣΟΣ",
    "Ο ΜΥΘΟΣ ΤΟΥ ΑΚΕΦΑΛΟΥ ΚΑΒΑΛΑΡΗ",
    "Ο ΜΥΣΤΙΚΟΣ ΕΠΙΣΚΕΠΤΗΣ ΤΗΣ ΝΥΧΤΑΣ",
    "Ο ΝΕΟΣ ΕΦΙΑΛΤΗΣ",
    "Ο ΝΟΜΟΣ ΤΗΣ ΖΟΥΓΚΛΑΣ",
    "Ο ΝΟΥΜΕΡΟ ΕΝΑ ΚΑΤΑΖΗΤΟΥΜΕΝΟΣ",
    "Ο ΝΥΧΤΟΦΥΛΑΚΑΣ",
    "Ο ΠΑΡΑΝΟΪΚΟΣ ΔΟΛΟΦΟΝΟΣ",
    "Ο ΠΑΤΡΙΟΣ",
    "Ο ΠΙΛΟΤΟΣ",
    "Ο ΠΡΙΓΚΗΠΑΣ ΤΟΥ ΣΚΟΤΟΥΣ",
    "Ο ΡΕΠΟΡΤΕΡ ΜΕ ΤΑ ΧΙΛΙΑ ΠΡΟΣΩΠΑ",
    "Ο ΣΗΜΑΔΕΜΕΝΟΣ",
    "Ο ΣΤΑΘΜΟΣ ΔΕΚΑΤΡΙΑ ΔΕΧΕΤΑΙ ΕΠΙΘΕΣΗ",
    "Ο ΣΤΟΙΧΕΙΩΜΕΝΟΣ ΠΥΡΓΟΣ",
    "Ο ΣΤΡΑΓΓΑΛΙΣΤΗΣ ΞΕΡΕΙ ΟΤΙ ΕΙΣΤΕ ΜΟΝΕΣ",
    "Ο ΣΤΡΑΓΓΑΛΙΣΤΗΣ ΤΗΣ ΒΟΣΤΩΝΗΣ",
    "Ο ΣΤΡΑΓΓΑΛΙΣΤΗΣ ΤΟΥ ΜΑΙΑΜΙ ΞΑΝΑΧΤΥΠΑ",
    "Ο ΣΥΓΓΡΑΦΕΑΣ",
    "Ο ΣΥΝΗΓΟΡΟΣ",
    "Ο ΣΧΙΖΟΦΡΕΝΗΣ ΔΟΛΟΦΟΝΟΣ ΜΕ ΤΟ ΠΡΙΟΝΙ",
    "Ο ΣΧΙΖΟΦΡΕΝΗΣ ΔΟΛΟΦΟΝΟΣ ΜΕ ΤΟ ΤΡΥΠΑΝΙ",
    "Ο ΣΩΣΙΑΣ",
    "Ο ΤΑΞΙΔΙΩΤΗΣ",
    "Ο ΤΑΞΙΔΙΩΤΗΣ ΤΗΣ ΒΡΟΧΗΣ",
    "Ο ΤΕΛΕΥΤΑΙΟΣ ΒΡΥΚΟΛΑΚΑΣ",
    "Ο ΤΕΛΕΥΤΑΙΟΣ ΕΞΟΡΚΙΣΜΟΣ  ",
    "Ο ΤΕΤΑΡΤΟΣ ΑΝΘΡΩΠΟΣ",
    "Ο ΤΡΙΤΟΣ ΔΙΔΥΜΟΣ",
    "Ο ΤΡΟΜΟΚΡΑΤΗΣ",
    "Ο ΤΡΟΜΟΣ ΦΩΛΙΑΖΕΙ ΤΗ ΝΥΧΤΑ",
    "Ο ΤΣΙΛΙΑΔΟΡΟΣ",
    "Ο ΥΠΝΩΤΙΣΤΗΣ",
    "Ο ΥΠΟΠΤΟΣ",
    "Ο ΦΑΡΟΣ",
    "Ο ΦΑΡΟΦΥΛΑΚΑΣ",
    "Ο ΦΥΛΑΚΑΣ ΤΟΥ ΣΚΟΤΟΥΣ",
    "Ο ΧΑΡΙΣΜΑΤΙΚΟΣ",
    "Ο ΧΑΡΤΟΠΑΙΚΤΗΣ",
    "Ο ΧΙΟΝΑΝΘΡΩΠΟΣ",
    "Ο ΧΟΡΟΣ ΤΩΝ ΚΑΤΑΣΚΟΠΩΝ",
    "Ο ΧΡΗΣΜΟΣ ΤΗΣ ΠΕΤΑΛΟΥΔΑΣ",
    "ΟΙ ΑΓΓΕΛΙΟΦΟΡΟΙ",
    "ΟΙ ΑΓΓΕΛΟΙ ΤΗΣ ΑΠΟΚΑΛΥΨΗΣ",
    "ΟΙ ΑΘΟΡΥΒΟΙ",
    "ΟΙ ΑΛΛΟΙ",
    "ΟΙ ΑΝΘΡΩΠΟΙ ΚΑΤΩ ΑΠΟ ΤΙΣ ΣΚΑΛΕΣ",
    "ΟΙ ΑΠΟ ΚΑΤΩ ",
    "ΟΙ ΔΑΙΜΟΝΕΣ ΕΣΤΗΣΑΝ ΧΟΡΟ",
    "ΟΙ ΔΑΙΜΟΝΙΣΜΕΝΟΙ",
    "ΟΙ ΔΕΚΑ ΠΛΗΓΕΣ",
    "ΟΙ ΔΙΑΒΟΛΟΓΥΝΑΙΚΕΣ",
    "ΟΙ ΔΙΧΑΣΜΕΝΟΙ",
    "ΟΙ ΔΥΟ ΔΡΑΠΕΤΕΣ",
    "ΟΙ ΕΠΟΜΕΝΕΣ ΤΡΕΙΣ ΜΕΡΕΣ",
    "ΟΙ ΚΑΛΥΤΕΡΕΣ ΦΙΛΕΣ",
    "ΟΙ ΚΑΤΑΡΑΜΕΝΟΙ",
    "ΟΙ ΛΟΦΟΙ ΒΑΦΤΗΚΑΝ ΚΟΚΚΙΝΟΙ",
    "ΟΙ ΜΑΓΙΣΣΕΣ ΤΟΥ ΣΚΟΤΟΥΣ",
    "ΟΙ ΜΕΡΕΣ ΤΟΥ ΣΚΟΤΟΥΣ",
    "ΟΙ ΜΕΤΑΦΡΑΣΤΕΣ",
    "ΟΙ ΜΝΗΜΕΣ ΤΟΥ ΝΕΡΟΥ",
    "ΟΙ ΝΟΜΑΔΕΣ ΤΩΝ ΜΕΓΑΛΟΥΠΟΛΕΩΝ",
    "ΟΙ ΞΥΠΝΙΟΙ ΜΑΓΚΕΣ ΓΕΛΑΝΕ ΤΕΛΕΥΤΑΙΟΙ",
    "ΟΙ ΟΡΔΕΣ ΤΗΣ ΕΚΔΙΚΗΣΗΣ",
    "ΟΙ ΠΕΦΩΤΙΣΜΕΝΟΙ",
    "ΟΙ ΠΡΟΦΗΤΕΙΕΣ",
    "ΟΙ ΡΥΘΜΙΣΤΕΣ",
    "ΟΙ ΣΕΛΙΔΕΣ ΤΟΥ ΤΡΟΜΟΥ",
    "ΟΙ ΣΥΝΕΝΟΧΟΙ",
    "ΟΙ ΤΕΣΣΕΡEΙΣ ΚΑΒΑΛΑΡΗΔΕΣ ΤΗΣ ΑΠΟΚΑΛΥΨΗΣ",
    "ΟΙ ΤΡΕΙΣ ΠΥΛΕΣ ΤΗΣ ΚΟΛΑΣΕΩΣ",
    "ΟΙ ΥΠΟΠΤΟΙ",
    "ΟΙ ΦΩΝΕΣ ΤΩΝ ΝΕΚΡΩΝ ",
    "ΟΙ ΨΙΘΥΡΟΙ ΤΩΝ ΠΝΕΥΜΑΤΩΝ",
    "ΟΙΚΟΓΕΝΕΙΑΚΗ ΣΥΝΟΜΩΣΙΑ",
    "ΟΚΤΑΠΟΔΑ ΦΡΙΚΙΑ",
    "ΟΛΑ ΤΑ ΛΕΦΤΑ ΤΟΥ ΚΟΣΜΟΥ",
    "ΟΛΕΘΡΙΟΣ ΕΡΩΤΑΣ",
    "ΟΝΕΙΡΟΠΑΓΙΔΑ",
    "ΟΠΩΣΔΗΠΟΤΕ ΤΗΝ ΚΥΡΙΑΚΗ",
    "ΟΡΓΙΣΜΕΝΗ ΚΑΤΑΔΙΩΞΗ",
    "ΟΡΓΙΣΜΕΝΟΣ ΓΙΓΑΝΤΑΣ",
    "ΟΡΓΙΣΜΕΝΟΣ ΕΚΔΙΚΗΤΗΣ",
    "ΟΡΓΙΣΜΕΝΟΣ ΕΚΤΕΛΕΣΤΗΣ",
    "ΟΤΑΝ ΞΕΣΠΑΣΕ Η ΒΙΑ",
    "ΠΑΓΙΔΕΥΜΕΝΗ",
    "ΠΑΓΙΔΕΥΜΕΝΗ ΣΤΟ ΔΙΚΤΥΟ",
    "ΠΑΓΙΔΕΥΜΕΝΗ ΨΥΧΗ",
    "ΠΑΙΧΝΙΔΙ ΧΩΡΙΣ ΚΑΝΟΝΕΣ",
    "ΠΑΙΧΝΙΔΙΑ ΕΚΔΙΚΗΣΗΣ",
    "ΠΑΙΧΝΙΔΙΑ ΕΝΗΛΙΚΩΝ",
    "ΠΑΙΧΝΙΔΙΑ ΜΥΑΛΟΥ",
    "ΠΑΙΧΝΙΔΙΑ ΣΥΝΩΜΟΣΙΑΣ",
    "ΠΑΙΧΝΙΔΙΑ ΤΟΥ ΘΑΝΑΤΟΥ",
    "ΠΑΝΔΗΜΙΑ",
    "ΠΑΝΩ ΑΠΟ ΟΛΑ Η ΔΟΥΛΕΙΑ",
    "ΠΑΡΑΘΥΡΟ ΣΤΗΝ ΚΡΕΒΑΤΟΚΑΜΑΡΑ",
    "ΠΑΡΑΙΣΘΗΣΕΙΣ",
    "ΠΑΡΑΛΛΗΛΑ ΜΥΑΛΑ",
    "ΠΑΡΑΝΟΙΑ",
    "ΠΑΡΑΝΟΜΑ ΔΕΜΕΝΕΣ",
    "ΠΑΡΑΝΟΜΟ ΦΟΡΤΙΟ",
    "ΠΑΡΑΝΟΜΟΣ ΝΟΜΟΣ",
    "ΠΑΡΑΣΚΕΥΗ ΚΑΙ ΔΕΚΑΤΡΕΙΣ",
    "ΠΑΡΑΦΡΟΣΥΝΗ",
    "ΠΑΡΕΝΕΡΓΕΙΕΣ",
    "ΠΑΡΟΞΥΣΜΟΣ",
    "ΠΑΡΟΡΜΗΣΗ",
    "ΠΕΙΡΑΜΑΤΑ ΑΘΑΝΑΣΙΑΣ",
    "ΠΕΡΑ ΑΠΟ ΤΟ ΘΑΝΑΤΟ",
    "ΠΕΡΑΝ ΠΑΣΗΣ ΥΠΟΨΙΑΣ",
    "ΠΕΡΑΣΜΕΝΑ ΜΕΣΑΝΥΧΤΑ",
    "ΠΕΤΡΙΝΟΣ ΚΥΚΛΟΣ",
    "ΠΙΚΡΗ ΙΣΤΟΡΙΑ ΓΙΑ ΕΝΑ ΠΤΩΜΑ",
    "ΠΙΡΑΝΧΑΣ ",
    "ΠΛΟΥΣΙΑ ΓΟΗΤΕΥΤΙΚΗ ΚΙ ΕΠΙΚΙΝΔΥΝΗ",
    "ΠΟΙΟΣ ΚΛΕΒΕΙ ΠΟΙΟΝ",
    "ΠΟΙΟΣ ΣΚΟΤΩΣΕ ΤΗ ΘΕΙΑ",
    "ΠΟΙΟΣ ΣΚΟΤΩΣΕ ΤΟΝ ΧΑΡΙ",
    "ΠΟΡΦΥΡΑ ΠΟΤΑΜΙΑ",
    "ΠΟΡΦΥΡΟΣ ΛΟΦΟΣ",
    "ΠΟΤΕ ΔΕΝ ΕΙΣΑΙ ΜΟΝΗ",
    "ΠΟΤΕ ΜΗ ΜΙΛΑΣ ΣΕ ΞΕΝΟΥΣ",
    "ΣΚΟΤΕΙΝΗ ΟΝΤΟΤΗΤΑ",
    "ΣΚΟΤΕΙΝΟ ΚΙΝΗΤΡΟ",
    "ΣΚΟΤΕΙΝΟ ΧΩΡΙΟ",
    "ΣΚΟΤΕΙΝΟΣ ΔΙΑΔΡΟΜΟΣ",
    "ΣΚΟΤΕΙΝΟΣ ΘΑΛΑΜΟΣ",
    "ΣΚΟΤΕΙΝΟΣ ΚΩΔΙΚΑΣ",
    "ΣΚΟΤΕΙΝΟΣ ΤΟΠΟΣ",
    "ΣΚΟΤΩΣΕ ΓΙΑ ΜΕΝΑ",
    "ΣΠΕΣΙΑΛΙΣΤΑΣ",
    "ΣΤΑ ΑΔΥΤΑ ΜΙΑΣ ΑΛΛΗΣ ΔΙΑΣΤΑΣΗΣ",
    "ΣΤΑ ΑΚΡΑ",
    "ΣΤΑ ΒΗΜΑΤΑ ΤΟΥ ΘΑΝΑΤΟΥ",
    "ΣΤΑ ΔΟΝΤΙΑ ΤΟΥ ΤΕΛΕΥΤΑΙΟΥ ΚΑΡΧΑΡΙΑ",
    "ΣΤΑ ΙΧΝΗ ΤΟΥ ΑΝΕΜΟΥ",
    "ΣΤΑ ΙΧΝΗ ΤΟΥ ΠΑΡΑΝΟΙΚΟΥ ΔΟΛΟΦΟΝΟΥ",
    "ΣΤΑ ΝΥΧΙΑ ΤΟΥ ΤΙΓΡΗ",
    "ΣΤΑ ΣΑΓΟΝΙΑ ΤΟΥ ΚΡΟΚΟΔΕΙΛΟΥ",
    "ΣΤΗ ΣΚΙΑ ΤΗΣ ΑΜΦΙΒΟΛΙΑΣ",
    "ΣΤΗ ΣΚΙΑ ΤΟΥ ΔΟΛΟΦΟΝΟΥ",
    "ΣΤΗ ΣΚΙΑ ΤΟΥ ΦΟΒΟΥ",
    "ΣΤΗΜΕΝΗ ΠΑΓΙΔΑ",
    "ΣΤΗΝ ΕΡΗΜΟ ΤΟΥ ΣΚΟΤΟΥΣ",
    "ΣΤΗΝ ΚΑΡΔΙΑ ΤΟΥ ΔΑΣΟΥΣ",
    "ΣΤΙΓΜΑΤΑ",
    "ΣΤΙΓΜΑΤΙΣΜΕΝΟΙ",
    "ΣΤΙΓΜΙΟΤΥΠΑ ΘΑΝΑΤΟΥ",
    "ΣΤΟ ΛΑΒΥΡΙΝΘΟ",
    "ΣΤΟ ΣΤΟΜΑ ΤΗΣ ΤΡΕΛΑΣ",
    "ΣΤΟ ΣΤΟΜΑ ΤΩΝ ΛΥΚΩΝ",
    "ΣΤΟ ΤΕΛΟΣ ΤΟΥ ΤΟΥΝΕΛ",
    "ΣΤΟΙΧΕΙΩΜΕΝΟΙ",
    "ΣΤΟΝ ΤΟΠΟ ΤΟΥ ΕΓΚΛΗΜΑΤΟΣ",
    "ΣΤΡΟΦΗ ΠΡΟΣ ΤΗΝ ΚΟΛΑΣΗ",
    "ΣΥΛΛΕΚΤΗΣ ΟΣΤΩΝ",
    "ΣΥΝΕΝΤΕΥΞΗ ΜΕ ΕΝΑΝ ΒΡΙΚΟΛΑΚΑ",
    "ΣΥΝΗΓΟΡΟΣ ΥΠΕΡΑΣΠΙΣΗΣ",
    "ΣΥΝΟΔΟΣ ΚΥΡΙΩΝ",
    "ΣΥΝΟΡΑ",
    "ΣΥΝΩΜΟΣΙΑ ΘΑΝΑΤΟΥ",
    "ΣΦΑΓΕΙΟ",
    "ΣΦΑΓΗ ΣΤΟ ΚΟΛΕΓΙΟ",
    "ΣΦΑΓΗ ΣΤΟ ΤΡΕΝΟ ΤΟΥ ΘΑΝΑΤΟΥ",
    "ΣΧΕΔΙΟ ΠΤΗΣΗΣ",
    "ΣΧΙΖΟΦΡΕΝΕΙΑ",
    "ΤΑ ΓΕΝΕΘΛΙΑ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΑ ΓΕΡΑΚΙΑ",
    "ΤΑ ΔΕΣΜΑ ΤΟΥ ΔΙΑΒΟΛΟΥ",
    "ΤΑ ΔΥΟ ΠΡΟΣΩΠΑ ΤΟΥ ΙΑΝΟΥΑΡΙΟΥ",
    "ΤΑ ΕΡΕΙΠΙΑ",
    "ΤΑ ΕΡΕΙΠΙΑ ΕΙΝΑΙ ΠΑΝΤΑ ΘΛΙΜΜΕΝΑ",
    "ΤΑ ΖΟΜΠΙ ΞΑΝΑΡΧΟΝΤΑΙ",
    "ΤΑ ΜΑΤΙΑ ΤΗΣ ΤΖΟΥΛΙΑ",
    "ΤΑ ΠΑΙΔΙΑ ΤΗΣ ΝΥΧΤΑΣ",
    "ΤΑ ΠΑΠΟΥΤΣΙΑ ΤΟΥ ΝΕΚΡΟΥ",
    "ΤΑ ΠΛΑΣΜΑΤΑ ΤΗΣ ΝΥΧΤΑΣ",
    "ΤΑ ΠΟΥΛΙΑ",
    "ΤΑ ΣΑΓΟΝΙΑ ΤΟΥ ΚΑΡΧΑΡΙΑ ",
    "ΤΑ ΣΗΜΑΔΙΑ ΤΟΥ ΔΡΑΚΟΥΛΑ",
    "ΤΑ ΣΚΑΛΟΠΑΤΙΑ ΤΟΥ ΘΑΝΑΤΟΥ",
    "ΤΑ ΣΚΟΥΛΗΚΙΑ",
    "ΤΑ ΣΥΝΕΡΓΑ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΑ ΤΕΛΕΥΤΑΙΑ ΟΚΤΩ ΛΕΠΤΑ",
    "ΤΑ ΤΕΡΑΤΑ",
    "ΤΑ ΤΡΙΑ ΠΡΟΣΩΠΑ ΤΟΥ ΣΑΤΑΝΑ",
    "ΤΑΞΙΔΙ ΣΤΟ ΦΟΒΟ",
    "ΤΑΞΙΔΙ ΧΩΡΙΣ ΕΠΙΣΤΡΟΦΗ",
    "ΤΑΞΙΔΙΩΤΕΣ ΣΤΗΝ ΑΛΛΗ ΖΩΗ",
    "ΤΑΥΤΟΤΗΤΑ",
    "ΤΕΛΕΙΟ ΕΓΚΛΗΜΑ",
    "ΤΕΛΕΥΤΑΙΑ ΚΡΑΥΓΗ",
    "ΤΕΛΙΚΗ ΑΝΑΛΥΣΗ",
    "ΤΕΣΣΕΡΑ ΤΕΛΕΙΑ ΕΓΚΛΗΜΑΤΑ",
    "ΤΗΛΕΦΩΝΙΚΟ ΚΕΝΤΡΟ",
    "ΤΗΛΕΦΟΝΙΚΟΣ ΘΑΛΑΜΟΣ",
    "ΤΟ ΑΓΓΙΓΜΑ ΤΟΥ ΚΑΚΟΥ",
    "ΤΟ ΑΓΓΙΓΜΑ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟ ΑΓΟΡΙ ΤΗΣ ΔΙΠΛΑΝΗΣ ΠΟΡΤΑΣ",
    "ΤΟ ΑΚΛΟΝΗΤΟ ΑΛΛΟΘΙ",
    "ΤΟ ΑΚΡΩΤΗΡΙ ΤΟΥ ΦΟΒΟΥ",
    "ΤΟ ΑΝΤΙΚΛΕΙΔΙ",
    "ΤΟ ΑΠΟΛΙΘΩΜΑ",
    "ΤΟ ΑΠΟΛΥΤΟ ΠΑΙΧΝΙΔΙ",
    "ΤΟ ΑΣΑΝΣΕΡ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟ ΑΣΥΛΟ",
    "ΤΟ ΒΑΣΙΛΕΙΟ ΤΩΝ ΠΝΕΥΜΑΤΩΝ",
    "ΤΟ ΒΛΕΜΜΑ ΤΟΥ ΜΑΡΤΥΡΑ",
    "ΤΟ ΒΡΟΜΟΣΚΥΛΟ",
    "ΤΟ ΓΥΑΛΙΝΟ ΣΠΙΤΙ",
    "ΤΟ ΔΑΣΟΣ",
    "ΤΟ ΔΕΛΕΑΡ ΤΟΥ ΔΙΑΒΟΛΟΥ",
    "ΤΟ ΕΒΔΟΜΟ ΣΗΜΑΔΙ",
    "ΤΟ ΕΓΧΕΙΡΙΔΙΟ ΤΟΥ ΚΑΚΟΥ",
    "ΤΟ ΕΚΚΡΕΜΕΣ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟ ΕΝΣΤΙΚΤΟ ΤΗΣ ΖΩΗΣ",
    "ΤΟ ΕΞΟΧΙΚΟ ΣΠΙΤΙ ΤΟΥ ΜΥΣΤΗΡΙΟΥ",
    "ΤΟ ΕΠΙΣΚΕΠΤΗΡΙΟ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟ ΕΡΩΤΙΚΟ ΑΝΤΙΚΕΙΜΕΝΟ ΤΟΥ ΕΓΚΛΗΜΑΤΟΣ",
    "ΤΟ ΕΥΛΟΓΗΜΕΝΟ ΠΑΙΔΙ",
    "ΤΟ ΖΕΥΓΑΡΙ ΤΩΝ ΠΑΡΑΝΟΜΩΝ",
    "ΤΟ ΗΜΕΡΟΛΟΓΙΟ ΤΩΝ ΝΕΚΡΩΝ",
    "ΤΟ ΘΕΑΤΡΟ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟ ΘΗΡΑΜΑ",
    "ΤΟ ΘΥΜΑ",
    "ΤΟ ΚΑΚΟ",
    "ΤΟ ΚΑΚΟ ΣΤΗΝ ΕΠΟΧΗ ΤΩΝ ΗΡΩΩΝ",
    "ΤΟ ΚΑΛΕΣΜΑ",
    "ΤΟ ΚΑΤΑΡΑΜΕΝΟ ΣΚΙΑΧΤΡΟ",
    "ΤΟ ΚΑΤΑΦΥΓΙΟ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟ ΚΕΛΑΡΙ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟ ΚΕΛΙ",
    "ΤΟ ΚΕΦΑΛΑΙΟ",
    "ΤΟ ΚΟΡΑΚΙ",
    "ΤΟ ΚΟΡΙΤΣΙ ΜΕ ΤΟ ΤΑΤΟΥΑΖ",
    "ΤΟ ΚΟΡΙΤΣΙ ΠΟΥ ΕΞΑΦΑΝΙΣΤΗΚΕ",
    "ΤΟ ΚΟΡΙΤΣΙ ΠΟΥ ΕΠΑΙΖΕ ΜΕ ΤΗ ΦΩΤΙΑ",
    "ΤΟ ΚΟΡΙΤΣΙ ΣΤΗ ΦΩΛΙΑ ΤΗΣ ΣΦΗΚΑΣ",
    "ΤΟ ΚΟΡΙΤΣΙ ΣΤΟΝ ΙΣΤΟ ΤΗΣ ΑΡΑΧΝΗΣ",
    "ΤΟ ΚΟΡΙΤΣΙ ΤΗΣ ΒΙΤΡΙΝΑΣ",
    "ΤΟ ΚΟΡΙΤΣΙ ΤΗΣ ΛΙΜΝΗΣ",
    "ΤΟ ΚΟΡΙΤΣΙ ΤΟΥ ΤΡΕΝΟΥ",
    "ΤΟ ΚΟΥΚΛΟΣΠΙΤΟ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟ ΚΟΥΤΙ",
    "ΤΟ ΚΡΗΣΦΥΓΕΤΟ",
    "ΤΟ ΚΡΥΦΤΟ",
    "ΤΟ ΚΤΗΝΟΣ ΤΟΥ ΤΡEΝΟΥ",
    "ΤΟ ΚΥΝΗΓΙ ΤΟΥ ΔΟΛΟΦΟΝΟΥ",
    "ΤΟ ΚΥΝΗΓΙ ΤΟΥ ΚΛΕΦΤΗ",
    "ΤΟ ΜΑΓΑΖΑΚΙ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟ ΜΑΤΙ",
    "ΤΟ ΜΙΚΡΟ ΝΗΣΙ",
    "ΤΟ ΜΙΚΡΟ ΣΠΙΤΙ ΣΤΟ ΔΑΣΟΣ",
    "ΤΟ ΜΙΚΡΟΒΙΟ ΤΟΥ ΦΟΒΟΥ",
    "ΤΟ ΜΠΑΡ",
    "ΤΟ ΜΠΛΕ ΔΩΜΑΤΙΟ",
    "ΤΟ ΜΥΣΤΗΡΙΟ ΤΟΥ ΦΑΡΟΥ",
    "ΤΟ ΜΥΣΤΙΚΟ ΣΤΑ ΜΑΤΙΑ ΤΟΥΣ",
    "ΤΟ ΜΥΣΤΙΚΟ ΤΗΣ ΑΣΗΜΕΝΙΑΣ ΛΙΜΝΗΣ",
    "ΤΟ ΜΥΣΤΙΚΟ ΤΗΣ ΠΕΤΑΛΟΥΔΑΣ",
    "ΤΟ ΜΥΣΤΙΚΟ ΤΟΥ ΣΚΙΑΧΤΡΟΥ",
    "ΤΟ ΜΩΡΟ ΤΗΣ ΡΟΖΜΑΡΙ",
    "ΤΟ ΝΕΚΡΟ ΚΟΡΙΤΣΙ",
    "ΤΟ ΝΗΣΙ ΤΗΣ ΑΠΟΠΛΑΝΗΣΗΣ",
    "ΤΟ ΝΗΣΙ ΤΩΝ ΚΑΤΑΡΑΜΕΝΩΝ",
    "ΤΟ ΝΗΣΙ ΤΩΝ ΧΙΛΙΩΝ ΚΙΝΔΥΝΩΝ",
    "ΤΟ ΞΥΠΝΗΜΑ ΤΩΝ ΘΡΥΛΩΝ ",
    "ΤΟ ΞΥΠΝΗΜΑ ΤΩΝ ΝΕΚΡΩΝ",
    "ΤΟ ΞΥΠΝΗΜΑ ΤΩΝ ΦΑΡΑΩ",
    "ΤΟ ΟΡΦΑΝΟΤΡΟΦΕΙΟ",
    "ΤΟ ΟΤΟΣΤΟΠ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟ ΟΥΡΛΙΑΧΤΟ",
    "ΤΟ ΟΥΡΛΙΑΧΤΟ ΤΩΝ ΛΥΚΩΝ",
    "ΤΟ ΠΑΙΔΙ ΑΠΟ ΤΗ ΓΕΡΜΑΝΙΑ",
    "ΤΟ ΠΑΙΧΝΙΔΙ",
    "ΤΟ ΠΑΙΧΝΙΔΙ ΤΟΥ ΡΟΔΟΥ ",
    "ΤΟ ΠΑΙΧΝΙΔΙ ΤΟΥ ΧΡΗΜΑΤΟΣ",
    "ΤΟ ΠΑΡΚΟ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟ ΠΕΙΡΑΜΑ",
    "ΤΟ ΠΛΑΣΜΑ ΤΗΣ ΑΒΥΣΣΟΥ",
    "ΤΟ ΠΛΟΙΟ ΦΑΝΤΑΣΜΑ",
    "ΤΟ ΠΝΕΥΜΑ ΤΟΥ ΔΑΙΜΟΝΑ",
    "ΤΟ ΠΝΕΥΜΑ ΤΟΥ ΚΑΚΟΥ",
    "ΤΟ ΠΟΙΜΝΙΟ",
    "ΤΟ ΠΟΡΤΡΕΤΟ ΕΝΟΣ ΔΟΛΟΦΟΝΟΥ",
    "ΤΟ ΠΡΟΣΩΠΟ ΤΟΥ ΚΑΚΟΥ",
    "ΤΟ ΠΡΟΦΙΛ ΤΗΣ ΒΙΑΣ",
    "ΤΟ ΣΑΝΑΤΟΡΙΟ",
    "ΤΟ ΣΑΠΙΟ",
    "ΤΟ ΣΚΟΤΕΙΝΟ ΕΓΩ",
    "ΤΟ ΣΟΚ",
    "ΤΟ ΣΠΕΡΜΑ ΤΟΥ ΒΡΥΚΟΛΑΚΑ",
    "ΤΟ ΣΠΙΤΙ",
    "ΤΟ ΣΠΙΤΙ ΣΤΟ ΤΕΛΟΣ ΤΟΥ ΔΡΟΜΟΥ",
    "ΤΟ ΣΠΙΤΙ ΤΟΥ ΘΑΝΑΤΟΥ",
    "ΤΟ ΣΠΙΤΙ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟ ΣΠΙΤΙ ΤΩΝ ΝΕΚΡΩΝ",
    "ΤΟ ΣΠΙΤΙ ΤΩΝ ΟΝΕΙΡΩΝ",
    "ΤΟ ΣΠΙΤΙ ΤΩΝ ΦΑΝΤΑΣΜΑΤΩΝ",
    "ΤΟ ΣΤΙΓΜΑ ΤΗΣ ΠΡΟΔΟΣΙΑΣ",
    "ΤΟ ΣΤΟΙΧΕΙΩΜΕΝΟ ΠΛΟΙΟ",
    "ΤΟ ΣΤΟΙΧΕΙΩΜΕΝΟ ΣΠΙΤΙ",
    "ΤΟ ΣΥΜΒΑΝ",
    "ΤΟ ΣΥΝΔΡΟΜΟ ΤΗΣ ΚΙΝΑΣ",
    "ΤΟ ΣΩΜΑ",
    "ΤΟ ΤΕΛΕΥΤΑΙΟ ΚΥΜΑ",
    "ΤΟ ΤΕΛΕΥΤΑΙΟ ΣΠΙΤΙ ΑΡΙΣΤΕΡΑ",
    "ΤΟ ΤΕΛΟΣ ΤΟΥ ΚΟΣΜΟΥ",
    "ΤΟ ΤΕΡΑΣ",
    "ΤΟ ΤΕΡΑΣ ΤΗΣ ΑΠΟΚΑΛΥΨΕΩΣ",
    "ΤΟ ΤΟΥΝΕΛ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟ ΤΡΑΓΟΥΔΙ ΤΟΥ ΦΟΙΝΙΚΑ",
    "ΤΟ ΤΡΕΝΟ ΤΟΥ ΜΕΣΟΝΥΧΤΙΟΥ",
    "ΤΟ ΤΡΕΝΟ ΤΩΝ ΔΟΛΟΦΟΝΩΝ",
    "ΤΟ ΤΡΙΤΟ ΕΓΚΛΗΜΑ",
    "ΤΟ ΤΣΑΚΑΛΙ ΚΑΙ Ο ΜΑΦΙΟΖΟΣ",
    "ΤΟ ΤΣΙΡΚΟ ΤΩΝ ΕΓΚΛΗΜΑΤΩΝ",
    "ΤΟ ΦΑΙΝΟΜΕΝΟ ΤΗΣ ΠΕΤΑΛΟΥΔΑΣ",
    "ΤΟ ΦΑΝΤΑΣΜΑ",
    "ΤΟ ΦΕΡΕΤΡΟ ΤΟΥ ΒΡΥΚΟΛΑΚΑ",
    "ΤΟ ΦΙΔΙ",
    "ΤΟ ΦΙΛΙ ΠΟΥ ΣΚΟΤΩΝΕΙ",
    "ΤΟ ΧΑΔΙ ΠΟΥ ΣΚΟΤΩΝΕΙ",
    "ΤΟ ΧΑΡΙΣΜΑ",
    "ΤΟ ΧΕΡΙ ΣΤΗΝ ΚΟΥΝΙΑ",
    "ΤΟ ΧΡΥΣΟ ΓΑΝΤΙ",
    "ΤΟ ΧΡΩΜΑ ΤΗΣ ΝΥΧΤΑΣ",
    "ΤΟ ΩΤΟΣΤΟΠ ΤΟΥ ΤΡΟΜΟΥ",
    "ΤΟΝ ΕΛΕΓΑΝ ΠΡΙΓΚΙΠΑ ΤΗΣ ΠΟΛΗΣ",
    "ΤΡΕΙΣ ΦΟΡΕΣ ΣΚΛΗΡΟΣ",
    "ΤΡΕΞΕ",
    "ΤΡΟΜΑΚΤΙΚΕΣ ΙΣΤΟΡΙΕΣ ΣΤΟ ΣΚΟΤΑΔΙ",
    "ΤΡΟΜΟΣ ΑΠΟ ΤΟ ΒΥΘΟ",
    "ΤΡΟΜΟΣ ΠΑΝΩ ΑΠΟ ΤΗΝ ΠΟΛΗ",
    "ΤΡΟΜΟΣ ΣΤΗΝ ΟΠΕΡΑ",
    "ΤΡΟΜΟΣ ΣΤΗΝ ΠΟΛΗ",
    "ΤΡΟΜΟΣ ΣΤΟ ΑΕΡΟΔΡΟΜΙΟ",
    "ΤΡΟΜΟΣ ΣΤΟ ΝΗΣΙ ΤΟΥ ΑΙΜΑΤΟΣ",
    "ΤΡΟΜΟΣ ΣΤΟ ΣΧΟΛΕΙΟ",
    "ΥΓΡΟΣ ΕΦΙΑΛΤΗΣ",
    "ΥΠΟΘΕΣΗ ΔΙΑΦΘΟΡΑΣ",
    "ΥΠΟΨΙΑ",
    "ΥΠΟΨΙΕΣ",
    "ΦΑΙΝΟΜΕΝΑ",
    "ΦΑΝΑΤΙΚΟΣ",
    "ΦΑΡΣΑ Η ΚΕΡΑΣΜΑ",
    "ΦΙΛΙΑ ΠΟΥ ΣΚΟΤΩΝΟΥΝ",
    "ΦΟΝΙΚΗ ΑΝΑΜΕΤΡΗΣΗ",
    "ΦΟΝΙΚΗ ΣΥΧΝΟΤΗΤΑ",
    "ΦΟΝΙΚΟΣ ΙΟΣ",
    "ΧΑΜΕΝΕΣ ΨΥΧΕΣ",
    "ΧΑΜΕΝΟΙ ΣΤΟΝ ΩΚΕΑΝΟ",
    "ΧΑΜΕΝΟΣ ΠΑΡΑΔΕΙΣΟΣ",
    "ΧΑΡΑΥΓΗ ",
    "ΧΟΡΕΥΟΝΤΑΣ ΜΕ ΤΟ ΘΑΝΑΤΟ",
    "ΧΡΗΣΙΜΑ ΑΝΤΙΚΕΙΜΕΝΑ",
    "ΕΤΟΙΜΑΣΟΥ ΝΑ ΠΕΘΑΝΕΙΣ",
    "ΧΩΡΙΣ ΔΙΑΦΥΓΗ",
    "ΧΩΡΙΣ ΔΙΕΞΟΔΟ",
    "ΧΩΡΙΣ ΕΛΠΙΔΑ ΔΙΑΦΥΓΗΣ",
    "ΧΩΡΙΣ ΟΙΚΤΟ",
    "ΨΥΧΡΗ ΚΑΤΑΔΙΩΞΗ",
    "ΨΥΧΩ",
    "ΨΥΧΩΣΗ",
    "ΨΩΝΙΣΤΗΡΙ",
    "ΩΡΑ ΕΓΚΛΗΜΑΤΟΣ",
    "ΩΡΑ ΜΗΔΕΝ",
    "ΩΡΑΙΟΣ ΣΚΛΗΡΟΣ ΚΙ ΑΔΙΣΤΑΚΤΟΣ",
    "ΩΡΕΣ ΑΓΩΝΙΑΣ",
    "ΩΡΟΛΟΓΙΑΚΗ ΒΟΜΒΑ" ];
        
    var tainia ;
    var krummenhtainia ;
    var counterla8osgrammata;
    var ab = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";
    
    function paixnidi(){
        mege8os(); 
        document.getElementById("grammata").style.margin="auto";
        document.getElementById("box").style.backgroundImage = "url('kremala0.jpg')";  
        document.getElementById("grammata").innerHTML = "" ;
        tainia = tainies[Math.floor(Math.random()*tainies.length)];
        krummenhtainia = "";
        counterla8osgrammata=0;
        for ( var i = 0; i < tainia.length; i++ ){
            var keno = " ";
            var gramma;
            if(tainia.charAt(i) === keno){
                gramma = keno ;
            }else{
                gramma="_";
            }  
            krummenhtainia += gramma;
        }
        document.getElementById("tainia").innerHTML = "<span>" +krummenhtainia +"</span>"; 
        for ( var i = 0; i < ab.length; i++ ){
            var gr = ab.charAt(i);
            var btn = document.createElement("button");   
            btn.innerHTML =  gr;
            btn.id= gr;
            btn.setAttribute("onclick","uparxei(this.id)");
            document.getElementById("grammata").appendChild(btn);
            if(i==(ab.length/4)-1||i==(ab.length*2/4)-1||i==(ab.length*3/4)-1){
                var br = document.createElement("br");
                document.getElementById("grammata").appendChild(br);
            }
        }
        /**/
    }  
      
    function uparxei(g){
        document.getElementById(g).disabled=true;
        document.getElementById(g).style.border = "0px";
        document.getElementById(g).style.opacity = "0.4";
        if(tainia.includes(g)){
            for ( var i = 0; i < tainia.length; i++ ){
                if(tainia.charAt(i)==g){
                    var temp1 = krummenhtainia.substring(0,i);
                    var temp2 = krummenhtainia.substring(i+1,krummenhtainia.length);
                    krummenhtainia = temp1 + g + temp2;
                }
            }
            document.getElementById("tainia").innerHTML = "<span>"+krummenhtainia+"</span>";
            if(!krummenhtainia.includes("_")){
                telospaixnidiou("k");
            }
        }else{
            counterla8osgrammata++;
            var temp = ("url('kremala".concat(counterla8osgrammata)).concat('.jpg');
            document.getElementById("box").style.backgroundImage = temp;
            if(counterla8osgrammata == 6){
                document.getElementById("tainia").innerHTML = "<span>"+tainia+"</span>";
                telospaixnidiou("e");
            }
        }  
    }
    
    function telospaixnidiou(a){
        document.getElementById("grammata").innerHTML = "";

        var apotelesma = document.createElement("button");
        if(a=="k"){
           apotelesma.innerHTML = " ΚΕΡΔΙΣΕΣ"; 
        }else{
            apotelesma.innerHTML = " ΕΧΑΣΕΣ"; 
        } 
        apotelesma.id="apotelesma";
        document.getElementById("grammata").appendChild(apotelesma);
        document.getElementById("apotelesma").style.width="170px";
        document.getElementById("apotelesma").style.height="58px";
        document.getElementById("apotelesma").style.border="none";
        document.getElementById("apotelesma").style.outline="none";

        var br = document.createElement("br");
        document.getElementById("grammata").appendChild(br);

        var neop = document.createElement("button");   
        neop.innerHTML = " ΝΕΟ ΠΑΙΧΝΙΔΙ";
        neop.id="neop";
        neop.setAttribute("onclick","paixnidi()");
        document.getElementById("grammata").appendChild(neop);
        document.getElementById("neop").style.width="170px";
        document.getElementById("neop").style.height="58px";  
        
        document.getElementById("grammata").style.marginBottom="75px";
        document.getElementById("grammata").style.marginLeft="96.25px";
    }
     
    function mege8os(){
        var w = innerWidth;
        var h = innerHeight; 
        if(w/h<360/555){
            document.body.style.zoom=((w/360)*100)+"%";
        }else{
            document.body.style.zoom=((h/555)*100)+"%";
        } 
    }

/**/
