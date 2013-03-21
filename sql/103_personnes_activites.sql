DROP TABLE IF EXISTS personnes_activites;
CREATE TABLE personnes_activites (
    id INT NOT NULL AUTO_INCREMENT,
    actif BOOLEAN NOT NULL DEFAULT TRUE,

    personne_id INT NOT NULL,
    activite_id INT NOT NULL,
    rattachement_id INT NOT NULL,
    debut DATE NULL DEFAULT NULL,
    fin DATE DEFAULT NULL,
    taux_activite TINYINT,

    PRIMARY KEY (id),
    FOREIGN KEY (personne_id) REFERENCES personnes(id),
    FOREIGN KEY (activite_id) REFERENCES activites(id),
    FOREIGN KEY (rattachement_id) REFERENCES rattachements(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;