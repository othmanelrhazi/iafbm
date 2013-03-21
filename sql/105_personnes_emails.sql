DROP TABLE IF EXISTS personnes_emails;
CREATE TABLE personnes_emails (
    id INT NOT NULL AUTO_INCREMENT,
    actif BOOLEAN NOT NULL DEFAULT true,

    personne_id INT NOT NULL,
    adresse_type_id INT NOT NULL,
    email VARCHAR(200) NOT NULL,
    defaut BOOLEAN NULL DEFAULT false,

    PRIMARY KEY (id),
    FOREIGN KEY (personne_id) REFERENCES personnes(id),
    FOREIGN KEY (adresse_type_id) REFERENCES adresses_types(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;