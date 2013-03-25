DROP TABLE IF EXISTS personnes_telephones;
CREATE TABLE personnes_telephones (
    id INT NOT NULL AUTO_INCREMENT,
    actif BOOLEAN NOT NULL DEFAULT true,

    personne_id INT NOT NULL,
    adresse_type_id INT NOT NULL,
    countrycode VARCHAR(4),
    telephone VARCHAR(255),
    defaut BOOLEAN NULL DEFAULT false,

    PRIMARY KEY (id),
    FOREIGN KEY (personne_id) REFERENCES personnes(id),
    FOREIGN KEY (adresse_type_id) REFERENCES adresses_types(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;